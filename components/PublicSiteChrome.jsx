"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const REGISTRATION_URL = "https://kansasupci.churchtrac.com/connect?ei=HEF01AC";

const items = [
  { label: "Retreat", href: "/#retreat" },
  { label: "Details", href: "/#details" },
  { label: "Plan your visit", href: "/#plan" },
  { label: "Merch", href: "/merch" },
  { label: "Get the app", href: "/app" },
];

function Brand() {
  return (
    <Link href="/" className="hy-brand" aria-label="Kansas District Youth Ministries home">
      <img src="/KDYM-Logotype-White.png" width="234" height="44" alt="Kansas District Youth Ministries" />
      <span aria-hidden="true" className="hy-brand-separator" />
      <span className="hy-brand-tag">The district / connected</span>
    </Link>
  );
}

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const menu = useRef(null);
  const menuId = useId();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const first = menu.current?.querySelector("a");
    first?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
      if (event.key === "Tab") {
        const links = Array.from(menu.current?.querySelectorAll("a") || []);
        if (!links.length) return;
        if (event.shiftKey && document.activeElement === links[0]) {
          event.preventDefault();
          links[links.length - 1].focus();
        } else if (!event.shiftKey && document.activeElement === links[links.length - 1]) {
          event.preventDefault();
          links[0].focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="hy-nav">
      <a className="hy-skip" href="#main-content">Skip to main content</a>
      <div className="hy-container">
        <div className="hy-nav-inner">
          <Brand />
          <nav className="hy-nav-links" aria-label="Primary navigation">
            {items.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="hy-nav-actions">
            <a className="hy-nav-cta" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
              Register <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              ref={button}
              className="hy-menu-button"
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-controls={menuId}
              aria-expanded={open}
              onClick={() => { setOpen(!open); if (open) button.current?.focus(); }}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              ref={menu}
              id={menuId}
              className="hy-mobile-menu"
              aria-label="Mobile navigation"
              initial={reduced ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduced ? 0 : 0.18 }}
            >
              {items.map(item => <Link href={item.href} key={item.href} onClick={close}>{item.label}</Link>)}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="hy-footer" id="connect">
      <div className="hy-container">
        <div className="hy-footer-top">
          <div>
            <Link href="/" aria-label="KDYM home">
              <img src="/KDYM-Logotype-White.png" width="260" height="48" alt="Kansas District Youth Ministries" className="hy-footer-logo" loading="lazy"/>
            </Link>
            <h2>Across Kansas.<br/>Together in purpose.</h2>
            <div className="hy-socials">
              <a href="https://www.instagram.com/kdym_official/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              <a href="https://www.facebook.com/KDYM.Official" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
            </div>
          </div>
          <nav className="hy-footer-links" aria-label="Footer navigation">
            <Link href="/#retreat">Retreat</Link>
            <Link href="/#details">Event details</Link>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Register</a>
            <Link href="/merch">Merch</Link>
            <Link href="/app">Download the app</Link>
            <a href="https://kansasupci.org/events" target="_blank" rel="noopener noreferrer">District calendar</a>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
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
