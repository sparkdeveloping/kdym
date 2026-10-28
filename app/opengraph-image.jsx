import { ImageResponse } from "next/og";

export const alt = "Heartland Hyphen Retreat 2026 — Kansas District Youth Ministries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: "100%", height: "100%", padding: "70px 78px",
      background: "linear-gradient(145deg,#080a12,#231e39)",
      color: "#ecece5", fontFamily: "sans-serif",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, fontWeight: 700, letterSpacing: 3 }}>
        <span>KANSAS DISTRICT YOUTH MINISTRIES</span>
        <span style={{ color: "#b7a5ff" }}>2026 / HEARTLAND</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, fontWeight: 900, letterSpacing: -7, lineHeight: .93, fontSize: 126 }}>
        <span>HYPHEN</span>
        <span style={{ color: "#e4fc8d" }}>RETREAT.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "2px solid #504c5f", paddingTop: 27, fontSize: 25, fontWeight: 600 }}>
        <span>NOV 12—14 · OLATHE, KANSAS</span>
        <span>BRUCE HOWELL</span>
      </div>
    </div>,
    { ...size }
  );
}
