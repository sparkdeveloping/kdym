"use client";
import { PublicHeader, PublicFooter } from "../../components/PublicSiteChrome";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play, ShoppingBag } from "lucide-react";
import { useRef, useState } from "react";

const featuredProduct = {
  title: "2026 Outpour Tee",
  label: "Featured Drop",
  price: "Available now",
  description:
    "The main 2026 Outpour shirt for Kansas District Youth Ministries.",
  href: "https://www.kickmerch.com/products/basic-cotton-t-shirt-kansas-district-youth-ministry?variant=41967414640722",
  video: "/merch/OUTPOUR_TEE.mp4",
  image: "/outpour-tee.webp",
};
const merchItems = [
  {
    title: "Basic Cotton T-Shirt",
    label: "Tee",
    image: "/classic-tee.webp",
    href: "https://www.kickmerch.com/products/basic-cotton-t-shirt-kansas-district-youth-ministry-1",
  },
  {
    title: "Premium Heavyweight T-Shirt",
    label: "Premium",
    image: "/heavyweight-tee.webp",
    href: "https://www.kickmerch.com/products/premium-heavyweight-t-shirt-kansas-district-youth-ministry",
  },
  {
    title: "Premium Long Sleeve",
    label: "Long Sleeve",
    image: "/long-sleeve.webp",
    href: "https://www.kickmerch.com/products/premium-heavyweight-long-sleeve-shirt",
  },
  {
    title: "Basic Crewneck Sweatshirt",
    label: "Crewneck",
    image: "/crewneck.webp",
    href: "https://www.kickmerch.com/products/basic-crewneck-pullover-sweatshirt-kansas-district-youth-ministry",
  },
  {
    title: "Classic Pullover Hoodie",
    label: "Hoodie",
    image: "/hoodie.webp",
    href: "https://www.kickmerch.com/products/classic-pullover-hoodie-kansas-district-youth-ministry",
  },
  {
    title: "Richardson 112 Trucker Cap",
    label: "Hat",
    image: "/trucker-cap.webp",
    href: "https://www.kickmerch.com/products/embroidered-richardson-112-trucker-cap",
  },
  {
    title: "Classic Dad Hat",
    label: "Hat",
    image: "/dad-hat.webp",
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
    image: "/mug.webp",
    href: "https://www.kickmerch.com/products/11oz-white-mug-kansas-district-youth-ministry",
  },
  {
    title: "Wide Mouth Water Bottle",
    label: "Bottle",
    image: "/water-bottle.webp",
    href: "https://www.kickmerch.com/products/wide-mouth-water-bottle-kansas-district-youth-ministry",
  },
  {
    title: "Stainless Steel Tumbler",
    label: "Tumbler",
    image: "/tumbler.webp",
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
  const [playing, setPlaying] = useState(false);
  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try { await video.play(); setPlaying(true); } catch { setPlaying(false); }
    } else { video.pause(); setPlaying(false); }
  };
  return (
    <main className="retreat-root hy-shop">
      <PublicHeader />
      <div className="hy-container">
        <div className="hy-shop-hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="hy-kicker"><span className="hy-pulse" /> OFFICIAL DISTRICT MERCH</span>
            <h1 className="hy-section-title" style={{ marginTop: 27, fontSize: "clamp(39px,9vw,125px)" }}>WEAR THE<br/><strong>MOVEMENT.</strong></h1>
            <p className="hy-section-desc">Explore existing KDYM apparel and everyday essentials, including the 2026 Outpour collection. Checkout is handled through Kick Merch.</p>
            <div className="hy-btn-row">
              <a className="hy-btn-primary" href={featuredProduct.href} rel="noopener noreferrer" target="_blank">Shop featured tee <ArrowUpRight size={17}/></a>
              <a href="#collection" className="hy-btn-outline">Explore collection <ShoppingBag size={16}/></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .94, y: 36 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .7, delay: .16 }} className={playing ? "hy-shop-video-wrap is-playing" : "hy-shop-video-wrap"}>
            <video ref={videoRef} className="hy-shop-video" controls={playing} playsInline preload="none" poster={featuredProduct.image} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
              <source src={featuredProduct.video} type="video/mp4"/>
            </video>
            <div className="hy-shop-video-overlay" />
            {!playing && <button type="button" className="hy-shop-launch" onClick={togglePlay} aria-label="Play Outpour merchandise video"><Play size={30} fill="currentColor" aria-hidden="true" /></button>}
            <span className="hy-shop-label">OUTPOUR / KDYM COLLECTION</span>
            <button type="button" className="hy-shop-pause" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>{playing ? <Pause size={19}/> : <Play size={19}/>}</button>
            <div className="hy-shop-video-caption">
              <p className="hy-section-kicker">Outpour collection</p>
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
      <PublicFooter />
    </main>
  );
}
