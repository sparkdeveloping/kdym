"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, ExternalLink, MapPin, Menu, Smartphone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const REGISTER = "https://kansasupci.churchtrac.com/connect?ei=HEF01AC";
const IOS = "https://apps.apple.com/us/app/kdym/id6766344337";
const ANDROID = "https://play.google.com/store/apps/details?id=dev.bti.kdym";
const DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=19405%20W%20151st%20Terrace%20Olathe%20KS%2066062";
const RETREAT_START = new Date("2026-11-12T00:00:00-06:00").getTime();

const nav = [
  { label: "Retreat", href: "#retreat" },
  { label: "Experience", href: "#experience" },
  { label: "Details", href: "#details" },
  { label: "What's next", href: "#next" },
  { label: "Get the app", href: "#app" },
];

const futureEvents = [
  { date: "JAN 29 / 2027", title: "KDYM Vision Rally", description: "Wichita, Kansas" },
  { date: "MAR 12–13 / 2027", title: "Kansas Youth Convention", description: "First Pentecostal Church · Wichita" },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-65px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Button({ href, children, outline = false, light = false }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={outline ? "hy-btn-outline" : "hy-btn-primary"}
      style={light ? { background: "#13181b", color: "#fff" } : undefined}
      whileHover={{ y: -3, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}

function Brand() {
  return (
    <Link href="/" className="hy-brand" aria-label="KDYM home">
      <img src="/KDYM-Logotype-White.png" alt="Kansas District Youth Ministries" />
      <span aria-hidden="true" className="hy-brand-separator" />
      <span className="hy-brand-tag">The district / connected</span>
    </Link>
  );
}

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="hy-nav">
      <div className="hy-container">
        <div className="hy-nav-inner">
          <Brand />
          <nav className="hy-nav-links" aria-label="Primary navigation">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <Link href="/merch">Merch</Link>
          </nav>
          <div className="hy-nav-actions">
            <a className="hy-nav-cta" href={REGISTER} rel="noopener noreferrer" target="_blank">
              Register <ArrowUpRight size={15} />
            </a>
            <button type="button" className="hy-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="hy-mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .2 }}>
              {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
              <Link href="/merch" onClick={() => setMenuOpen(false)}>Merch</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Countdown() {
  const [remaining, setRemaining] = useState(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, RETREAT_START - Date.now()));
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);
  if (remaining === null) return <span>November 12–14, 2026</span>;
  if (remaining === 0) return <span>Retreat season is here</span>;
  const days = Math.ceil(remaining / (1000 * 60 * 60 * 24));
  return <span>{days} days until we gather</span>;
}

