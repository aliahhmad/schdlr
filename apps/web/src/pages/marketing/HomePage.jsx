import "../../styles/HomePage.css";

// ── DATA ──────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: "bi bi-calendar2-check",
    title: "Smart Booking",
    desc: "Clients pick their service, provider, and time slot. Conflict detection ensures no double-bookings. Supports guest booking without an account.",
  },
  {
    icon: "bi bi-receipt-cutoff",
    title: "Auto Invoicing",
    desc: "Invoices generate automatically on booking or completion. Track lifecycle from Draft → Sent → Paid → Overdue with full audit history.",
  },
  {
    icon: "bi bi-credit-card-2-front",
    title: "Stripe Payments",
    desc: "Clients pay invoices via secure Stripe checkout. Webhooks update payment status in real time. Receipts delivered automatically.",
  },
  {
    icon: "bi bi-bell-fill",
    title: "Automated Reminders",
    desc: "Email reminders 24h and 1h before appointments. EventBridge-powered scheduling so no reminder is ever missed.",
  },
  {
    icon: "bi bi-star-fill",
    title: "Feedback & Reviews",
    desc: "Post-appointment feedback requests sent automatically. Collect ratings, tags, and comments. View analytics per service or provider.",
  },
  {
    icon: "bi bi-people-fill",
    title: "Multi-Role Access",
    desc: "Admin, Staff, and Client roles with granular permissions. Full audit logs of every action — invoice edits, cancellations, and more.",
  },
];

const steps = [
  {
    num: "1",
    title: "Set up your business",
    desc: "Add your services, pricing, availability, and team. Customize invoices with your logo and branding.",
    connector: true,
  },
  {
    num: "2",
    title: "Share your booking link",
    desc: "Clients or guests pick a service, choose a time, and confirm — no app download required.",
    connector: true,
  },
  {
    num: "3",
    title: "Invoice automatically",
    desc: "Invoices are generated and emailed after each session. Clients pay via Stripe in seconds.",
    connector: true,
  },
  {
    num: "4",
    title: "Collect feedback & grow",
    desc: "Automated feedback requests build your reputation. Track revenue, ratings, and trends on your dashboard.",
    connector: false,
  },
];

