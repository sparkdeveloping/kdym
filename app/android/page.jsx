"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import {
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getFirebaseDb() {
  const missingConfig = Object.entries(firebaseConfig).some(([, value]) => !value);

  if (missingConfig) {
    throw new Error("Firebase web config is missing from environment variables.");
  }

  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  return getFirestore(app);
}

function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

function emailToDocId(email) {
  return encodeURIComponent(email);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Button({ children, href, type = "button", disabled = false }) {
  const content = (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.035, y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className={[
        "group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-4 text-sm font-black uppercase tracking-[0.16em] transition sm:w-auto",
        disabled
          ? "cursor-not-allowed bg-white/40 text-black/50"
          : "bg-white text-black shadow-[0_0_45px_rgba(255,255,255,0.18)]",
      ].join(" ")}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.button>
  );

  if (!href) return content;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_45px_rgba(255,255,255,0.18)] transition sm:w-auto"
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}

export default function AndroidPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const normalizedEmail = useMemo(() => normalizeEmail(email), [email]);
  const canSubmit = isValidEmail(normalizedEmail) && status !== "loading";

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");

    if (!isValidEmail(normalizedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");

      const db = getFirebaseDb();
      const requestRef = doc(
        db,
        "androidPlayStoreRequests",
        emailToDocId(normalizedEmail)
      );

      await setDoc(
        requestRef,
        {
          email: normalizedEmail,
          source: "kdym.org/android",
          reason: "Requested Android Play Store link",
          status: "waiting_for_link",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          userAgent:
            typeof window !== "undefined" ? window.navigator.userAgent : null,
        },
        { merge: true }
      );

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong while saving your email. Please try again."
      );
    }
  }

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(6,182,212,0.28),transparent_31%),radial-gradient(circle_at_84%_12%,rgba(239,68,68,0.3),transparent_32%),radial-gradient(circle_at_50%_95%,rgba(127,29,29,0.34),transparent_35%),linear-gradient(135deg,#061117_0%,#050608_48%,#120102_100%)]" />
        <div className="grid-mask absolute inset-0 opacity-60" />
        <div className="noise absolute inset-0 opacity-[0.13]" />

        <motion.div
          animate={{
            y: [0, -28, 0],
            x: [0, 18, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[22%] h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-400/10 blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 24, 0],
            x: [0, -14, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[9%] top-[18%] h-36 w-36 rounded-full border border-red-300/20 bg-red-500/10 blur-sm"
        />
      </div>

      <header className="relative z-10 px-5 pt-6 md:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-2xl backdrop-blur-2xl">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/KDYM-Logotype-White.png"
              alt="Kansas District Youth Ministries"
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

      <section className="relative z-10 px-5 pb-20 pt-12 md:px-8 md:pt-16 lg:px-10">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 130, damping: 18 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100"
            >
              <Smartphone size={16} />
              Android App Access
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
              className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.075em] sm:text-6xl md:text-8xl lg:text-[9.5rem]"
            >
              Get KDYM
              <span className="font-glitch block text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.22)]">
                Android
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/62 md:text-xl"
            >
              Enter your email and KDYM will send you the official Play Store
              link.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Official Link",
                  text: "Sent directly by KDYM.",
                },
                {
                  icon: Mail,
                  title: "Email Only",
                  text: "No password needed.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.36 + index * 0.07 }}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
                  >
                    <Icon className="mb-4 text-cyan-200" size={24} />
                    <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
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
            <div className="absolute -inset-8 rounded-[4rem] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.22),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(239,68,68,0.22),transparent_32%)]" />

              <div className="relative z-10 overflow-hidden rounded-[2.1rem] border border-white/10 bg-black/42 p-6 md:p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                      Step 1
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">
                      Request the link
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-[0_0_45px_rgba(255,255,255,0.16)]">
                    <Mail size={24} />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-black uppercase tracking-[0.2em] text-white/55"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={21}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/35"
                    />

                    <input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (status !== "loading") {
                          setStatus("idle");
                          setErrorMessage("");
                        }
                      }}
                      className="w-full rounded-[1.5rem] border border-white/10 bg-white/[0.07] py-5 pl-14 pr-5 text-base font-bold text-white outline-none transition placeholder:text-white/25 focus:border-cyan-200/45 focus:bg-white/[0.095] focus:ring-4 focus:ring-cyan-300/10"
                    />
                  </div>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm font-semibold leading-6 text-red-100"
                    >
                      {errorMessage}
                    </motion.p>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-4 text-left"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          size={22}
                          className="mt-0.5 shrink-0 text-cyan-200"
                        />
                        <div>
                          <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                            You’re on the list
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/58">
                            KDYM has your email. We’ll send the official Play
                            Store link when Android access is ready.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <Button type="submit" disabled={!canSubmit}>
                    {status === "loading" ? "Saving..." : "Send Me the Link"}
                    {status === "loading" ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="block h-4 w-4 rounded-full border-2 border-black/20 border-t-black"
                      />
                    ) : (
                      <Send size={17} />
                    )}
                  </Button>
                </form>

                <div className="mt-8 grid gap-3 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-cyan-200"
                      size={19}
                    />
                    <p className="text-sm leading-6 text-white/55">
                      This page only collects your email so KDYM can send you the
                      official Android link.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-cyan-200"
                      size={19}
                    />
                    <p className="text-sm leading-6 text-white/55">
                      You do not need to download anything from this page.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-cyan-200"
                      size={19}
                    />
                    <p className="text-sm leading-6 text-white/55">
                      Use the same email you want KDYM to contact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 md:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-7 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.1),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(239,68,68,0.16),transparent_32%)]" />

          <div className="relative z-10 flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4 text-red-200">
                <Sparkles size={28} />
              </div>

              <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-6xl">
                Simple. Clear. Official.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
                When the Android Play Store link is ready, KDYM can contact
                everyone who requested access from this page.
              </p>
            </div>

            <a
              href="#email"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white/65 transition hover:bg-white hover:text-black"
            >
              Enter Email
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}