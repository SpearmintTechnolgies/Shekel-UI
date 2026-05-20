"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { WaitlistRole } from "@/lib/waitlist-types";
import {
  validateWaitlistFields,
  type WaitlistFieldErrors,
} from "@/lib/waitlist-validate";

const ROLES: {
  value: WaitlistRole;
  label: string;
  icon: string;
}[] = [
  { value: "builder", label: "Builder", icon: "bi bi-braces-asterisk" },
  { value: "buyer", label: "Buyer", icon: "bi bi-bag-check-fill" },
  { value: "founder", label: "Founder", icon: "bi bi-rocket-takeoff-fill" },
  { value: "curious", label: "Curious", icon: "bi bi-stars" },
];

const ROLE_LABELS: Record<WaitlistRole, string> = {
  builder: "Builder",
  buyer: "Buyer",
  founder: "Founder",
  curious: "Curious",
};

export function WaitlistModal() {
  const [step, setStep] = useState<"form" | "done">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<WaitlistRole>("builder");
  const [errors, setErrors] = useState<WaitlistFieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successName, setSuccessName] = useState("");
  const [successEmail, setSuccessEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const nameErrorId = useId();
  const emailErrorId = useId();
  const roleErrorId = useId();

  const resetForm = useCallback(() => {
    setStep("form");
    setName("");
    setEmail("");
    setRole("builder");
    setErrors({});
    setFormError("");
    setSubmitting(false);
    setTouched(false);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      resetForm();
      setTimeout(() => nameInputRef.current?.focus(), 200);
    };
    window.addEventListener("shekel:waitlist-open", onOpen);
    return () => window.removeEventListener("shekel:waitlist-open", onOpen);
  }, [resetForm]);

  const runValidation = useCallback(() => {
    const result = validateWaitlistFields({ name, email, role });
    if (!result.ok) {
      setErrors(result.errors);
      return null;
    }
    setErrors({});
    return result.data;
  }, [name, email, role]);

  const handleBlur = (field: keyof WaitlistFieldErrors) => {
    if (!touched) return;
    const result = validateWaitlistFields({ name, email, role });
    if (!result.ok && result.errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: result.errors[field] }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setTouched(true);
    setFormError("");
    const data = runValidation();
    if (!data) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setFormError(
          json.error ??
            "Something went wrong. Please try again in a moment.",
        );
        return;
      }

      setSuccessName(data.name.split(/\s+/)[0] ?? data.name);
      setSuccessEmail(data.email);
      setStep("done");
    } catch {
      setFormError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        className={`modal-step modal-step-form${step === "form" ? " is-active" : ""}`}
        data-step="form"
      >
        <div className="modal-mascot">
          <img src="/assets/mascot_jetpack.png" alt="" />
        </div>
        <span className="eyebrow eyebrow-live modal-eyebrow">
          <span className="eyebrow-dot"></span>
          Pre-launch · closed beta opens Q3 2026
        </span>
        <h2 id="signupTitle" className="modal-title">
          Reserve your spot on <span className="grad-flow">Shekel</span>.
        </h2>
        <p className="modal-sub">
          Join <strong>3,184 builders, founders and operators</strong> on the
          waitlist. Early-access members get <strong>$20 in run credit</strong>{" "}
          on launch day and a dedicated Discord channel for shaping the roadmap.
        </p>

        <form
          className="modal-form"
          id="waitlistForm"
          noValidate
          onSubmit={handleSubmit}
        >
          <label className="field">
            <span className="field-label">Name</span>
            <div className={`field-input${errors.name ? " has-error" : ""}`}>
              <i className="bi bi-person-fill"></i>
              <input
                ref={nameInputRef}
                type="text"
                name="name"
                id="f-name"
                placeholder="Ada Lovelace"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.name;
                      return next;
                    });
                  }
                }}
                onBlur={() => handleBlur("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? nameErrorId : undefined}
              />
            </div>
            {errors.name ? (
              <p className="field-error" id={nameErrorId} role="alert">
                {errors.name}
              </p>
            ) : null}
          </label>

          <label className="field">
            <span className="field-label">Email</span>
            <div className={`field-input${errors.email ? " has-error" : ""}`}>
              <i className="bi bi-envelope-fill"></i>
              <input
                type="email"
                name="email"
                id="f-email"
                placeholder="ada@analyticalengines.co"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.email;
                      return next;
                    });
                  }
                }}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? emailErrorId : undefined}
              />
            </div>
            {errors.email ? (
              <p className="field-error" id={emailErrorId} role="alert">
                {errors.email}
              </p>
            ) : null}
          </label>

          <div className="field field-full">
            <span className="field-label">I am a…</span>
            <div
              className={`role-row${errors.role ? " has-error" : ""}`}
              role="radiogroup"
              aria-label="Role"
              aria-describedby={errors.role ? roleErrorId : undefined}
              aria-invalid={Boolean(errors.role)}
            >
              {ROLES.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  className={`role${role === r.value ? " is-selected" : ""}`}
                  aria-pressed={role === r.value}
                  disabled={submitting}
                  onClick={() => {
                    setRole(r.value);
                    if (errors.role) {
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.role;
                        return next;
                      });
                    }
                  }}
                >
                  <span>
                    <i className={r.icon}></i>
                    {r.label}
                  </span>
                </button>
              ))}
            </div>
            {errors.role ? (
              <p className="field-error" id={roleErrorId} role="alert">
                {errors.role}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className={`btn btn-primary btn-glow btn-lg modal-submit${submitting ? " is-loading" : ""}`}
            disabled={submitting}
          >
            <span className="submit-default">
              Reserve my spot <i className="bi bi-arrow-right"></i>
            </span>
            <span className="submit-loading">
              <span className="spinner"></span> Securing your seat…
            </span>
          </button>

          {formError ? (
            <p className="modal-fine waitlist-form-error" role="alert">
              {formError}
            </p>
          ) : null}

          <p className="modal-fine">
            By signing up you agree to occasional product updates. We
            won&apos;t share your email. Unsubscribe anytime.
          </p>
        </form>
      </div>

      <div
        className={`modal-step modal-step-done${step === "done" ? " is-active" : ""}`}
        data-step="done"
      >
        <div className="success-orbit">
          <div className="success-ring"></div>
          <div className="success-check">
            <i className="bi bi-check-lg"></i>
          </div>
        </div>
        <h2 className="modal-title">
          You&apos;re in, <span className="grad-flow">{successName}</span>.
        </h2>
        <p className="modal-sub">
          You&apos;re <strong>#3,185</strong> on the waitlist. We&apos;ll email{" "}
          <strong>{successEmail}</strong> the moment your spot opens up.
        </p>
        <p className="modal-sub modal-sub-recap">
          Signed up as a <strong>{ROLE_LABELS[role]}</strong>.
        </p>
        <div className="success-perks">
          <div className="perk">
            <i className="bi bi-coin"></i>
            <div>
              <strong>$20 in run credit</strong>
              <span>auto-applied on launch day</span>
            </div>
          </div>
          <div className="perk">
            <i className="bi bi-discord"></i>
            <div>
              <strong>Founders Discord</strong>
              <span>invite incoming · shape the roadmap</span>
            </div>
          </div>
          <div className="perk">
            <i className="bi bi-lightning-charge-fill"></i>
            <div>
              <strong>Skip the queue</strong>
              <span>refer a friend, move up 50 spots</span>
            </div>
          </div>
        </div>
        <div className="success-cta">
          <button type="button" className="btn btn-primary btn-glow" data-close>
            Back to exploring
          </button>
          <a href="#" className="btn btn-ghost">
            <i className="bi bi-twitter-x"></i> Share on X
          </a>
        </div>
      </div>
    </>
  );
}
