"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Disc3,
  Headphones,
  Play,
  Radio,
  Search,
  Video,
} from "lucide-react";

const mediaItems = [
  {
    type: "Video",
    title: "Outpour Recap",
    meta: "Featured moment",
    description: "A featured recap area for convention, camp, or rally media.",
  },
  {
    type: "Sermon",
    title: "Youth Convention Message",
    meta: "Coming soon",
    description: "A clean space for preaching clips, full messages, and altar moments.",
  },
  {
    type: "Audio",
    title: "Camp Audio Archive",
    meta: "Spotify / Apple Music",
    description: "Audio versions can be organized here when links are ready.",
  },
];

const platformLinks = [
  {
    label: "Spotify",
    icon: Disc3,
    href: "#",
  },
  {
    label: "Apple Music",
    icon: Headphones,
    href: "#",
  },
  {
    label: "Video Archive",
    icon: Video,
    href: "#",
  },
];

function Button({ href, children, variant = "primary" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className={[
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-4 text-sm font-black uppercase tracking-[0.16em] transition",
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_45px_rgba(255,255,255,0.18)]"
          : "border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:bg-white/[0.1]",
      ].join(" ")}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}

export default function PlayPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Inter:wght@400;500;600;700;800;900&display=swap");

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
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(6,182,212,0.25),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(239,68,68,0.25),transparent_30%),linear-gradient(135deg,#061117_0%,#050608_46%,#120102_100%)]" />
        <div className="noise absolute inset-0 opacity-[0.13]" />
      </div>

      <header className="relative z-10 px-5 pt-6 md:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-2xl">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/KDYM-Logotype-White.png"
              alt="KDYM"
              className="h-8 w-auto md:h-10"
            />
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/65 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={15} />
            Home
          </a>
        </nav>
      </header>

      <section className="relative z-10 px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 130, damping: 18 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100"
            >
              <Radio size={16} />
              KDYM Play
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, type: "spring", stiffness: 95, damping: 16 }}
              className="text-6xl font-black uppercase leading-[0.83] tracking-[-0.08em] md:text-8xl lg:text-[10rem]"
            >
              Press
              <span className="font-glitch block text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.22)]">
                Play
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl"
            >
              The home for KDYM videos, recaps, sermon moments, worship clips,
              and future audio releases across Spotify and Apple Music.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="#featured">
                Featured Media
                <Play size={17} fill="currentColor" />
              </Button>

              <Button href="#platforms" variant="secondary">
                Audio Links
                <Headphones size={18} />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 44, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.18, type: "spring", stiffness: 95, damping: 16 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[4rem] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.22),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(239,68,68,0.22),transparent_32%)]" />

              <div className="relative z-10 flex min-h-[430px] flex-col justify-between rounded-[2.1rem] border border-white/10 bg-black/35 p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/45">
                    Now Featuring
                  </span>
                  <Search className="text-white/35" size={20} />
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 0 0 rgba(255,255,255,0.05)",
                      "0 0 85px rgba(255,255,255,0.18)",
                      "0 0 0 rgba(255,255,255,0.05)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white text-black"
                >
                  <Play size={42} fill="black" />
                </motion.div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                    Outpour Media
                  </p>
                  <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
                    Recaps. Messages. Audio.
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="featured" className="relative z-10 px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                Featured
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
                Media Library
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-white/55">
              Swap these placeholders with YouTube embeds, sermon links, MP3
              players, or cards from your CMS later.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {mediaItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.07,
                  type: "spring",
                  stiffness: 130,
                  damping: 18,
                }}
                whileHover={{ y: -9, scale: 1.015 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.13),transparent_30%)] opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      {item.type}
                    </span>
                    <ArrowUpRight className="text-white/35 group-hover:text-white" />
                  </div>

                  <div className="flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-black">
                      <Play size={30} fill="black" />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                      {item.meta}
                    </p>
                    <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-200">
                Audio Platforms
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
                Listen after the altar.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/55">
                Add Spotify and Apple Music links here for audio versions,
                convention sessions, camp preaching, or selected clips.
              </p>
            </div>

            <div className="grid gap-4">
              {platformLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 130,
                      damping: 18,
                    }}
                    whileHover={{ x: 8, scale: 1.01 }}
                    className="group flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-black/30 p-5 transition hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-cyan-200">
                        <Icon size={26} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black uppercase tracking-[-0.04em]">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-sm text-white/45">
                          Link placeholder
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="text-white/35 group-hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}