"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Flame,
  Menu,
  Play,
  ShoppingBag,
  Ticket,
  X,
} from "lucide-react";
import { useState } from "react";

const registerLink =
  "https://kansasupci.churchtrac.com/connect?ei=ZTZ5JAI&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnHAN7BdKB7EGMfG9LSvgknT9Dn-bJuTL3LYNT93HtB_aMGDB4KIijICm0Orc_aem_9x3eA25GAMAQqIrjptaN5g";

const events = [
  {
    title: "Vision Rally",
    date: "Jan 30",
    day: "Friday",
    status: "Completed",
    color: "from-cyan-400/20 to-white/5",
  },
  {
    title: "Kansas Youth Convention",
    date: "Mar 13–14",
    day: "Friday & Saturday",
    status: "Completed",
    color: "from-red-500/20 to-white/5",
  },
  {
    title: "Section 2 Youth Rally",
    date: "Apr 22",
    day: "District Gathering",
    status: "Completed",
    color: "from-amber-400/20 to-white/5",
  },
  {
    title: "Heartland Senior Camp",
    date: "Jun 1–4",
    day: "Tabor College",
    status: "Registration Open",
    color: "from-red-500/35 to-cyan-500/10",
    featured: true,
  },
];

const navItems = [
  { label: "Events", href: "#events" },
  { label: "Play", href: "/play" },
  { label: "Merch", href: "/merch" },
  { label: "Connect", href: "#connect" },
];

const InstagramSVG = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const FacebookSVG = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.41c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.9h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
  </svg>
);

function MagneticButton({ href, children, variant = "primary", className = "" }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className={[
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-4 text-sm font-black uppercase tracking-[0.16em] transition",
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_45px_rgba(255,255,255,0.18)]"
          : "border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:bg-white/[0.1]",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -24, 0],
        x: [0, 14, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    />
  );
}