const plans = [
  {
    label: "Solo",
    price: "Free",
    period: null,
    desc: "Perfect to get started",
    features: [
      "Up to 20 bookings/month",
      "1 service type",
      "Email confirmations",
      "Basic invoicing",
      "Guest booking",
    ],
    cta: "Get started free",
    featured: false,
  },
  {
    label: "Pro",
    price: "$29",
    period: "/month",
    desc: "For growing service businesses",
    features: [
      "Unlimited bookings",
      "Unlimited services",
      "Stripe payments",
      "Auto invoicing + receipts",
      "Reminders (email)",
      "Feedback collection",
      "Up to 3 staff accounts",
    ],
    cta: "Start Pro free for 14 days",
    featured: true,
  },
  {
    label: "Business",
    price: "$79",
    period: "/month",
    desc: "For teams and enterprises",
    features: [
      "Everything in Pro",
      "Unlimited staff accounts",
      "Full RBAC permissions",
      "Audit logs",
      "SMS reminders",
      "Priority support",
      "Custom domain + branding",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      '"I used to spend an hour every evening chasing invoices. Now Schdlr handles it all — clients pay the same day, automatically."',
    name: "Sara Akhtar",
    role: "Business Consultant, Karachi",
    initials: "SA",
    avatarBg: "#1558C0",
  },
  {
    quote:
      '"The guest booking flow is seamless. My clients don\'t need to create an account, and I still get all the info I need."',
    name: "Michael R.",
    role: "Freelance Therapist, London",
    initials: "MR",
    avatarBg: "#2d6dd4",
  },
  {
    quote:
      '"Our tutoring center went from messy WhatsApp scheduling to a proper SaaS in one week. The audit logs alone are worth it."',
    name: "Jasmine P.",
    role: "Director, BrightMind Tutoring",
    initials: "JP",
    avatarBg: "#3b82f6",
  },
];

const integrations = [
  "Google Calendar",
  "Zoom",
];

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Documentation", "Help Center", "Status"],
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="lp-navbar navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="lp-brand-mark">schdlr</span>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#lpMainNav"
            aria-controls="lpMainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="lpMainNav">
            <ul className="navbar-nav mx-auto">
              {["features", "how", "pricing", "testimonials"].map((id) => (
                <li className="nav-item" key={id}>
                  <a className="lp-nav-link nav-link" href={`#${id}`}>
                    {id === "how"
                      ? "How it works"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-2 mt-3 mt-lg-0">
              <button className="lp-btn-nav-login" onClick={() => (window.location.href = "/auth/login")}>
                Log in
              </button>
              <button className="lp-btn-nav-cta" onClick={() => (window.location.href = "/auth/signup")}>
                Start free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left */}
            <div className="col-lg-6">
              <div className="lp-hero-badge">
                <i className="bi bi-lightning-charge-fill" />
                Built for service businesses
              </div>

              <h1>
                Schedule smarter.
                <br />
                <span>Get paid faster.</span>
              </h1>

              <p className="lp-hero-lead">
                Schdlr is the all-in-one appointment and invoicing platform for
                consultants, therapists, coaches, and service pros. Book, bill,
                and grow — all in one place.
              </p>

              <div className="lp-hero-actions">
                <button className="lp-btn-hero-primary" onClick={() => (window.location.href = "/auth/signup")}>
                  Get started free <i className="bi bi-arrow-right" />
                </button>
                <button className="lp-btn-hero-secondary" onClick={() => (window.location.href = "/auth/login")}>
                  <i className="bi bi-play-circle-fill text-primary" />
                  See a demo
                </button>
              </div>

              <div className="lp-hero-trust">
                <div className="lp-trust-avatars">
                  <span style={{ background: "#1558C0" }}>AK</span>
                  <span style={{ background: "#2d6dd4" }}>MR</span>
                  <span style={{ background: "#3b82f6" }}>SP</span>
                  <span style={{ background: "#60a5fa" }}>JL</span>
                </div>
                <small>
                  Trusted by <strong>500+</strong> service businesses
                </small>
              </div>
            </div>

            {/* Right — mock dashboard */}
            <div className="col-lg-6">
              <div className="lp-hero-visual">
                <div className="lp-float-pill top-left">
                  <span
                    className="lp-float-dot"
                    style={{ background: "#22c55e" }}
                  />
                  Booking confirmed
                </div>

                <div className="lp-mock-card">
                  <div className="lp-mock-header">
                    <span className="lp-mock-title">Today's Schedule</span>
                    <span className="lp-mock-badge">4 upcoming</span>
                  </div>

                  <div className="lp-mock-appt">
                    <div className="lp-mock-appt-dot" />
                    <div className="lp-mock-appt-info">
                      <div className="lp-mock-appt-name">
                        1:1 Consultation – Sarah M.
                      </div>
                      <div className="lp-mock-appt-time">
                        9:00 AM · 30 min · Zoom
                      </div>
                    </div>
                    <div className="lp-mock-appt-amt">$120</div>
                  </div>

                  <div className="lp-mock-appt green">
                    <div className="lp-mock-appt-dot" />
                    <div className="lp-mock-appt-info">
                      <div className="lp-mock-appt-name">
                        Strategy Session – Rafi K.
                      </div>
                      <div className="lp-mock-appt-time">
                        11:00 AM · 60 min · In-person
                      </div>
                    </div>
                    <div className="lp-mock-appt-amt">$250</div>
                  </div>

                  <div className="lp-mock-appt amber">
                    <div className="lp-mock-appt-dot" />
                    <div className="lp-mock-appt-info">
                      <div className="lp-mock-appt-name">
                        Tutoring – Omar B.
                      </div>
                      <div className="lp-mock-appt-time">
                        2:30 PM · 45 min · Remote
                      </div>
                    </div>
                    <div className="lp-mock-appt-amt">$90</div>
                  </div>

                  <div className="lp-mock-stat-row">
                    <div className="lp-mock-stat">
                      <div className="lp-mock-stat-label">This week</div>
                      <div className="lp-mock-stat-val blue">$1,840</div>
                    </div>
                    <div className="lp-mock-stat">
                      <div className="lp-mock-stat-label">Invoices sent</div>
                      <div className="lp-mock-stat-val">12</div>
                    </div>
                    <div className="lp-mock-stat">
                      <div className="lp-mock-stat-label">Rating</div>
                      <div className="lp-mock-stat-val">4.9 ⭐</div>
                    </div>
                  </div>
                </div>

                <div className="lp-float-pill bottom-right">
                  <i className="bi bi-check-circle-fill text-success" />
                  Invoice paid · $250
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS STRIP ── */}
      <div className="lp-logos-strip">
        <div className="container">
          <div className="d-flex align-items-center gap-5 flex-wrap">
            <p className="me-3">Integrates with</p>
            {integrations.map((name) => (
              <span className="lp-logo-placeholder" key={name}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="lp-section" id="features">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <p className="lp-section-label">Everything you need</p>
              <h2 className="lp-section-title">
                One platform. Zero admin headaches.
              </h2>
              <p className="lp-section-sub">
                From booking to payment to feedback — Schdlr handles the
                operational layer so you can focus on delivering great work.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {features.map((f) => (
              <div className="col-md-6 col-lg-4" key={f.title}>
                <div className="lp-feature-card">
                  <div className="lp-feature-icon">
                    <i className={f.icon} />
                  </div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-section bg-light-blue" id="how">
        <div className="container">
          <div className="text-center mb-5">
            <p className="lp-section-label">Simple by design</p>
            <h2 className="lp-section-title">Up and running in minutes</h2>
            <p className="lp-section-sub mx-auto">
              Schdlr is designed around your workflow — not the other way
              around.
            </p>
          </div>

          <div className="row g-4 text-center">
            {steps.map((s) => (
              <div
                className={`col-md-3${s.connector ? " lp-step-connector" : ""}`}
                key={s.num}
              >
                <div className="lp-step-num">{s.num}</div>
                <h5 className="lp-step-title">{s.title}</h5>
                <p className="lp-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="lp-section" id="pricing">
        <div className="container">
          <div className="text-center mb-5">
            <p className="lp-section-label">Pricing</p>
            <h2 className="lp-section-title">Simple, transparent pricing</h2>
            <p className="lp-section-sub mx-auto">
              No surprise fees. Cancel any time.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {plans.map((plan) => (
              <div className="col-md-4" key={plan.label}>
                <div
                  className={`lp-price-card${plan.featured ? " featured" : ""}`}
                >
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <p className="lp-price-label mb-0">{plan.label}</p>
                    {plan.featured && (
                      <span className="lp-popular-chip">Most popular</span>
                    )}
                  </div>

                  <div className="d-flex align-items-end gap-1 mb-1">
                    <span className="lp-price-amt">{plan.price}</span>
                    {plan.period && (
                      <span className="lp-price-period">{plan.period}</span>
                    )}
                  </div>

                  <p className="lp-price-desc">{plan.desc}</p>
                  <hr />

                  <ul className="lp-price-list mb-4">
                    {plan.features.map((feat) => (
                      <li key={feat}>
                        <i className="bi bi-check2 lp-check-icon" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`lp-btn-price${plan.featured ? " filled" : ""}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lp-section bg-light-blue" id="testimonials">
        <div className="container">
          <div className="text-center mb-5">
            <p className="lp-section-label">Real users, real results</p>
            <h2 className="lp-section-title">Businesses love Schdlr</h2>
          </div>

          <div className="row g-4">
            {testimonials.map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className="lp-testi-card">
                  <div className="lp-testi-stars">★★★★★</div>
                  <p className="lp-testi-quote">{t.quote}</p>
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="lp-testi-avatar"
                      style={{ background: t.avatarBg }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="lp-testi-name">{t.name}</div>
                      <div className="lp-testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="lp-cta-band">
        <div className="container position-relative">
          <h2>Ready to schedule smarter?</h2>
          <p>
            Join hundreds of service professionals who've replaced spreadsheets,
            WhatsApp, and manual invoices with one elegant platform.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="lp-btn-cta-white">
              Start free — no credit card <i className="bi bi-arrow-right" />
            </button>
            <button className="lp-btn-cta-outline">Book a demo</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="container">
          <div className="row g-4">
            {/* Brand col */}
            <div className="col-lg-4">
              <a href="#" className="lp-footer-brand">
                schdlr
              </a>
              <p>
                Schedule smarter. Get paid faster. The all-in-one appointment
                and invoicing platform for modern service businesses.
              </p>
              <div className="d-flex gap-3 mt-3 lp-footer-social">
                <a href="#">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
                <a href="#">
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div className="col-6 col-lg-2" key={heading}>
                <p className="lp-footer-heading">{heading}</p>
                <ul>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="lp-footer-divider" />

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <p className="lp-footer-bottom">
              © 2026 Schdlr. All rights reserved.
            </p>
            <p className="lp-footer-bottom">Built on AWS · Powered by Stripe</p>
          </div>
        </div>
      </footer>
    </>
  );
}
