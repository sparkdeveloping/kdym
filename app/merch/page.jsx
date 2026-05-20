"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Flame,
  Package,
  Play,
  Shirt,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const featuredProduct = {
  title: "2026 Outpour Tee",
  label: "Featured Drop",
  price: "Available now",
  description:
    "The main 2026 Outpour shirt for Kansas District Youth Ministries.",
  href: "https://www.kickmerch.com/products/basic-cotton-t-shirt-kansas-district-youth-ministry?variant=41967414640722",
  video: "/merch/OUTPOUR_TEE.mp4",
  image: "/merch/outpour-tee.png",
};

const merchItems = [
  {
    title: "Basic Cotton T-Shirt",
    label: "Tee",
    image: "/merch/classic-tee.png",
    href: "https://www.kickmerch.com/products/basic-cotton-t-shirt-kansas-district-youth-ministry-1",
  },
  {
    title: "Premium Heavyweight T-Shirt",
    label: "Premium",
    image: "/merch/heavyweight-tee.png",
    href: "https://www.kickmerch.com/products/premium-heavyweight-t-shirt-kansas-district-youth-ministry",
  },
  {
    title: "Premium Long Sleeve",
    label: "Long Sleeve",
    image: "/merch/long-sleeve.png",
    href: "https://www.kickmerch.com/products/premium-heavyweight-long-sleeve-shirt",
  },
  {
    title: "Basic Crewneck Sweatshirt",
    label: "Crewneck",
    image: "/merch/crewneck.png",
    href: "https://www.kickmerch.com/products/basic-crewneck-pullover-sweatshirt-kansas-district-youth-ministry",
  },
  {
    title: "Classic Pullover Hoodie",
    label: "Hoodie",
    image: "/merch/hoodie.png",
    href: "https://www.kickmerch.com/products/classic-pullover-hoodie-kansas-district-youth-ministry",
  },
  {
    title: "Richardson 112 Trucker Cap",
    label: "Hat",
    image: "/merch/trucker-cap.png",
    href: "https://www.kickmerch.com/products/embroidered-richardson-112-trucker-cap",
  },
  {
    title: "Classic Dad Hat",
    label: "Hat",
    image: "/merch/dad-hat.png",
    href: "https://www.kickmerch.com/products/classic-dad-hat-kansas-district-youth-ministry",
  },
  {
    title: "Embroidered Cuffed Beanie",
    label: "Beanie",
    image: "/merch/beanie.png",
    href: "https://www.kickmerch.com/products/embroidered-cuffed-beanie-kansas-district-youth-ministry",
  },
  {
    title: "11oz White Mug",
    label: "Mug",
    image: "/merch/mug.png",
    href: "https://www.kickmerch.com/products/11oz-white-mug-kansas-district-youth-ministry",
  },
  {
    title: "Wide Mouth Water Bottle",
    label: "Bottle",
    image: "/merch/water-bottle.png",
    href: "https://www.kickmerch.com/products/wide-mouth-water-bottle-kansas-district-youth-ministry",
  },
  {
    title: "Stainless Steel Tumbler",
    label: "Tumbler",
    image: "/merch/tumbler.png",
    href: "https://www.kickmerch.com/products/stainless-steel-tumbler-with-a-straw-lid-kansas-district-youth-ministry",
  },
];

function Button({ href, children, variant = "primary" }) {
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
      ].join(" ")}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}

function ProductImage({ src, title }) {
  return (
    <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_75%_85%,rgba(239,68,68,0.18),transparent_34%)]" />

      <img
        src={src}
        alt={title}
        className="relative z-10 h-full max-h-[250px] w-full object-contain p-5 drop-shadow-[0_24px_45px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Package size={64} className="text-white/15" />
      </div>
    </div>
  );
}

export default function MerchPage() {
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
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(239,68,68,0.3),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.2),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(127,29,29,0.32),transparent_35%),linear-gradient(135deg,#100102_0%,#050608_48%,#061117_100%)]" />
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
              transition={{
                delay: 0.08,
                type: "spring",
                stiffness: 95,
                damping: 16,
              }}
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
              Official KDYM apparel and accessories for the 2026 Outpour year.
              Featured items redirect directly to Kick Merch for checkout.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button href={featuredProduct.href}>
                Buy Featured Tee
                <ArrowUpRight size={18} />
              </Button>

              <Button href="#collection" variant="secondary">
                View Collection
                <Shirt size={18} />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 44, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 0.18,
              type: "spring",
              stiffness: 95,
              damping: 16,
            }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[4rem] bg-red-500/10 blur-3xl" />

            <motion.div
              whileHover={{ rotate: -1.1, scale: 1.012 }}
              transition={{ type: "spring", stiffness: 230, damping: 16 }}
              className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(239,68,68,0.28),transparent_35%)]" />

              <div className="relative z-10 overflow-hidden rounded-[2.1rem] border border-white/10 bg-black/35">
                <video
                  src={featuredProduct.video}
                  className="aspect-[4/5] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={featuredProduct.image}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                    <Flame size={14} />
                    Main 2026 Tee
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.18)]">
                    <Play size={18} fill="black" />
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200">
                    {featuredProduct.label}
                  </p>

                  <h2 className="mt-2 text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-5xl">
                    {featuredProduct.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                    {featuredProduct.description}
                  </p>

                  <a
                    href={featuredProduct.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:scale-105"
                  >
                    Buy Now
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="collection" className="relative z-10 px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-200">
                KANSAS DISTRICT YOUTH MINISTRIES
              </p>
              <h2 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
                FULL COLLECTION
              </h2>
            </div>

            
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {merchItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 130,
                  damping: 18,
                }}
                whileHover={{ y: -9, scale: 1.015 }}
                className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(239,68,68,0.18),transparent_30%)] opacity-60 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <ProductImage src={item.image} title={item.title} />

                  <div className="p-3 pt-5">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
                        {item.label}
                      </span>

                      <ArrowUpRight className="text-white/35 transition group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/55 transition group-hover:bg-white group-hover:text-black">
                      View Item
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 md:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.035] p-8 text-center md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_30%)]" />

          <div className="relative z-10">
            <div className="mx-auto mb-7 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4 text-red-200">
              <Sparkles size={30} />
            </div>

            <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl">
              More than merch.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
              A memory from camp, a declaration of the theme, and a clean way to
              support district youth ministry.
            </p>

            <div className="mt-9">
              <Button href={featuredProduct.href}>
                Shop Featured Tee
                <ShoppingBag size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}