function GlitchWord() {
  return (
    <div className="relative select-none">
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 90,
          damping: 13,
        }}
        className="font-glitch text-[4.8rem] leading-[0.75] tracking-[-0.08em] text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] sm:text-[7rem] md:text-[9rem] lg:text-[12rem]"
      >
        OUTPOUR
      </motion.h1>

      <motion.div
        animate={{
          x: [-8, 8, -4, 5, 0],
          opacity: [0.25, 0.8, 0.35, 0.65, 0.25],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="font-glitch pointer-events-none absolute inset-0 text-[4.8rem] leading-[0.75] tracking-[-0.08em] text-red-500/35 blur-[1px] sm:text-[7rem] md:text-[9rem] lg:text-[12rem]"
      >
        OUTPOUR
      </motion.div>

      <motion.div
        animate={{
          x: [7, -7, 4, -5, 0],
          opacity: [0.15, 0.55, 0.25, 0.45, 0.15],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="font-glitch pointer-events-none absolute inset-0 text-[4.8rem] leading-[0.75] tracking-[-0.08em] text-cyan-300/30 blur-[1px] sm:text-[7rem] md:text-[9rem] lg:text-[12rem]"
      >
        OUTPOUR
      </motion.div>
    </div>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 38, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: index * 0.07,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      whileHover={{
        y: -10,
        scale: 1.015,
        rotateX: 2,
        transition: { type: "spring", stiffness: 300, damping: 18 },
      }}
      className={[
        "group relative min-h-[270px] overflow-hidden rounded-[2rem] border p-6 md:p-7",
        event.featured
          ? "border-red-300/35 bg-red-500/[0.08] md:col-span-2"
          : "border-white/10 bg-white/[0.035]",
      ].join(" ")}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-80`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.16),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:bg-red-400/25" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-6">
          <span
            className={[
              "inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em]",
              event.featured
                ? "bg-red-500 text-white shadow-[0_0_24px_rgba(239,68,68,0.45)]"
                : "bg-white/10 text-white/55",
            ].join(" ")}
          >
            {event.status}
          </span>

          <motion.div
            whileHover={{ rotate: 45, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 360, damping: 14 }}
            className="rounded-full border border-white/10 bg-white/5 p-3 text-white/50 backdrop-blur-xl group-hover:text-white"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <div>
          <p className="mb-4 text-5xl font-black tracking-[-0.08em] text-white/95 md:text-6xl">
            {event.date}
          </p>
          <h3 className="max-w-xl text-2xl font-black uppercase leading-none tracking-[-0.05em] md:text-4xl">
            {event.title}
          </h3>
          <p className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            <Clock size={15} />
            {event.day}
          </p>

          {event.featured && (
            <div className="mt-7">
              <MagneticButton href={registerLink} className="px-5 py-3">
                Register Now
                <ArrowRight size={17} />
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Inter:wght@400;500;600;700;800;900&display=swap");

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", sans-serif;
          background: #050608;
        }

        .font-glitch {
          font-family: "Rubik Glitch", system-ui;
        }

        .noise {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.08) 1px,
            transparent 1px
          );
          background-size: 3px 3px;
        }

        .grid-mask {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );
          background-size: 54px 54px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(8,145,178,0.28),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(220,38,38,0.32),transparent_30%),radial-gradient(circle_at_52%_92%,rgba(127,29,29,0.34),transparent_35%),linear-gradient(135deg,#061117_0%,#050608_42%,#110102_100%)]" />
        <div className="grid-mask absolute inset-0 opacity-60" />
        <div className="noise absolute inset-0 opacity-[0.13]" />
        <motion.div
          style={{ y }}
          className="absolute left-1/2 top-20 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]"
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-2xl backdrop-blur-2xl md:px-5"
        >
          <a href="/" className="flex items-center gap-3">
            <img
              src="/KDYM-Logotype-White.png"
              alt="Kansas District Youth Ministries"
              className="h-8 w-auto md:h-10"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/55 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton href={registerLink} className="px-5 py-2.5 text-xs">
              Register
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-white/5 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/10 bg-black/80 p-3 backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-white/70 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href={registerLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-2xl bg-white px-4 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-black"
            >
              Register
            </a>
          </motion.div>
        )}
      </header>

      <section className="relative z-10 min-h-screen px-5 pb-20 pt-32 md:px-8 lg:px-10">
        <FloatingOrb className="absolute left-[7%] top-[22%] h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-400/10 blur-sm" />
        <FloatingOrb
          delay={1.4}
          className="absolute right-[9%] top-[20%] h-36 w-36 rounded-full border border-red-300/20 bg-red-500/10 blur-sm"
        />
        <FloatingOrb
          delay={0.7}
          className="absolute bottom-[18%] left-[18%] h-14 w-14 rounded-full bg-amber-300/20 blur-md"
        />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 120 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100 shadow-[0_0_35px_rgba(239,68,68,0.13)] backdrop-blur-xl"
            >
              <Flame size={16} />
              2026 District Theme
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mb-3 text-2xl font-black uppercase leading-none tracking-[-0.04em] text-white/90 md:text-5xl"
            >
              Heartland Youth Camp
            </motion.p>

            <GlitchWord />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.7 }}
              className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/62 md:text-xl"
            >
              A digital home for Kansas District Youth Ministries — built around
              rallies, convention, camp, worship moments, media, merch, and the
              move of God across this generation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton href={registerLink}>
                Register for Camp
                <Ticket size={18} />
              </MagneticButton>

              <MagneticButton href="/play" variant="secondary">
                Open Play
                <Play size={17} fill="currentColor" />
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 48, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 0.24,
              type: "spring",
              stiffness: 90,
              damping: 15,
            }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[4rem] bg-gradient-to-br from-red-500/20 via-cyan-400/10 to-transparent blur-3xl" />

            <motion.div
              whileHover={{ scale: 1.015, rotate: -0.8 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_90%_15%,rgba(239,68,68,0.22),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(6,182,212,0.16),transparent_24%)]" />

              <div className="relative rounded-[2rem] border border-white/10 bg-black/35 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.8)]" />
                    <span className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.6)]" />
                    <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.6)]" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-white/35">
                    KDYM Live
                  </p>
                </div>

                <div className="mt-14">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] shadow-[0_0_80px_rgba(255,255,255,0.12)]"
                  >
                    <Play size={34} fill="white" />
                  </motion.div>

                  <div className="mt-14 grid gap-3">
                    {[
                      ["Next Up", "Heartland Senior Camp"],
                      ["Dates", "June 1–4"],
                      ["Location", "Tabor College"],
                    ].map(([label, value], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 + index * 0.08 }}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">
                          {label}
                        </p>
                        <p className="text-right text-sm font-black uppercase tracking-[0.08em] text-white">
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
            className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.035] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(239,68,68,0.24),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.12),transparent_35%)]" />

            <motion.div
              animate={{ x: ["-35%", "135%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
            />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-300/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100 shadow-[0_0_45px_rgba(239,68,68,0.14)]"
                >
                  <Flame size={16} />
                  Outpour Scripture
                </motion.div>

                <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.87] tracking-[-0.075em] md:text-7xl">
                  Not just a theme.
                  <span className="block text-white/45">
                    A promise poured out.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">
                  The visual identity points back to the prophecy, the altar,
                  and the urgency of this generation responding to God in the
                  last days.
                </p>
              </div>

              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [-1.2, 1.2, -1.2],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/35 p-7 md:p-9"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(239,68,68,0.22),transparent_35%)]" />

                  <div className="relative z-10">
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                      Joel 2:28
                    </p>

                    <blockquote className="mt-6 text-3xl font-black uppercase leading-[1.02] tracking-[-0.055em] text-white md:text-5xl">
                      “I will pour out my spirit upon all flesh.”
                    </blockquote>

                    <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    <motion.div
                      animate={{
                        opacity: [0.35, 1, 0.35],
                        letterSpacing: ["0.16em", "0.24em", "0.16em"],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mt-8 text-center text-sm font-black uppercase text-red-200 md:text-base"
                    >
                      These are the last days
                    </motion.div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {["Sons", "Daughters", "Young Men"].map((word, index) => (
                        <motion.div
                          key={word}
                          animate={{
                            y: [0, -6, 0],
                            opacity: [0.62, 1, 0.62],
                          }}
                          transition={{
                            duration: 2.5,
                            delay: index * 0.25,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white/65"
                        >
                          {word}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="events" className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">
                2026 Movement
              </p>
              <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] md:text-7xl">
                The year in one district flow.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-white/55">
              This is the home base for rallies, convention, camp, registration,
              media, merch, and what KDYM is carrying this year.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <motion.a
            href="/play"
            whileHover={{ y: -10, scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 17 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.07] md:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.18),transparent_30%)] opacity-80" />
            <div className="relative z-10">
              <Play className="mb-14 text-cyan-200" size={38} fill="currentColor" />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
                Play
              </p>
              <h3 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em]">
                Watch. Listen. Remember.
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-white/55">
                Videos, recap moments, sermons, Spotify links, Apple Music links,
                and future audio archives.
              </p>
            </div>
          </motion.a>

          <motion.a
            href="/merch"
            whileHover={{ y: -10, scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 17 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.07] md:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.22),transparent_32%)] opacity-80" />
            <div className="relative z-10">
              <ShoppingBag className="mb-14 text-red-200" size={38} />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-200">
                Merch
              </p>
              <h3 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em]">
                Wear the movement.
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-white/55">
                A dedicated store page for camp shirts, Outpour drops, and KDYM
                apparel.
              </p>
            </div>
          </motion.a>
        </div>
      </section>

      <section id="connect" className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 text-center md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
            Stay Connected
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
            Follow what God is doing across Kansas.
          </h2>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="https://www.instagram.com/kdym_official/"
              variant="secondary"
            >
              <InstagramSVG className="h-[18px] w-[18px]" />
              @kdym_official
            </MagneticButton>

            <MagneticButton
              href="https://www.facebook.com/KDYM.Official"
              variant="secondary"
            >
              <FacebookSVG className="h-[18px] w-[18px]" />
              KDYM.Official
            </MagneticButton>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src="/KDYM-Icon-White.png" alt="KDYM" className="h-10 w-auto" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/70">
                Kansas District Youth Ministries
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/30">
                Heartland Outpour
              </p>
            </div>
          </div>

          <a
            href={registerLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
          >
            Register for Camp
            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}