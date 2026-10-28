"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Pause, Play, ShoppingBag } from "lucide-react";
import { useRef, useState } from "react";

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

function ProductCard({ item, index }) {
  const reduced = useReducedMotion();
  return (
    <motion.a href={item.href} target="_blank" rel="noopener noreferrer" className="hy-shop-item"
      initial={reduced ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: .45, delay: Math.min(index * .055, .25) }}
      whileHover={reduced ? undefined : { y: -5 }}>
      <div className="hy-shop-image"><img src={item.image} alt={item.title} loading="lazy" /></div>
      <div className="hy-shop-content">
        <div className="hy-detail-top"><span>{item.label}</span><ArrowUpRight size={19} /></div>
        <h3>{item.title}</h3>
        <span className="hy-detail-link">View on Kick Merch <ArrowUpRight size={15}/></span>
      </div>
    </motion.a>
  );
}

export default function MerchPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try { await video.play(); setPlaying(true); } catch { setPlaying(false); }
    } else { video.pause(); setPlaying(false); }
  };
  return (
    <main className="retreat-root hy-shop">
      <nav className="hy-shop-nav hy-container" aria-label="Merchandise navigation">
        <Link href="/" aria-label="KDYM home"><img src="/KDYM-Logotype-White.png" alt="Kansas District Youth Ministries"/></Link>
        <Link href="/" className="hy-btn-outline" style={{ padding: "12px 18px", minHeight: 45, fontSize: 12 }}><ArrowLeft size={16}/> Back to KDYM</Link>
      </nav>
      <div className="hy-container">
        <div className="hy-shop-hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="hy-kicker"><span className="hy-pulse" /> OFFICIAL DISTRICT MERCH</span>
            <h1 className="hy-section-title" style={{ marginTop: 27, fontSize: "clamp(56px,9vw,125px)" }}>WEAR THE<br/><strong>MOVEMENT.</strong></h1>
            <p className="hy-section-desc">From tees to everyday essentials. Find your KDYM gear, then check out securely through our official Kick Merch storefront.</p>
            <div className="hy-btn-row">
              <a className="hy-btn-primary" href={featuredProduct.href} rel="noopener noreferrer" target="_blank">Shop featured tee <ArrowUpRight size={17}/></a>
              <a href="#collection" className="hy-btn-outline">Explore collection <ShoppingBag size={16}/></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .94, y: 36 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .7, delay: .16 }} className="hy-shop-video-wrap">
            <video ref={videoRef} className="hy-shop-video" autoPlay muted loop playsInline preload="metadata" poster={featuredProduct.image} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onCanPlay={(e) => { if (e.currentTarget.paused) e.currentTarget.play().catch(() => setPlaying(false)); }}>
              <source src={featuredProduct.video} type="video/mp4"/>
            </video>
            <div className="hy-shop-video-overlay" />
            <span className="hy-shop-label">2026 / OUTPOUR COLLECTION</span>
            <button type="button" className="hy-shop-pause" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>{playing ? <Pause size={19}/> : <Play size={19}/>}</button>
            <div className="hy-shop-video-caption">
              <p className="hy-section-kicker">Featured drop</p>
              <h2>{featuredProduct.title}</h2>
              <a className="hy-btn-primary" href={featuredProduct.href} target="_blank" rel="noopener noreferrer" style={{ padding: "14px 19px" }}>Shop the tee <ArrowUpRight size={16}/></a>
            </div>
          </motion.div>
        </div>
        <section id="collection" className="hy-section" aria-labelledby="collection-title">
          <span className="hy-section-kicker">District essentials</span>
          <h2 className="hy-section-title" id="collection-title">THE FULL<br/><strong>COLLECTION.</strong></h2>
          <div className="hy-shop-grid">{merchItems.map((item, index) => <ProductCard key={item.href} item={item} index={index}/>)}</div>
          <p className="hy-shop-note">Products, availability and checkout are handled by Kick Merch. Selecting an item opens its official product listing.</p>
        </section>
      </div>
      <footer className="hy-footer">
        <div className="hy-container hy-footer-bottom" style={{ marginTop: 0 }}>
          <span>© {new Date().getFullYear()} Kansas District Youth Ministries</span>
          <div style={{ display: "flex", gap: 20 }}><Link href="/">Website</Link><Link href="/app">KDYM app</Link><Link href="/privacy">Privacy</Link></div>
        </div>
      </footer>
    </main>
  );
}
