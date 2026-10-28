import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, Smartphone, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Get the KDYM App",
  description: "Download the official Kansas District Youth Ministries app for iPhone and Android.",
  alternates: { canonical: "/app" },
};

const platforms = [
  {
    name: "iPhone / iPad",
    platform: "Apple App Store",
    href: "https://apps.apple.com/us/app/kdym/id6766344337",
    instructions: "Tap the button, open the App Store, then tap Get to install KDYM.",
    index: "01",
  },
  {
    name: "Android",
    platform: "Google Play Store",
    href: "https://play.google.com/store/apps/details?id=dev.bti.kdym",
    instructions: "Tap the button, open Google Play, then tap Install to get KDYM.",
    index: "02",
  },
];

export default function AppDownloadPage() {
  return (
    <main className="retreat-root" style={{ minHeight: "100svh", background: "radial-gradient(ellipse at 82% 16%,rgba(150,124,241,.21),transparent 45%),#080a12" }}>
      <div className="hy-container" style={{ paddingTop: 35 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" aria-label="Back to KDYM website"><img src="/KDYM-Logotype-White.png" alt="Kansas District Youth Ministries" style={{ width: "min(210px,48vw)", height: "auto" }} /></Link>
          <Link href="/" className="hy-btn-outline" style={{ padding: "12px 17px", minHeight: 44, fontSize: 12 }}><ArrowLeft size={16} /> Website</Link>
        </div>
      </div>
      <section className="hy-container" style={{ paddingTop: 90, paddingBottom: 110 }}>
        <div style={{ maxWidth: 830 }}>
          <span className="hy-kicker"><span className="hy-pulse" /> THE OFFICIAL KDYM APP</span>
          <h1 className="hy-section-title" style={{ marginTop: 27, fontSize: "clamp(58px,10vw,142px)" }}>DISTRICT.<br/><span style={{ color: "var(--hy-lime)" }}>CONNECTED.</span></h1>
          <p className="hy-section-desc">Get KDYM on your phone. Ministry updates, events, announcements, groups, and community in one app. Download it directly from your device's official app store.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 16, marginTop: 55 }}>
          {platforms.map((platform) => (
            <article className="hy-detail-card" key={platform.name} style={{ minHeight: 350 }}>
              <div className="hy-detail-top"><span>{platform.index} / {platform.platform}</span><Smartphone size={25}/></div>
              <div>
                <h2 style={{ font: '700 clamp(34px,5vw,61px)/1.05 "Space Grotesk",sans-serif', letterSpacing: "-.06em", margin: "20px 0 10px" }}>{platform.name}</h2>
                <p style={{ minHeight: 51 }}>{platform.instructions}</p>
                <a href={platform.href} className="hy-btn-primary" style={{ display: "inline-flex", borderRadius: 100, padding: "15px 24px", marginTop: 20 }} target="_blank" rel="noopener noreferrer">Download KDYM <ArrowUpRight size={17}/></a>
              </div>
            </article>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--hy-border)", marginTop: 58, paddingTop: 24, display: "flex", alignItems: "center", gap: 11, color: "#a5a7b6", fontSize: 13 }}>
          <ShieldCheck size={19} style={{ color: "var(--hy-lime)", flexShrink: 0 }}/>
          These buttons lead to the official Apple App Store and Google Play listings. No APK or third-party download is required.
        </div>
        <div style={{ marginTop: 42 }}>
          <Link href="/" className="hy-detail-link" style={{ color: "var(--hy-purple)" }}>Explore Heartland Hyphen Retreat <ArrowUpRight size={18}/></Link>
        </div>
      </section>
    </main>
  );
}
