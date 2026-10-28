export default function sitemap() {
  const base = "https://kdym.org";
  return [
    { url: base + "/", changeFrequency: "weekly", priority: 1 },
    { url: base + "/merch", changeFrequency: "monthly", priority: 0.65 },
    { url: base + "/app", changeFrequency: "monthly", priority: 0.75 },
    { url: base + "/privacy", changeFrequency: "yearly", priority: 0.2 },
    { url: base + "/terms", changeFrequency: "yearly", priority: 0.2 },
    { url: base + "/community-guidelines", changeFrequency: "yearly", priority: 0.2 },
  ];
}
