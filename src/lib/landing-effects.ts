/* Ported from ../../script-v2.js */

export function initLandingEffects(): () => void {
  const cleanups: Array<() => void> = [];
  let destroyed = false;

  const on = (
    target: EventTarget,
    type: string,
    handler: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) => {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  };

  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const buildStarfield = (
    svg: Element | null,
    count: number,
    baseR: number,
    baseOp: number,
    twinkleChance: number,
  ) => {
    if (!svg) return;
    const W = 1600;
    const H = 2400;
    const ns = "http://www.w3.org/2000/svg";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const c = document.createElementNS(ns, "circle");
      const r = Math.random();
      const radius = baseR + Math.random() * baseR * 0.9;
      c.setAttribute("cx", String(Math.random() * W));
      c.setAttribute("cy", String(Math.random() * H));
      c.setAttribute("r", radius.toFixed(2));
      c.setAttribute(
        "fill",
        r < 0.7 ? "#ffffff" : r < 0.92 ? "#cfdcff" : "#9bb6ff",
      );
      const op = baseOp + Math.random() * 0.5;
      c.setAttribute("opacity", op.toFixed(2));
      if (!prefersReduced && Math.random() < twinkleChance) {
        const dur = (2.5 + Math.random() * 5).toFixed(2) + "s";
        const a = document.createElementNS(ns, "animate");
        a.setAttribute("attributeName", "opacity");
        a.setAttribute(
          "values",
          `${op.toFixed(2)};${(op * 0.15).toFixed(2)};${op.toFixed(2)}`,
        );
        a.setAttribute("dur", dur);
        a.setAttribute("repeatCount", "indefinite");
        c.appendChild(a);
      }
      frag.appendChild(c);
    }
    svg.appendChild(frag);
  };

  for (const id of ["starfieldFar", "starfieldMid", "starfieldNear"]) {
    const el = document.getElementById(id);
    if (el) el.replaceChildren();
  }
  buildStarfield(document.getElementById("starfieldFar"), 240, 0.35, 0.1, 0.1);
  buildStarfield(document.getElementById("starfieldMid"), 140, 0.7, 0.2, 0.2);
  buildStarfield(document.getElementById("starfieldNear"), 80, 1.1, 0.35, 0.28);

  const sfFar = document.getElementById("starfieldFar");
  const sfMid = document.getElementById("starfieldMid");
  const sfNear = document.getElementById("starfieldNear");
  if (!prefersReduced && matchMedia("(pointer: fine)").matches) {
    let pmx = 0;
    let pmy = 0;
    on(
      window,
      "mousemove",
      (e: Event) => {
        const me = e as MouseEvent;
        pmx = (me.clientX / innerWidth - 0.5) * 2;
        pmy = (me.clientY / innerHeight - 0.5) * 2;
      },
      { passive: true },
    );
    const pTick = () => {
      if (destroyed) return;
      if (sfFar) (sfFar as HTMLElement).style.transform = `translate(${pmx * 6}px, ${pmy * 4}px)`;
      if (sfMid) (sfMid as HTMLElement).style.transform = `translate(${pmx * 14}px, ${pmy * 10}px)`;
      if (sfNear) (sfNear as HTMLElement).style.transform = `translate(${pmx * 26}px, ${pmy * 18}px)`;
      requestAnimationFrame(pTick);
    };
    pTick();
  }

  if (!prefersReduced && matchMedia("(pointer: fine)").matches) {
    const dots = Array.from(
      document.querySelectorAll<HTMLSpanElement>(".cursor-trail span"),
    );
    const pos = dots.map(() => ({ x: -50, y: -50 }));
    let mx = -50;
    let my = -50;
    let running = false;
    on(
      window,
      "mousemove",
      (e: Event) => {
        const me = e as MouseEvent;
        mx = me.clientX;
        my = me.clientY;
        if (!running) {
          running = true;
          requestAnimationFrame(tick);
        }
      },
      { passive: true },
    );
    function tick() {
      if (destroyed) return;
      pos[0].x += (mx - pos[0].x) * 0.4;
      pos[0].y += (my - pos[0].y) * 0.4;
      for (let i = 1; i < pos.length; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.32;
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.32;
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.transform = `translate(${pos[i].x}px, ${pos[i].y}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(tick);
    }
  } else {
    const t = document.querySelector(".cursor-trail");
    if (t) t.remove();
    document.body.style.cursor = "auto";
  }

  const root = document.documentElement;
  const stored = localStorage.getItem("shekel-theme-v2");
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("shekel-theme-v2", next);
    });
    cleanups.push(() => themeBtn.replaceWith(themeBtn.cloneNode(true)));
  }

  const modal = document.getElementById("signupModal") as HTMLElement | null;
  const formStep = modal?.querySelector('[data-step="form"]');
  const doneStep = modal?.querySelector('[data-step="done"]');
  const nameInput = document.getElementById("f-name") as HTMLInputElement | null;
  const emailInput = document.getElementById("f-email") as HTMLInputElement | null;
  const submitBtn = modal?.querySelector(".modal-submit");

  const showStep = (which: "form" | "done") => {
    if (!modal) return;
    [formStep, doneStep].forEach((s) => s?.classList.remove("is-active"));
    const target = which === "done" ? doneStep : formStep;
    target?.classList.add("is-active");
  };

  const openModal = () => {
    if (!modal) return;
    showStep("form");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    setTimeout(() => nameInput?.focus(), 200);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  on(document, "click", (e) => {
    const ev = e as MouseEvent;
    const target = ev.target as Element | null;
    if (target?.closest("[data-signup]")) {
      e.preventDefault();
      openModal();
      return;
    }
    if (target?.closest("[data-close]") && modal && !modal.hidden) {
      e.preventDefault();
      closeModal();
    }
  });

  on(document, "keydown", (e) => {
    const ev = e as KeyboardEvent;
    if (ev.key === "Escape" && modal && !modal.hidden) closeModal();
    if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === "k") {
      ev.preventDefault();
      openModal();
    }
  });

  const heroSearch = document.getElementById("heroSearch");
  if (heroSearch) {
    heroSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      openModal();
    });
    cleanups.push(() =>
      heroSearch.replaceWith(heroSearch.cloneNode(true)),
    );
  }

  const form = document.getElementById("waitlistForm");
  if (form && nameInput && emailInput && submitBtn) {
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const name = (nameInput.value || "").trim();
      const email = (emailInput.value || "").trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      nameInput.parentElement?.classList.toggle("has-error", !name);
      emailInput.parentElement?.classList.toggle("has-error", !emailOk);
      if (!name || !emailOk) return;

      submitBtn.classList.add("is-loading");
      setTimeout(() => {
        submitBtn.classList.remove("is-loading");
        const firstName = name.split(/\s+/)[0];
        const successName = document.getElementById("successName");
        const successEmail = document.getElementById("successEmail");
        if (successName) successName.textContent = firstName;
        if (successEmail) successEmail.textContent = email;
        const counterWait = document.getElementById("counterWait");
        if (counterWait) counterWait.textContent = "3,185";
        showStep("done");
      }, 1100);
    };
    form.addEventListener("submit", onSubmit);
    cleanups.push(() => form.removeEventListener("submit", onSubmit));

    [nameInput, emailInput].forEach((el) => {
      const onInput = () => el.parentElement?.classList.remove("has-error");
      el.addEventListener("input", onInput);
      cleanups.push(() => el.removeEventListener("input", onInput));
    });
  }

  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", scrollY > 20);
  };
  on(window, "scroll", onScroll, { passive: true });
  onScroll();

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("revealed"),
              idx * 80,
            );
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  } else {
    revealEls.forEach((el) => el.classList.add("revealed"));
  }

  if ("IntersectionObserver" in window) {
    const aio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            aio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    document.querySelectorAll(".agent").forEach((el) => aio.observe(el));

    const dio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            dio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    document.querySelectorAll(".dev-stage").forEach((el) => dio.observe(el));
    cleanups.push(() => {
      aio.disconnect();
      dio.disconnect();
    });
  }

  const cmdTyped = document.getElementById("cmdTyped");
  if (cmdTyped) {
    const queries = [
      "review a contract",
      "write product descriptions",
      "design a floor plan",
      "summarize support tickets",
      "generate ad copy",
    ];
    let qi = 0;
    let ci = 0;
    let deleting = false;
    const tick = () => {
      const q = queries[qi];
      if (!deleting) {
        ci++;
        cmdTyped.textContent = q.slice(0, ci);
        if (ci >= q.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
        setTimeout(tick, 60 + Math.random() * 40);
      } else {
        ci--;
        cmdTyped.textContent = q.slice(0, ci);
        if (ci <= 0) {
          deleting = false;
          qi = (qi + 1) % queries.length;
          setTimeout(tick, 350);
          return;
        }
        setTimeout(tick, 26);
      }
    };
    if (!prefersReduced) {
      setTimeout(tick, 800);
    } else {
      cmdTyped.textContent = queries[0];
    }
  }

  const typedNames = document.querySelectorAll(".typed-name");
  if (typedNames.length && !prefersReduced && "IntersectionObserver" in window) {
    const tio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const txt = el.dataset.text || "";
          let i = 0;
          const baseDelay = 200 + idx * 280;
          setTimeout(function step() {
            el.textContent = txt.slice(0, ++i);
            if (i < txt.length) setTimeout(step, 22 + Math.random() * 30);
          }, baseDelay);
          tio.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    typedNames.forEach((el) => tio.observe(el));
    cleanups.push(() => tio.disconnect());
  } else {
    typedNames.forEach((el) => {
      (el as HTMLElement).textContent =
        (el as HTMLElement).dataset.text || "";
    });
  }

  const chips = document.querySelectorAll(".chips .chip");
  const agentCards = document.querySelectorAll(".agent");
  chips.forEach((chip) => {
    const handler = () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const cat = (chip as HTMLElement).dataset.cat;
      agentCards.forEach((card) => {
        if (cat === "all" || (card as HTMLElement).dataset.cat === cat) {
          card.classList.remove("is-dim");
        } else {
          card.classList.add("is-dim");
        }
      });
    };
    chip.addEventListener("click", handler);
    cleanups.push(() => chip.removeEventListener("click", handler));
  });

  const howSteps = document.querySelectorAll(".how-step");
  const howMascots = document.querySelectorAll(".how-mascot");
  const howDecors = document.querySelectorAll(".how-decor");
  if (howSteps.length && "IntersectionObserver" in window) {
    const setActive = (n: string | undefined) => {
      howSteps.forEach((s) =>
        s.classList.toggle("is-active", (s as HTMLElement).dataset.step === n),
      );
      howMascots.forEach((m) =>
        m.classList.toggle("is-active", (m as HTMLElement).dataset.step === n),
      );
      howDecors.forEach((d) =>
        d.classList.toggle("is-active", (d as HTMLElement).dataset.step === n),
      );
    };
    const hio = new IntersectionObserver(
      (entries) => {
        let bestEntry: IntersectionObserverEntry | undefined;
        let bestRatio = 0;
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            bestEntry = e;
            bestRatio = e.intersectionRatio;
          }
        });
        if (bestEntry) {
          setActive((bestEntry.target as HTMLElement).dataset.step);
        }
      },
      { threshold: [0.35, 0.6, 0.85], rootMargin: "-30% 0px -30% 0px" },
    );
    howSteps.forEach((s) => hio.observe(s));
    cleanups.push(() => hio.disconnect());
  }

  const mascotHero = document.querySelector(".mascot-hero") as HTMLElement | null;
  if (mascotHero && !prefersReduced) {
    let ticking = false;
    const onPx = () => {
      const y = scrollY;
      mascotHero.style.transform = `translateY(${-y * 0.18}px)`;
      ticking = false;
    };
    on(window, "scroll", () => {
      if (!ticking) {
        requestAnimationFrame(onPx);
        ticking = true;
      }
    }, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const handler = (e: Event) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    a.addEventListener("click", handler);
    cleanups.push(() => a.removeEventListener("click", handler));
  });

  const cn = document.getElementById("constellation");
  if (cn) {
    cn.replaceChildren();
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 400 400");
    svg.style.width = "100%";
    svg.style.height = "100%";
    const pts: [number, number][] = [];
    for (let i = 0; i < 12; i++) {
      const x = 20 + Math.random() * 360;
      const y = 20 + Math.random() * 360;
      pts.push([x, y]);
      const c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", String(x));
      c.setAttribute("cy", String(y));
      c.setAttribute("r", String(1 + Math.random() * 2));
      c.setAttribute("fill", "#60A5FA");
      svg.appendChild(c);
    }
    for (let i = 0; i < pts.length; i++) {
      let best = -1;
      let bd = 1e9;
      for (let j = 0; j < pts.length; j++) {
        if (i === j) continue;
        const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]);
        if (d < bd) {
          bd = d;
          best = j;
        }
      }
      if (best > -1) {
        const l = document.createElementNS(ns, "line");
        l.setAttribute("x1", String(pts[i][0]));
        l.setAttribute("y1", String(pts[i][1]));
        l.setAttribute("x2", String(pts[best][0]));
        l.setAttribute("y2", String(pts[best][1]));
        l.setAttribute("stroke", "rgba(96,165,250,0.3)");
        l.setAttribute("stroke-width", "0.6");
        svg.appendChild(l);
      }
    }
    cn.appendChild(svg);
  }

  return () => {
    destroyed = true;
    cleanups.forEach((fn) => fn());
  };
}
