"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Flame,
  Package,
  Shirt,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const merchItems = [
  {
    title: "Outpour Camp Tee",
    label: "Coming Soon",
    description: "Main camp shirt concept for Heartland Senior Camp.",
  },
  {
    title: "KDYM Hoodie",
    label: "District Drop",
    description: "A premium hoodie placeholder for future KDYM apparel.",
  },
  {
    title: "Outpour Bundle",
    label: "Limited",
    description: "Bundle area for shirt, wristband, sticker, or add-ons.",
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

export default function MerchPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(239,68,68,0.28),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.18),transparent_30%),linear-gradient(135deg,#100102_0%,#050608_48%,#061117_100%)]" />
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 130, damping: 18 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100"
            >
              <ShoppingBag size={16} />
              KDYM Merch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, type: "spring", stiffness: 95, damping: 16 }}
              className="text-6xl font-black uppercase leading-[0.83] tracking-[-0.08em] md:text-8xl lg:text-[10rem]"
            >
              Wear
              <span className="font-glitch block text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.22)]">
                Outpour
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl"
            >
              A dedicated storefront for KDYM apparel, Heartland Senior Camp
              shirts, Outpour-themed drops, and future district merch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="#drops">
                View Drops
                <Shirt size={18} />
              </Button>

              <Button href="/" variant="secondary">
                Back Home
                <ArrowLeft size={17} />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 44, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.18, type: "spring", stiffness: 95, damping: 16 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[4rem] bg-red-500/10 blur-3xl" />

            <motion.div
              whileHover={{ rotate: -1.2, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 230, damping: 16 }}
              className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(239,68,68,0.28),transparent_35%)]" />

              <div className="relative z-10 flex min-h-[430px] flex-col items-center justify-center rounded-[2.1rem] border border-white/10 bg-black/35 p-7 text-center">
                <motion.div
                  animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[2.25rem] border border-white/10 bg-white px-12 py-14 text-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-black/35">
                    KDYM
                  </p>
                  <p className="font-glitch mt-2 text-7xl leading-none">OUT</p>
                  <p className="font-glitch text-7xl leading-none">POUR</p>
                </motion.div>

                <p className="mt-9 text-sm font-black uppercase tracking-[0.24em] text-white/45">
                  Product preview placeholder
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="drops" className="relative z-10 px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-200">
                Store Preview
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
                Upcoming Drops
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-white/55">
              These cards are presentation-ready placeholders. Later, connect
              them to Stripe, Shopify, Fourthwall, or your own checkout.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {merchItems.map((item, index) => (
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
                className="group relative min-h-[410px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(239,68,68,0.18),transparent_30%)] opacity-70 transition group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      {item.label}
                    </span>
                    <ArrowUpRight className="text-white/35 group-hover:text-white" />
                  </div>

                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-[2rem] border border-white/10 bg-white text-black">
                    {index === 0 ? (
                      <Shirt size={64} />
                    ) : index === 1 ? (
                      <Flame size={64} />
                    ) : (
                      <Package size={64} />
                    )}
                  </div>

                  <div>
                    <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-white/50">
                      {item.description}
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/55 transition group-hover:bg-white group-hover:text-black">
                      Notify Me
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.035] p-8 text-center md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_30%)]" />

          <div className="relative z-10">
            <div className="mx-auto mb-7 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4 text-red-200">
              <Sparkles size={30} />
            </div>

            <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
              Built for more than a shirt.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
              Merch should feel like a memory from camp, a declaration of the
              theme, and a clean way to support district youth ministry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}