function Poster() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-1, 1], [8, -8]), { stiffness: 100, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-8, 8]), { stiffness: 100, damping: 18 });

  const onMove = (event) => {
    if (reduced || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };
  return (
    <div className="hy-poster-wrap">
      <div className="hy-poster-glow" />
      <motion.div
        className="hy-poster"
        style={reduced ? undefined : { rotateX, rotateY }}
        onPointerMove={onMove}
        onPointerLeave={() => { mx.set(0); my.set(0); }}
        initial={reduced ? false : { opacity: 0, scale: .9, y: 45, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: .15 }}
      >
        <div className="hy-poster-corner">KDYM / 2026</div>
        <div className="hy-poster-corner hy-poster-corner-right">11—12—26</div>
        <motion.div className="hy-poster-big" aria-hidden="true" animate={reduced ? {} : { y: [0, -15, 0], rotate: [-18, -15, -18] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>H</motion.div>
        <motion.div className="hy-poster-orbit" aria-hidden="true" animate={reduced ? {} : { rotate: [-37, -26, -37] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="hy-poster-orbit hy-poster-orbit-two" aria-hidden="true" animate={reduced ? {} : { rotate: [57, 48, 57] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} />
        <div className="hy-poster-caption"><span>Kansas district / Young adults</span><strong>HEARTLAND<br />HYPHEN</strong></div>
        <div className="hy-poster-side">RETREAT · OLATHE · NOVEMBER</div>
      </motion.div>
    </div>
  );
}

function Ticker() {
  const reduced = useReducedMotion();
  const values = ["CONNECTED BY PURPOSE", "GROUNDED IN FAITH", "MADE FOR COMMUNITY", "KANSAS DISTRICT", "HEARTLAND HYPHEN"];
  const content = [...values, ...values].flatMap((value, index) => [
    <span key={index + "w"}>{value}</span>,
    <i key={index + "i"} aria-hidden="true">✳</i>,
  ]);
  return (
    <div className="hy-ticker" aria-label="Connected by purpose. Grounded in faith. Made for community.">
      <div className="hy-ticker-track" style={reduced ? { animation: "none" } : undefined} aria-hidden="true">{content}</div>
    </div>
  );
}

function Details() {
  return (
    <section className="hy-section" id="details" aria-labelledby="detail-title">
      <div className="hy-container">
        <Reveal className="hy-details-header">
          <div>
            <span className="hy-section-kicker">All the essentials / No searching required</span>
            <h2 className="hy-section-title" id="detail-title">Save the<br /><strong>dates.</strong></h2>
          </div>
          <p className="hy-section-desc" style={{ maxWidth: 390 }}>Everything confirmed for Heartland Hyphen Retreat. Full registration details and current pricing are available through the official signup.</p>
        </Reveal>
        <div className="hy-details-grid">
          <Reveal className="hy-detail-card" delay={.04}>
            <div className="hy-detail-top"><span>01 / WHEN</span><CalendarDays size={23} /></div>
            <div><h3>November<br />12—14, 2026</h3><p>Thursday through Saturday. Set this weekend apart.</p></div>
          </Reveal>
          <Reveal className="hy-detail-card" delay={.09}>
            <div className="hy-detail-top"><span>02 / WITH</span><span>GUEST SPEAKER</span></div>
            <div><h3>Bruce<br />Howell</h3><p>Joining us for Heartland Hyphen Retreat 2026.</p></div>
          </Reveal>
          <Reveal className="hy-detail-card hy-detail-card-wide" delay={.14}>
            <div>
              <div className="hy-detail-top"><span>03 / WHERE</span><MapPin size={23}/></div>
              <h3>Cross Church<br />Kansas City</h3>
              <p>19405 W 151st Terrace · Olathe, Kansas 66062</p>
            </div>
            <div style={{ alignSelf: "end" }}>
              <p>Find your way to the retreat. Location details have been verified against the host church.</p>
              <a className="hy-detail-link" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section id="app" className="hy-app" aria-labelledby="app-title">
      <div className="hy-container hy-app-grid">
        <Reveal>
          <span className="hy-section-kicker">The district in your pocket</span>
          <h2 className="hy-section-title" id="app-title">Stay<br />in the <strong>loop.</strong></h2>
          <p className="hy-section-desc">The official KDYM app brings ministry updates, events, announcements, community and media into one place. Available for iPhone and Android.</p>
          <div className="hy-app-buttons">
            <Button href={IOS} outline>Download for iPhone <ArrowUpRight size={16} /></Button>
            <Button href={ANDROID} outline>Get it on Android <ArrowUpRight size={16} /></Button>
          </div>
          <a className="hy-detail-link" href="/app" style={{ marginTop: 23 }}>App download options <ArrowRight size={16}/></a>
        </Reveal>
        <Reveal delay={.12}>
          <div className="hy-app-phone" aria-hidden="true">
            <div className="hy-phone-notch" />
            <div className="hy-phone-content">
              <img src="/KDYM-Icon-White.png" className="hy-phone-icon" alt="" />
              <strong>ONE<br />DISTRICT.<br /><span style={{ color: "#d3f88d" }}>CONNECTED.</span></strong>
              <p>Your KDYM experience, wherever you are.</p>
              <div className="hy-phone-card"><span className="hy-card-label">Coming up</span><div className="hy-card-date">HYPHEN / 26</div></div>
              <div className="hy-phone-card"><span className="hy-card-label">Stay connected</span><div className="hy-card-date">KDYM COMMUNITY</div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hy-footer" id="connect">
      <div className="hy-container">
        <div className="hy-footer-top">
          <div>
            <img src="/KDYM-Logotype-White.png" alt="Kansas District Youth Ministries" className="hy-footer-logo" />
            <h2>Across Kansas.<br />Together in purpose.</h2>
            <div className="hy-socials">
              <a href="https://www.instagram.com/kdym_official/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              <a href="https://www.facebook.com/KDYM.Official" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
            </div>
          </div>
          <nav className="hy-footer-links" aria-label="Footer navigation">
            <a href="#retreat">Retreat</a><a href="#details">Event details</a>
            <a href={REGISTER} target="_blank" rel="noopener noreferrer">Register</a><Link href="/merch">Merch</Link>
            <Link href="/app">Download the app</Link><a href="https://kansasupci.org/" target="_blank" rel="noopener noreferrer">Kansas District UPCI</a>
            <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
            <Link href="/community-guidelines">Community guidelines</Link>
          </nav>
        </div>
        <div className="hy-footer-bottom">
          <span>© {new Date().getFullYear()} Kansas District Youth Ministries</span>
          <span>Faith · Connection · Purpose</span>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });
  const heroY = useTransform(scrollYProgress, [0, .4], [0, -110]);
  return (
    <main className="retreat-root" id="top">
      <a className="hy-skip" href="#main-content">Skip to content</a>
      <motion.div className="hy-progress" style={{ scaleX: progress }} aria-hidden="true"/>
      <SiteNav />
      <section className="hy-hero" id="main-content" aria-label="Heartland Hyphen Retreat">
        <div className="hy-container hy-grid" id="retreat">
          <motion.div style={reduced ? undefined : { y: heroY }}>
            <Reveal><span className="hy-kicker"><i className="hy-pulse" /> THE NEXT KDYM GATHERING · NOVEMBER 2026</span></Reveal>
            <Reveal delay={.06}><h1 className="hy-hero-h1"><span>HYPHEN</span><span><em>RETREAT.</em></span></h1></Reveal>
            <Reveal delay={.12}>
              <p className="hy-hero-year">HEARTLAND / 2026 / KANSAS DISTRICT</p>
              <p className="hy-hero-description">A weekend set apart for young adults to connect, grow in faith, and move forward with purpose. This is your invitation.</p>
              <div className="hy-btn-row"><Button href={REGISTER}>Register for retreat <ArrowUpRight size={18}/></Button><Button href="#details" outline>Explore the details <ArrowDown size={17}/></Button></div>
              <div className="hy-mini-meta"><span><CalendarDays size={16}/> NOV 12—14, 2026</span><span><MapPin size={16}/> OLATHE, KANSAS</span><span><Countdown /></span></div>
            </Reveal>
          </motion.div>
          <Poster />
        </div>
        <a className="hy-scroll-hint" href="#experience"><span /> Scroll to explore <ArrowDown size={13}/></a>
      </section>
      <Ticker />
      <section className="hy-section" id="experience" aria-labelledby="experience-title">
        <div className="hy-container hy-split-section">
          <Reveal>
            <span className="hy-section-kicker">More than another event</span>
            <h2 className="hy-section-title" id="experience-title">YOU BELONG<br /><strong>HERE.</strong></h2>
            <p className="hy-section-desc">Hyphen is about connection in a defining season of life. Faith beyond a moment. Friends beyond a weekend. Purpose that carries into everyday life.</p>
            <div className="hy-values">
              <div className="hy-value"><span>01</span><strong>Grow closer to God.</strong></div>
              <div className="hy-value"><span>02</span><strong>Find your people.</strong></div>
              <div className="hy-value"><span>03</span><strong>Move with purpose.</strong></div>
            </div>
          </Reveal>
          <Reveal delay={.12}>
            <div className="hy-stat-slab">
              <div className="hy-stat-orbit" aria-hidden="true" />
              <span className="hy-stat-number">18<br/>—30</span>
              <small>Hyphen / Young adult ministry</small>
              <div className="hy-stat-bottom"><span>Building a generation of connected young adults.</span><ArrowUpRight size={33}/></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="hy-feature-band" aria-label="Retreat invitation">
        <div className="hy-container">
          <Reveal>
            <span className="hy-section-kicker" style={{ color: "#4d4d39" }}>A place to reconnect / A reason to go deeper</span>
            <h2 className="hy-feature-heading">NOT JUST<br />ATTENDING.<br /><i>BELONGING.</i></h2>
            <p className="hy-feature-sub">We are making room for connection, worship, and the conversations that shape what comes next.</p>
            <div className="hy-btn-row"><Button href={REGISTER} outline light>Make plans to be there <ArrowUpRight size={18}/></Button></div>
          </Reveal>
        </div>
      </section>
      <Details />
      <section className="hy-next" id="next" aria-labelledby="next-title">
        <div className="hy-container">
          <Reveal>
            <span className="hy-section-kicker">One retreat. A whole district.</span>
            <h2 className="hy-section-title" id="next-title">KDYM DOESN'T<br /><span style={{ color: "#7b6a99" }}>STOP HERE.</span></h2>
            <p className="hy-section-desc" style={{ color: "#5d616a" }}>Heartland Hyphen Retreat is our next gathering. The rest of the district's calendar is already taking shape.</p>
          </Reveal>
          <div className="hy-event-list">
            {futureEvents.map((event, index) => (
              <Reveal key={event.title} delay={index * .08}>
                <a className="hy-event-row" href="https://kansasupci.org/events" target="_blank" rel="noopener noreferrer">
                  <span className="hy-event-date">{event.date}</span>
                  <div><div className="hy-event-title">{event.title}</div><span>{event.description}</span></div>
                  <ArrowUpRight size={22} />
                </a>
              </Reveal>
            ))}
          </div>
          <div className="hy-btn-row" style={{ marginTop: 38 }}>
            <Button href="https://kansasupci.org/events" outline light>District event calendar <ArrowUpRight size={17}/></Button>
          </div>
        </div>
      </section>
      <AppSection />
      <section className="hy-section" aria-label="Register now">
        <div className="hy-container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="hy-section-kicker">November 12—14 / Cross Church Kansas City</span>
            <h2 className="hy-section-title" style={{ margin: "0 auto" }}>YOUR PLACE<br />IS <strong>WAITING.</strong></h2>
            <p className="hy-section-desc" style={{ margin: "22px auto 30px" }}>Ready for Heartland Hyphen Retreat? Registration is hosted securely by Kansas District UPCI through ChurchTrac.</p>
            <div className="hy-btn-row" style={{ justifyContent: "center" }}><Button href={REGISTER}>Register on ChurchTrac <ArrowUpRight size={18}/></Button></div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
