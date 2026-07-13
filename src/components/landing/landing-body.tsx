/* Auto-generated from ../../index.html */
import type { CSSProperties } from "react";
import { WaitlistModal } from "./WaitlistModal";

export function LandingBody() {
  return (
    <>
      
        
        <div className="cosmos" aria-hidden="true">
          <svg className="starfield starfield-far" id="starfieldFar" viewBox="0 0 1600 2400" preserveAspectRatio="none"></svg>
          <svg className="starfield starfield-mid" id="starfieldMid" viewBox="0 0 1600 2400" preserveAspectRatio="none"></svg>
          <svg className="starfield starfield-near" id="starfieldNear" viewBox="0 0 1600 2400" preserveAspectRatio="none"></svg>
      
          
          <div className="galaxy">
            <div className="galaxy-core"></div>
            <div className="galaxy-ring galaxy-ring-1"></div>
            <div className="galaxy-ring galaxy-ring-2"></div>
            <div className="galaxy-ring galaxy-ring-3"></div>
          </div>
      
          
          <div className="comet"><span className="comet-head"></span><span className="comet-tail"></span></div>
      
          
          <div className="shooting-stars">
            <span className="shoot shoot-1"></span>
            <span className="shoot shoot-2"></span>
            <span className="shoot shoot-3"></span>
            <span className="shoot shoot-4"></span>
            <span className="shoot shoot-5"></span>
          </div>
      
          
          <svg className="debris" viewBox="0 0 200 200" aria-hidden="true">
            <g className="sat sat-1">
              <rect x="-6" y="-2" width="12" height="4" rx="1" fill="#60A5FA" opacity=".6"/>
              <rect x="-3" y="-6" width="6" height="12" rx="1" fill="#A78BFA" opacity=".7"/>
            </g>
          </svg>
      
          <div className="nebula nebula-1"></div>
          <div className="nebula nebula-2"></div>
          <div className="nebula nebula-3"></div>
          <div className="grain"></div>
          <div className="vignette"></div>
        </div>
      
        
        <div className="cursor-trail" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      
        
        <header className="nav" id="nav">
          <div className="nav-inner">
            <a href="#" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <img src="/assets/shekel-logo.png" alt="" width={32} height={32} />
                <span className="brand-dot"></span>
              </span>
              <span className="brand-word">Shekel</span>
            </a>
            <nav className="nav-links">
              <a href="#marketplace" className="nav-link is-active">Marketplace</a>
              <a href="#categories" className="nav-link">Categories</a>
              <a href="#how" className="nav-link">How it works</a>
              <a href="#workflows" className="nav-link">Workflows</a>
              <a href="#developers" className="nav-link">Developers</a>
              <a href="#pricing" className="nav-link">Pricing</a>
            </nav>
            <div className="nav-actions">
              <button type="button" className="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                <i className="bi bi-moon-stars-fill theme-icon icon-moon"></i>
                <i className="bi bi-sun-fill theme-icon icon-sun"></i>
              </button>
              <a href="#" className="nav-signin">Sign in</a>
              <a href="#" className="btn btn-primary btn-glow" data-signup={true}>
                Join the waitlist <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </header>
      
        <main>
          
          <section className="hero" id="hero" data-screen-label="01 Hero">
            <div className="hero-grid">
              <div className="hero-content reveal">
                <span className="eyebrow eyebrow-live">
                  <span className="eyebrow-dot"></span>
                  Early access · <strong>MVP launching Q3 2026</strong>
                </span>
      
                <h1 className="hero-title">
                  <span className="line-1">The App Store</span>
                  <span className="line-2">for <span className="grad-flow">AI Agents</span>.</span>
                </h1>
      
                <p className="hero-sub">
                  Discover, run, and chain specialized AI agents built by independent teams.
                  Pay per task, subscribe, or integrate by API — without rebuilding from scratch.
                </p>
      
                
                <form className="cmd-search" id="heroSearch">
                  <i className="bi bi-search cmd-icon"></i>
                  <span className="cmd-placeholder">
                    <span className="cmd-typed" id="cmdTyped"></span><span className="cmd-cursor"></span>
                  </span>
                  <input type="text" className="cmd-input" aria-label="Search agents" />
                  <span className="cmd-kbd">⌘ K</span>
                  <button type="submit" className="btn btn-primary cmd-btn" data-signup={true}>
                    <i className="bi bi-rocket-takeoff-fill"></i> Reserve my spot
                  </button>
                </form>
      
                <p className="hero-note"><i className="bi bi-info-circle"></i> We're pre-launch — sign up to be among the first to run agents on Shekel.</p>
      
                <div className="chips">
                  <span className="chips-label">Trending:</span>
                  <button className="chip is-active" data-cat="all">All</button>
                  <button className="chip" data-cat="content">Content</button>
                  <button className="chip" data-cat="legal">Legal</button>
                  <button className="chip" data-cat="ecommerce">E-Commerce</button>
                  <button className="chip" data-cat="design">Design</button>
                  <button className="chip" data-cat="support">Support</button>
                  <button className="chip" data-cat="data">Data</button>
                  <button className="chip" data-cat="dev">Developer</button>
                </div>
      
                <div className="hero-stats">
                  <div className="stat"><strong id="counterAgents">2,418</strong><span>Agents in pipeline</span></div>
                  <div className="stat"><strong>74</strong><span>Categories planned</span></div>
                  <div className="stat"><strong id="counterWait">3,184</strong><span>On the waitlist</span></div>
                  <div className="stat"><strong>Q3</strong><span>2026 launch</span></div>
                </div>
              </div>
      
              
              <div className="hero-stage" aria-hidden="true">
                <div className="orbit-ring orbit-ring-outer">
                  <svg viewBox="0 0 600 600">
                    <circle cx="300" cy="300" r="290" fill="none" stroke="rgba(96,165,250,0.22)" strokeWidth="1" strokeDasharray="2 8" />
                  </svg>
                </div>
                <div className="orbit-ring orbit-ring-inner">
                  <svg viewBox="0 0 460 460">
                    <circle cx="230" cy="230" r="220" fill="none" stroke="rgba(167,139,250,0.20)" strokeWidth="1" strokeDasharray="4 7" />
                  </svg>
                </div>
      
                <div className="orbit-glow"></div>
      
                <img className="mascot mascot-hero" src="/assets/mascot_runner.png" alt="" />
      
                
                <div className="orbit-host orbit-host-1">
                  <div className="mini-card mini-card-1">
                    <span className="mini-av mini-av-blue">L</span>
                    <div>
                      <div className="mini-title">LexAI · Contract review</div>
                      <div className="mini-meta"><span className="run-dot"></span>Running · 4.2s</div>
                    </div>
                  </div>
                </div>
                <div className="orbit-host orbit-host-2">
                  <div className="mini-card mini-card-2">
                    <span className="mini-av mini-av-violet">A</span>
                    <div>
                      <div className="mini-title">ArchitectAI</div>
                      <div className="mini-meta">Generating floor plan…</div>
                    </div>
                    <span className="mini-pct">68%</span>
                  </div>
                </div>
                <div className="orbit-host orbit-host-3">
                  <div className="mini-card mini-card-3">
                    <span className="mini-av mini-av-cyan">S</span>
                    <div>
                      <div className="mini-title">SocialCraft</div>
                      <div className="mini-meta">Drafting 4 posts</div>
                    </div>
                    <i className="bi bi-arrow-up-right mini-arrow"></i>
                  </div>
                </div>
                <div className="orbit-host orbit-host-4">
                  <div className="mini-card mini-card-4">
                    <span className="mini-av mini-av-mint">$</span>
                    <div>
                      <div className="mini-title">ShopScribe</div>
                      <div className="mini-meta">312 descriptions · queued</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            
            <div className="hero-floor">
              <span><i className="bi bi-globe2"></i> San Francisco · Berlin · Lagos · Singapore</span>
              <span className="hero-floor-divider"></span>
              <span><i className="bi bi-shield-check"></i> SOC 2 Type II</span>
              <span className="hero-floor-divider"></span>
              <span><i className="bi bi-broadcast"></i> Network · <strong>12.4K TPS</strong></span>
            </div>
          </section>
      
          
          <section className="trust" aria-label="Trust signals">
            <div className="trust-inner">
              <div className="trust-pill"><i className="bi bi-patch-check-fill"></i> Verified publishers</div>
              <div className="trust-pill"><i className="bi bi-box-seam"></i> Sandboxed runs</div>
              <div className="trust-pill"><i className="bi bi-activity"></i> SLA-backed uptime</div>
              <div className="trust-pill"><i className="bi bi-people-fill"></i> Reviewed by humans</div>
            </div>
          </section>
      
          
          <section className="featured" id="marketplace" data-screen-label="02 Featured agents">
            <div className="container">
                <div className="section-head reveal">
                  <div>
                    <span className="section-eyebrow"><i className="bi bi-stars"></i> Coming at launch</span>
                    <h2 className="section-title">Agents your team will put to work day one.</h2>
                  </div>
                  <a href="#" className="section-link" data-signup={true}>Get notified when we launch <i className="bi bi-arrow-right"></i></a>
                </div>
      
              <div className="agents">
                
                <article className="agent reveal" data-cat="content">
                  <header className="agent-head">
                    <div className="agent-id">
                      <span className="agent-av av-cyan">S</span>
                      <div>
                        <h3 className="agent-name">SocialCraft AI <i className="bi bi-patch-check-fill verified"></i></h3>
                        <div className="agent-sub"><span className="cat">Content</span> · by Loomwork Labs</div>
                      </div>
                    </div>
                    <button className="bookmark" aria-label="Save"><i className="bi bi-bookmark"></i></button>
                  </header>
                  <p className="agent-desc">
                    Generates platform-specific posts for Instagram, X, LinkedIn and TikTok from a brief or URL — with tone matching and a built-in calendar.
                  </p>
      
                  <div className="agent-viz viz-social">
                    <div className="viz-row viz-row-in">
                      <i className="bi bi-link-45deg"></i>
                      <span>shekel.ai/post/launch-day</span>
                    </div>
                    <div className="viz-flow">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="viz-row viz-row-out">
                      <span className="viz-pill"><i className="bi bi-instagram"></i> IG · 4</span>
                      <span className="viz-pill"><i className="bi bi-twitter-x"></i> X · 6</span>
                      <span className="viz-pill"><i className="bi bi-linkedin"></i> LI · 2</span>
                      <span className="viz-pill"><i className="bi bi-tiktok"></i> TT · 1</span>
                    </div>
                  </div>
      
                  <footer className="agent-foot">
                    <div className="agent-stat"><i className="bi bi-star-fill"></i> 4.9 <small>· 2,184</small></div>
                    <div className="agent-stat"><i className="bi bi-lightning-charge-fill"></i> 184K</div>
                    <div className="agent-price"><strong>$0.05</strong><span>/post</span></div>
                    <a href="#" className="btn-ghost-pill" data-signup={true}>Try demo <i className="bi bi-arrow-right"></i></a>
                  </footer>
                </article>
      
                
                <article className="agent reveal" data-cat="design">
                  <header className="agent-head">
                    <div className="agent-id">
                      <span className="agent-av av-violet">A</span>
                      <div>
                        <h3 className="agent-name">ArchitectAI <i className="bi bi-patch-check-fill verified"></i></h3>
                        <div className="agent-sub"><span className="cat">Design · Real Estate</span> · by Nordhaus</div>
                      </div>
                    </div>
                    <button className="bookmark" aria-label="Save"><i className="bi bi-bookmark"></i></button>
                  </header>
                  <p className="agent-desc">
                    Generates 3D floor plans and architectural renderings from natural-language descriptions. Iterate on rooms, materials and light in seconds.
                  </p>
      
                  <div className="agent-viz viz-arch">
                    <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="floorplan-svg">
                      <defs>
                        <linearGradient id="fpg" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="#60A5FA" stopOpacity=".28"/>
                          <stop offset="1" stopColor="#A78BFA" stopOpacity=".08"/>
                        </linearGradient>
                      </defs>
                      <rect x="8" y="8" width="304" height="104" rx="6" fill="url(#fpg)" stroke="#60A5FA" strokeOpacity=".6" pathLength="100" strokeDasharray="100" strokeDashoffset="100" className="fp-line" style={{ '--d': '0s' } as React.CSSProperties}/>
                      <line x1="120" y1="8" x2="120" y2="68" stroke="#60A5FA" strokeOpacity=".55" pathLength="100" strokeDasharray="100" strokeDashoffset="100" className="fp-line" style={{ '--d': '0.4s' } as React.CSSProperties}/>
                      <line x1="8" y1="68" x2="220" y2="68" stroke="#60A5FA" strokeOpacity=".55" pathLength="100" strokeDasharray="100" strokeDashoffset="100" className="fp-line" style={{ '--d': '0.7s' } as React.CSSProperties}/>
                      <line x1="220" y1="8" x2="220" y2="112" stroke="#60A5FA" strokeOpacity=".55" pathLength="100" strokeDasharray="100" strokeDashoffset="100" className="fp-line" style={{ '--d': '1s' } as React.CSSProperties}/>
                      <text x="20" y="28" fontSize="8" fill="#A3B0C2" fontFamily="JetBrains Mono">LIVING · 24m²</text>
                      <text x="132" y="28" fontSize="8" fill="#A3B0C2" fontFamily="JetBrains Mono">KITCHEN · 11m²</text>
                      <text x="232" y="28" fontSize="8" fill="#A3B0C2" fontFamily="JetBrains Mono">BED · 16m²</text>
                      <text x="20" y="92" fontSize="8" fill="#A3B0C2" fontFamily="JetBrains Mono">HALL</text>
                      <text x="132" y="92" fontSize="8" fill="#A3B0C2" fontFamily="JetBrains Mono">BATH</text>
                    </svg>
                  </div>
      
                  <footer className="agent-foot">
                    <div className="agent-stat"><i className="bi bi-star-fill"></i> 4.8 <small>· 612</small></div>
                    <div className="agent-stat"><i className="bi bi-lightning-charge-fill"></i> 41K</div>
                    <div className="agent-price"><strong>$2.50</strong><span>/plan</span></div>
                    <a href="#" className="btn-ghost-pill" data-signup={true}>Try demo <i className="bi bi-arrow-right"></i></a>
                  </footer>
                </article>
      
                
                <article className="agent reveal" data-cat="legal">
                  <header className="agent-head">
                    <div className="agent-id">
                      <span className="agent-av av-blue">L</span>
                      <div>
                        <h3 className="agent-name">LexAI <i className="bi bi-patch-check-fill verified"></i></h3>
                        <div className="agent-sub"><span className="cat">Legal</span> · by Beacon Law</div>
                      </div>
                    </div>
                    <button className="bookmark" aria-label="Save"><i className="bi bi-bookmark"></i></button>
                  </header>
                  <p className="agent-desc">
                    Reviews contracts, flags risky clauses, and returns a plain-English summary with a quantified risk score and suggested edits.
                  </p>
      
                  <div className="agent-viz viz-lex">
                    <div className="lex-gauge">
                      <svg viewBox="0 0 120 70">
                        <path d="M10 60 A 50 50 0 0 1 110 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M10 60 A 50 50 0 0 1 110 60" fill="none" stroke="url(#gaugeg)" strokeWidth="8" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100" className="gauge-fill"/>
                        <defs>
                          <linearGradient id="gaugeg" x1="0" x2="1">
                            <stop offset="0" stopColor="#10B981"/>
                            <stop offset=".55" stopColor="#F59E0B"/>
                            <stop offset="1" stopColor="#EF4444"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="lex-score"><strong>62</strong><small>/ 100 risk</small></div>
                    </div>
                    <ul className="lex-clauses">
                      <li className="ok"><i className="bi bi-check-circle-fill"></i> Term & termination</li>
                      <li className="warn"><i className="bi bi-exclamation-triangle-fill"></i> Auto-renewal · 36 mo</li>
                      <li className="warn"><i className="bi bi-exclamation-triangle-fill"></i> Liability cap below norm</li>
                    </ul>
                  </div>
      
                  <footer className="agent-foot">
                    <div className="agent-stat"><i className="bi bi-star-fill"></i> 4.9 <small>· 1,047</small></div>
                    <div className="agent-stat"><i className="bi bi-lightning-charge-fill"></i> 92K</div>
                    <div className="agent-price"><strong>$1.00</strong><span>/contract</span></div>
                    <a href="#" className="btn-ghost-pill" data-signup={true}>Try demo <i className="bi bi-arrow-right"></i></a>
                  </footer>
                </article>
      
                
                <article className="agent reveal" data-cat="ecommerce">
                  <header className="agent-head">
                    <div className="agent-id">
                      <span className="agent-av av-amber">$</span>
                      <div>
                        <h3 className="agent-name">ShopScribe <i className="bi bi-patch-check-fill verified"></i></h3>
                        <div className="agent-sub"><span className="cat">E-Commerce</span> · by Larkfield</div>
                      </div>
                    </div>
                    <button className="bookmark" aria-label="Save"><i className="bi bi-bookmark"></i></button>
                  </header>
                  <p className="agent-desc">
                    SEO-optimised product descriptions in bulk for Amazon, Shopify and WooCommerce. CSV in, channel-ready copy out.
                  </p>
      
                  <div className="agent-viz viz-shop">
                    <div className="shop-line"><span className="shop-sku">SKU-08214</span><span className="shop-name typed-name" data-text="Linen sleep set, sage"></span><span className="shop-pct">92</span></div>
                    <div className="shop-line"><span className="shop-sku">SKU-08221</span><span className="shop-name typed-name" data-text="Walnut bedside table"></span><span className="shop-pct">88</span></div>
                    <div className="shop-line"><span className="shop-sku">SKU-08230</span><span className="shop-name typed-name" data-text="Ribbed cotton bath towel"></span><span className="shop-pct">95</span></div>
                  </div>
      
                  <footer className="agent-foot">
                    <div className="agent-stat"><i className="bi bi-star-fill"></i> 4.7 <small>· 3,810</small></div>
                    <div className="agent-stat"><i className="bi bi-lightning-charge-fill"></i> 2.4M</div>
                    <div className="agent-price"><strong>$0.03</strong><span>/description</span></div>
                    <a href="#" className="btn-ghost-pill" data-signup={true}>Try demo <i className="bi bi-arrow-right"></i></a>
                  </footer>
                </article>
      
                
                <article className="agent agent-wide reveal" data-cat="support">
                  <header className="agent-head">
                    <div className="agent-id">
                      <span className="agent-av av-mint">S</span>
                      <div>
                        <h3 className="agent-name">SupportBot Pro <i className="bi bi-patch-check-fill verified"></i></h3>
                        <div className="agent-sub"><span className="cat">Customer Support</span> · by Helix Service · <span className="ent-badge">Enterprise ready</span></div>
                      </div>
                    </div>
                    <button className="bookmark" aria-label="Save"><i className="bi bi-bookmark"></i></button>
                  </header>
      
                  <div className="agent-wide-body">
                    <div>
                      <p className="agent-desc agent-desc-lg">
                        Handles tier-1 FAQs, drafts replies for your agents, and plugs straight into Zendesk, Intercom and Freshdesk. Routes the hard tickets to humans, every time.
                      </p>
                      <div className="integrations">
                        <span className="integ-label">Integrates with</span>
                        <div className="integ-row">
                          <span className="integ">Zendesk</span>
                          <span className="integ">Intercom</span>
                          <span className="integ">Freshdesk</span>
                          <span className="integ">Slack</span>
                          <span className="integ">Hubspot</span>
                        </div>
                      </div>
                    </div>
                    <div className="support-stats">
                      <div className="ss-item">
                        <span>Median 1st response</span>
                        <strong>11<small>s</small></strong>
                      </div>
                      <div className="ss-item">
                        <span>Auto-resolved</span>
                        <strong>68<small>%</small></strong>
                      </div>
                      <div className="ss-item">
                        <span>CSAT lift</span>
                        <strong>+9<small>pt</small></strong>
                      </div>
                    </div>
                  </div>
      
                  <footer className="agent-foot agent-foot-wide">
                    <div className="agent-stat"><i className="bi bi-star-fill"></i> 4.9 <small>· 902</small></div>
                    <div className="agent-stat"><i className="bi bi-lightning-charge-fill"></i> 312K resolved</div>
                    <div className="agent-stat"><i className="bi bi-clock"></i> 99.97% uptime</div>
                    <div className="agent-price"><strong>$49</strong><span>/month per inbox</span></div>
                    <div className="agent-cta-row">
                      <a href="#" className="btn-ghost-pill" data-signup={true}>Talk to sales</a>
                      <a href="#" className="btn btn-primary btn-sm" data-signup={true}>Subscribe <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </footer>
                </article>
              </div>
            </div>
          </section>
      
          
          <section className="categories" id="categories" data-screen-label="03 Categories">
            <div className="container">
              <div className="section-head section-head-center reveal">
                <span className="section-eyebrow"><i className="bi bi-grid-3x3-gap-fill"></i> Browse by category</span>
                <h2 className="section-title">74 categories. One marketplace.</h2>
                <p className="section-sub">From legal review to floor plans to support automation — pick a specialist trained for the job.</p>
              </div>
      
              <div className="cat-grid">
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#3B82F6' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-pencil-square"></i></div>
                  <h3>Content & Marketing</h3>
                  <p>Copy, social, SEO, brand voice.</p>
                  <div className="cat-foot"><span>312 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#A78BFA' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-house-gear"></i></div>
                  <h3>Design & Real Estate</h3>
                  <p>Renderings, floor plans, 3D scenes.</p>
                  <div className="cat-foot"><span>84 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#10B981' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-shield-check"></i></div>
                  <h3>Legal & Compliance</h3>
                  <p>Contracts, policy, due diligence.</p>
                  <div className="cat-foot"><span>146 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#F59E0B' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-bag-check"></i></div>
                  <h3>E-Commerce</h3>
                  <p>Listings, pricing, merchandising.</p>
                  <div className="cat-foot"><span>208 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#22D3EE' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-chat-square-dots"></i></div>
                  <h3>Customer Support</h3>
                  <p>Tier-1 automation, QA, routing.</p>
                  <div className="cat-foot"><span>167 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#60A5FA' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-bar-chart-line"></i></div>
                  <h3>Data & Analytics</h3>
                  <p>BI, classification, enrichment.</p>
                  <div className="cat-foot"><span>289 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#F472B6' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-code-square"></i></div>
                  <h3>Developer Tools</h3>
                  <p>Code review, docs, migrations.</p>
                  <div className="cat-foot"><span>421 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
                <a href="#" className="cat-tile reveal" style={{ '--cat': '#34D399' } as React.CSSProperties}>
                  <div className="cat-icon"><i className="bi bi-cash-coin"></i></div>
                  <h3>Finance & Ops</h3>
                  <p>Bookkeeping, forecasting, AP/AR.</p>
                  <div className="cat-foot"><span>198 agents</span><i className="bi bi-arrow-up-right"></i></div>
                </a>
              </div>
            </div>
          </section>
      
          
          <section className="how" id="how" data-screen-label="04 How it works">
            <div className="how-bg">
              <div className="constellation" id="constellation"></div>
            </div>
      
            <div className="container how-head reveal">
              <span className="section-eyebrow"><i className="bi bi-compass"></i> How Shekel works</span>
              <h2 className="section-title">From discovery to production in an afternoon.</h2>
              <p className="section-sub">Find the right agent, test it on your own data, then run it pay-as-you-go or wire it into your stack with one API key.</p>
            </div>
      
            <div className="how-scroller">
              <div className="how-track">
                <article className="how-step" data-step="1">
                  <span className="how-num">01 · Discover</span>
                  <h3>Search 2,418 agents. Filter by what matters.</h3>
                  <p>Filter by category, capability or output format. Compare price model, latency, language, compliance and reviewer rating.</p>
                  <div className="how-mini">
                    <div className="how-search-bar">
                      <i className="bi bi-search"></i>
                      <span>summarize support tickets</span>
                      <span className="how-shortcut">⌘ K</span>
                    </div>
                    <div className="how-filter-row">
                      <span className="how-filter active">Latency &lt; 2s</span>
                      <span className="how-filter">Rating ≥ 4.5</span>
                      <span className="how-filter">SOC 2</span>
                      <span className="how-filter">EN + DE</span>
                    </div>
                    <ul className="how-results">
                      <li><span className="mini-av mini-av-mint">S</span><span className="how-r-name">SupportBot Pro</span><span className="how-r-tag tag-green">★ 4.9 · 0.8s</span></li>
                      <li><span className="mini-av mini-av-blue">T</span><span className="how-r-name">TicketDigest</span><span className="how-r-tag">★ 4.7 · 1.4s</span></li>
                      <li><span className="mini-av mini-av-cyan">A</span><span className="how-r-name">AnswerWise</span><span className="how-r-tag">★ 4.6 · 1.1s</span></li>
                    </ul>
                  </div>
                </article>
      
                <article className="how-step" data-step="2">
                  <span className="how-num">02 · Try & evaluate</span>
                  <h3>Run on your own data. Compare side-by-side.</h3>
                  <p>Run candidates in a sandboxed environment. Compare two or three head-to-head before you commit a cent.</p>
                  <div className="how-mini">
                    <div className="compare">
                      <div className="compare-col winner">
                        <header><span className="mini-av mini-av-mint">S</span> SupportBot Pro <span className="win-pill">WINNER</span></header>
                        <ul>
                          <li><span>Latency</span><strong>0.8s</strong></li>
                          <li><span>Cost / run</span><strong>$0.004</strong></li>
                          <li><span>Match</span><strong className="green">92%</strong></li>
                        </ul>
                      </div>
                      <div className="compare-col">
                        <header><span className="mini-av mini-av-blue">T</span> TicketDigest</header>
                        <ul>
                          <li><span>Latency</span><strong>1.4s</strong></li>
                          <li><span>Cost / run</span><strong>$0.002</strong></li>
                          <li><span>Match</span><strong>88%</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
      
                <article className="how-step" data-step="3">
                  <span className="how-num">03 · Run or integrate</span>
                  <h3>One API key. Predictable billing. Full logs.</h3>
                  <p>Use the agent from the dashboard, schedule it on a workflow, or call it directly. The wires connect, the sparks land where they should.</p>
                  <div className="how-mini">
                    <div className="code-block">
                      <header>
                        <span className="dot-r"></span><span className="dot-y"></span><span className="dot-g"></span>
                        <span className="code-file">curl</span>
                        <span className="code-status"><span className="status-dot status-live"></span> 200 OK</span>
                      </header>
      <pre className="code-pre"><span className="t-method">POST</span> https://api.shekel.ai/v1/agents/<span className="t-val">supportbot-pro</span>/run
      <span className="t-key">Authorization</span>: Bearer sk_live_…
      {"\n\n{\n  "}
        <span className="t-str">&quot;ticket_id&quot;</span>: <span className="t-str">&quot;T-48219&quot;</span>,
        {"\n  "}
        <span className="t-str">&quot;channel&quot;</span>: <span className="t-str">&quot;zendesk&quot;</span>
      {"\n}"}<span className="caret"></span></pre>
                    </div>
                  </div>
                </article>
              </div>
      
              
              <div className="how-mascot-stage">
                <div className="how-mascot-glow"></div>
                <img className="how-mascot is-active" data-step="1" src="/assets/mascot_telescope.png" alt="" />
                <img className="how-mascot" data-step="2" src="/assets/mascot_shrug.png" alt="" />
                <img className="how-mascot" data-step="3" src="/assets/mascot_wires.png" alt="" />
      
                
                <svg className="how-decor decor-1 is-active" data-step="1" viewBox="0 0 400 400">
                  <g className="constel">
                    <circle cx="60" cy="80" r="3" />
                    <circle cx="160" cy="50" r="2.4" />
                    <circle cx="280" cy="120" r="3.2" />
                    <circle cx="340" cy="240" r="2.8" />
                    <circle cx="220" cy="300" r="3" />
                    <circle cx="100" cy="240" r="2.5" />
                    <circle cx="40" cy="340" r="2.2" />
                    <line x1="60" y1="80" x2="160" y2="50" />
                    <line x1="160" y1="50" x2="280" y2="120" />
                    <line x1="280" y1="120" x2="340" y2="240" />
                    <line x1="340" y1="240" x2="220" y2="300" />
                    <line x1="220" y1="300" x2="100" y2="240" />
                    <line x1="100" y1="240" x2="40" y2="340" />
                    <line x1="100" y1="240" x2="60" y2="80" />
                  </g>
                </svg>
                <svg className="how-decor decor-2" data-step="2" viewBox="0 0 400 400">
                  <g className="scales">
                    <line x1="200" y1="80" x2="200" y2="320" strokeDasharray="3 6"/>
                    <circle cx="120" cy="200" r="58" />
                    <circle cx="280" cy="200" r="58" />
                    <text x="120" y="206" textAnchor="middle">A</text>
                    <text x="280" y="206" textAnchor="middle">B</text>
                  </g>
                </svg>
                <svg className="how-decor decor-3" data-step="3" viewBox="0 0 400 400">
                  <g className="sparks">
                    <path d="M120 200 Q 180 140 240 200" />
                    <path d="M120 220 Q 200 280 280 220" />
                    <circle cx="200" cy="160" r="2" className="sp"/>
                    <circle cx="220" cy="180" r="2" className="sp"/>
                    <circle cx="180" cy="260" r="2" className="sp"/>
                    <circle cx="240" cy="240" r="2" className="sp"/>
                  </g>
                </svg>
              </div>
            </div>
          </section>
      
          
          <section className="workflows" id="workflows" data-screen-label="05 Workflows">
            <div className="container wf-grid">
              <div className="wf-copy reveal">
                <span className="section-eyebrow"><i className="bi bi-diagram-3"></i> Chain agents into workflows</span>
                <h2 className="section-title">Compose specialists into a system that ships.</h2>
                <p className="section-sub">Pass the output of one agent into the next. Add a human-review step, a database write, or a Slack alert. Build the workflow visually, version it, run it on a schedule.</p>
                <ul className="wf-points">
                  <li><i className="bi bi-check-circle-fill"></i> <strong>220+ pre-built triggers</strong> — webhook, cron, email, file drop.</li>
                  <li><i className="bi bi-check-circle-fill"></i> <strong>Branch on confidence score</strong> — escalate to humans below threshold.</li>
                  <li><i className="bi bi-check-circle-fill"></i> <strong>One bill for the whole chain</strong> — usage by agent, broken down per run.</li>
                </ul>
                <div className="wf-cta">
                  <a href="#" className="btn btn-primary btn-glow" data-signup={true}>Open workflow builder <i className="bi bi-arrow-right"></i></a>
                  <a href="#" className="btn btn-ghost" data-signup={true}>See example workflows</a>
                </div>
              </div>
      
              <div className="wf-canvas reveal" aria-hidden="true">
                <svg className="wf-wires" viewBox="0 0 600 460" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="wire1" x1="0" x2="1">
                      <stop offset="0" stopColor="#3B82F6" stopOpacity="0"/>
                      <stop offset=".4" stopColor="#3B82F6" stopOpacity=".9"/>
                      <stop offset="1" stopColor="#A78BFA" stopOpacity=".9"/>
                    </linearGradient>
                  </defs>
                  <path id="wire-1" d="M 120 110 C 200 110, 220 80, 290 80" />
                  <path id="wire-2" d="M 120 110 C 200 110, 220 270, 290 270" />
                  <path id="wire-3" d="M 290 80 C 350 80, 410 145, 444 228" />
                  <path id="wire-4" d="M 290 270 C 350 270, 410 205, 444 228" />
                  <circle r="5" className="wf-packet"><animateMotion dur="3.6s" repeatCount="indefinite"><mpath xlinkHref="#wire-1"/></animateMotion></circle>
                  <circle r="5" className="wf-packet wf-packet-2"><animateMotion dur="3.6s" begin="1.2s" repeatCount="indefinite"><mpath xlinkHref="#wire-2"/></animateMotion></circle>
                  <circle r="5" className="wf-packet"><animateMotion dur="3.2s" begin="0.4s" repeatCount="indefinite"><mpath xlinkHref="#wire-3"/></animateMotion></circle>
                  <circle r="5" className="wf-packet wf-packet-2"><animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite"><mpath xlinkHref="#wire-4"/></animateMotion></circle>
                </svg>
      
                <div className="wf-node wf-trigger" style={{ left: "4%", top: "18%" }}>
                  <div className="wf-node-h"><i className="bi bi-lightning-charge-fill"></i> TRIGGER</div>
                  <div className="wf-node-t">New product · Shopify</div>
                </div>
                <div className="wf-node wf-agent" style={{ left: "36%", top: "8%" }}>
                  <div className="wf-node-h"><span className="mini-av mini-av-amber">$</span> AGENT</div>
                  <div className="wf-node-t">ShopScribe · Generate description</div>
                  <div className="wf-node-tag">avg 1.4s · $0.03 · <span className="run-dot"></span>running</div>
                </div>
                <div className="wf-node wf-agent" style={{ left: "36%", top: "54%" }}>
                  <div className="wf-node-h"><span className="mini-av mini-av-cyan">S</span> AGENT</div>
                  <div className="wf-node-t">SocialCraft · Launch post</div>
                  <div className="wf-node-tag">avg 2.8s · $0.05 · <span className="run-dot"></span>running</div>
                </div>
                <div className="wf-node wf-human" style={{ left: "74%", top: "40%" }}>
                  <div className="wf-node-h"><i className="bi bi-person-check-fill"></i> HUMAN</div>
                  <div className="wf-node-t">Review & publish</div>
                  <div className="wf-node-tag">queue: 3</div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="developers" id="developers" data-screen-label="06 Developers">
            <div className="container dev-grid">
              <div className="dev-side reveal">
                <span className="section-eyebrow"><i className="bi bi-braces-asterisk"></i> Built an agent? Make it earn.</span>
                <h2 className="section-title">Publish once. Reach <span className="grad-flow">84,000 buyers.</span></h2>
                <p className="section-sub">Wrap your model or pipeline with our SDK, set your price, and ship to the marketplace. We handle hosting, billing, KYC, reviews and the long-tail of integrations so you can build the next one.</p>
      
                <ul className="dev-points">
                  <li><span className="dev-num">85%</span><span><strong>Rev share</strong> · per run, to the publisher</span></li>
                  <li><span className="dev-num">4</span><span><strong>Pricing models</strong> · per-task, sub, freemium, enterprise</span></li>
                  <li><span className="dev-num">∞</span><span><strong>Versions & rollouts</strong> · A/B by region, instant rollback</span></li>
                  <li><span className="dev-num">4</span><span><strong>SDKs</strong> · Python, TypeScript, Go, Rust</span></li>
                </ul>
      
                <div className="dev-cta">
                  <a href="#" className="btn btn-primary btn-glow" data-signup={true}>Read the docs <i className="bi bi-arrow-right"></i></a>
                  <a href="#" className="btn btn-ghost" data-signup={true}>Submit an agent</a>
                </div>
              </div>
      
              <div className="dev-stage reveal">
                <img className="dev-mascot" src="/assets/mascot_holo.png" alt="" />
                <div className="dev-panel-tilt">
                  <div className="dev-panel">
                    <header className="dev-panel-h">
                      <div className="dev-tabs">
                        <span className="dev-tab is-active">Overview</span>
                        <span className="dev-tab">Revenue</span>
                        <span className="dev-tab">Versions</span>
                        <span className="dev-tab">Logs</span>
                      </div>
                      <span className="dev-live"><span className="status-dot status-live"></span> Live · 100%</span>
                    </header>
      
                    <div className="dev-kpis">
                      <div className="kpi">
                        <span>Revenue</span>
                        <strong>$24,812 <small className="up">+18%</small></strong>
                      </div>
                      <div className="kpi">
                        <span>Runs</span>
                        <strong>498,210 <small className="up">+21%</small></strong>
                      </div>
                      <div className="kpi">
                        <span>Avg rating</span>
                        <strong>4.86 <small>1,204 reviews</small></strong>
                      </div>
                      <div className="kpi">
                        <span>Active subs</span>
                        <strong>3,481 <small className="up">+12%</small></strong>
                      </div>
                    </div>
      
                    <div className="dev-chart">
                      <svg viewBox="0 0 600 160" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" stopColor="#3B82F6" stopOpacity=".45"/>
                            <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
                          </linearGradient>
                          <linearGradient id="chart-line" x1="0" x2="1">
                            <stop offset="0" stopColor="#60A5FA"/>
                            <stop offset="1" stopColor="#A78BFA"/>
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4"/>
                        <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4"/>
                        <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4"/>
                        <path className="chart-area" d="M0 124 L40 118 L80 110 L120 116 L160 96 L200 88 L240 92 L280 70 L320 62 L360 78 L400 56 L440 44 L480 50 L520 30 L560 24 L600 14 L600 160 L0 160 Z" fill="url(#chart-fill)" opacity="0"/>
                        <path className="chart-line" d="M0 124 L40 118 L80 110 L120 116 L160 96 L200 88 L240 92 L280 70 L320 62 L360 78 L400 56 L440 44 L480 50 L520 30 L560 24 L600 14" fill="none" stroke="url(#chart-line)" strokeWidth="2.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
                        <circle cx="600" cy="14" r="4" fill="#60A5FA" className="chart-end" />
                      </svg>
                      <div className="dev-chart-x">
                        <span>Apr 17</span><span>Apr 24</span><span>May 1</span><span>May 8</span><span>May 15</span>
                      </div>
                    </div>
      
                    <div className="dev-versions">
                      <header>
                        <span>Version</span><span>Released</span><span>Runs</span><span>Rating</span><span>Status</span>
                      </header>
                      <div className="dv-row">
                        <span><strong>v2.4.0</strong></span><span>May 12</span><span>184,210</span><span>4.91</span>
                        <span className="dv-pill dv-live"><span className="status-dot"></span>Live · 100%</span>
                      </div>
                      <div className="dv-row">
                        <span><strong>v2.3.2</strong></span><span>Apr 28</span><span>208,600</span><span>4.84</span>
                        <span className="dv-pill dv-depr"><span className="status-dot"></span>Deprecating</span>
                      </div>
                      <div className="dv-row">
                        <span><strong>v2.5.0-β</strong></span><span>May 14</span><span>1,840</span><span>4.95</span>
                        <span className="dv-pill dv-beta"><span className="status-dot"></span>Beta · 5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="reviews" data-screen-label="07 Reviews">
            <div className="container">
              <div className="section-head section-head-center reveal">
                <span className="section-eyebrow"><i className="bi bi-chat-quote-fill"></i> What teams say</span>
                <h2 className="section-title">Trusted by teams who hate brittle pipelines.</h2>
              </div>
              <div className="reviews-grid">
                <article className="review reveal">
                  <div className="stars">★★★★★</div>
                  <p>“We replaced three internal scripts and a contractor with one Shekel workflow. Wrote the equivalent of four months of product copy in two hours.”</p>
                  <footer>
                    <span className="rv-av av-blue">M</span>
                    <div><strong>Maya Okonkwo</strong><span>Head of Ops · Larkfield</span></div>
                  </footer>
                </article>
                <article className="review reveal">
                  <div className="stars">★★★★★</div>
                  <p>“LexAI catches the same things our outside counsel does — for orders of magnitude less. We use it as a first-pass on every NDA now.”</p>
                  <footer>
                    <span className="rv-av av-violet">D</span>
                    <div><strong>Daniel Reisner</strong><span>GC · Northwind Capital</span></div>
                  </footer>
                </article>
                <article className="review reveal">
                  <div className="stars">★★★★★</div>
                  <p>“Publishing on Shekel meant we could focus on the model. The first month covered our compute bill four times over.”</p>
                  <footer>
                    <span className="rv-av av-mint">J</span>
                    <div><strong>Júlia Marçal</strong><span>Founder · Nordhaus Studio</span></div>
                  </footer>
                </article>
              </div>
            </div>
          </section>
      
          
          <section className="closer" id="pricing" data-screen-label="08 CTA">
            <div className="closer-bg">
              <div className="closer-shape closer-shape-1"></div>
              <div className="closer-shape closer-shape-2"></div>
              <div className="closer-shape closer-shape-3"></div>
              <div className="closer-shape closer-shape-4"></div>
            </div>
            <div className="container closer-inner">
              <img className="closer-mascot" src="/assets/mascot_jetpack.png" alt="" />
              <div className="closer-text reveal">
                <span className="section-eyebrow on-dark"><i className="bi bi-rocket-takeoff-fill"></i> Pre-launch · be first in line</span>
                <h2 className="closer-title">Be there when the doors open.<br/>Get <span className="grad-flow">early-access</span> & launch credit.</h2>
                <p className="closer-sub">Free to join the waitlist. First 1,000 sign-ups get <strong>$20 in run credit</strong> on launch day. No card required.</p>
                <div className="closer-cta">
                  <a href="#" className="btn btn-primary btn-glow btn-lg" data-signup={true}>Join the waitlist <i className="bi bi-arrow-right"></i></a>
                  <a href="#" className="btn btn-outline-light btn-lg" data-signup={true}>I'm a builder — publish with us</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      
        
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="foot-brand">
              <a href="#" className="brand">
                <span className="brand-mark" aria-hidden="true">
                  <img src="/assets/shekel-logo.png" alt="" width={32} height={32} />
                  <span className="brand-dot"></span>
                </span>
                <span className="brand-word">Shekel</span>
              </a>
              <p>The decentralised marketplace for specialised AI agents. Built for builders, in orbit since 2024.</p>
              <div className="foot-socials">
                <a href="https://www.linkedin.com/company/shekelpro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.facebook.com/shekelaiofficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/shekelaiofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Marketplace</h4>
              <a href="#">Browse agents</a>
              <a href="#">Categories</a>
              <a href="#">Featured</a>
              <a href="#">New & trending</a>
            </div>
            <div className="foot-col">
              <h4>For developers</h4>
              <a href="#">Documentation</a>
              <a href="#">API reference</a>
              <a href="#">SDKs</a>
              <a href="#">Publish an agent</a>
              <a href="#">Pricing & payouts</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
            <div className="foot-col">
              <h4>Trust</h4>
              <a href="#">Security</a>
              <a href="#">SOC 2 compliance</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="container foot-base">
            <span>© 2026 Shekel Labs · Built for builders.</span>
            <span className="foot-status"><span className="status-dot status-live"></span> All systems normal · 12.4K TPS</span>
          </div>
        </footer>
      
        
        <div className="modal" id="signupModal" role="dialog" aria-modal="true" aria-labelledby="signupTitle" hidden={true}>
          <div className="modal-backdrop" data-close={true}></div>
          <div className="modal-card">
            <div className="modal-bg" aria-hidden="true">
              <div className="modal-orb"></div>
              <div className="modal-orb modal-orb-2"></div>
            </div>
      
            <button className="modal-close" aria-label="Close" data-close={true}><i className="bi bi-x-lg"></i></button>
      
            
            <WaitlistModal />
          </div>
        </div>
      
        
      
    </>
  );
}
