const updatedDate = "May 14, 2026";

const sections = [
  {
    title: "1. Purpose",
    body: [
      "The KDYM community exists to support youth ministry, spiritual growth, healthy communication, camp participation, events, groups, media, and connection between students, leaders, churches, and families.",
      "These Community Guidelines explain what is and is not allowed in KDYM digital spaces, including the app, comments, groups, chats, posts, profiles, Play/media discussions, and related features."
    ]
  },
  {
    title: "2. Be respectful",
    body: [
      "Treat others with dignity and care. Do not harass, bully, mock, threaten, intimidate, shame, or target another person or group.",
      "Disagreements should remain respectful. Personal attacks, repeated unwanted contact, hostile comments, and public humiliation are not allowed."
    ]
  },
  {
    title: "3. Keep content appropriate",
    body: [
      "Do not post sexually explicit content, pornography, nudity, graphic violence, hateful content, threats, self-harm encouragement, illegal content, or content that exploits or endangers minors.",
      "Do not post content that is crude, predatory, abusive, deceptive, or clearly outside the purpose of KDYM ministry spaces."
    ]
  },
  {
    title: "4. Protect minors and personal information",
    body: [
      "Do not share someone else’s private information, including phone numbers, addresses, personal schedules, private messages, sensitive family details, school details, or personal photos without permission.",
      "Do not pressure minors or other users for private contact, inappropriate conversations, images, secrecy, or off-platform communication."
    ]
  },
  {
    title: "5. No impersonation or deception",
    body: [
      "Do not pretend to be another person, leader, church, staff member, admin, or ministry representative.",
      "Do not create fake accounts, mislead others about your identity, manipulate polls or reactions, or misuse group access."
    ]
  },
  {
    title: "6. No spam or misuse",
    body: [
      "Do not spam comments, chats, posts, reports, reactions, or group requests.",
      "Do not use KDYM digital services for scams, unauthorized fundraising, advertising, promotions, malware, phishing, harassment campaigns, or disruptive behavior."
    ]
  },
  {
    title: "7. Posting photos, videos, and media",
    body: [
      "Only upload media you have permission to share. Respect privacy, worship environments, minors, leaders, and church/community expectations.",
      "KDYM may remove media that is unsafe, inappropriate, distracting, disrespectful, copyrighted without permission, or inconsistent with ministry purposes."
    ]
  },
  {
    title: "8. Comments, group chats, and Play discussions",
    body: [
      "Comments and chats should stay relevant, respectful, safe, and appropriate for youth ministry spaces.",
      "KDYM may remove comments, messages, or discussions that violate these Guidelines or create safety, privacy, or moderation concerns."
    ]
  },
  {
    title: "9. Reporting and blocking",
    body: [
      "If you see content or behavior that violates these Guidelines, use the report tools in the app where available or contact KDYM leadership.",
      "Blocking may help limit interactions with another user. Reporting helps KDYM review potential violations. Do not abuse reporting tools to target, annoy, or silence others unfairly."
    ]
  },
  {
    title: "10. Moderation actions",
    body: [
      "KDYM may remove content, hide content, restrict features, remove group access, suspend accounts, delete accounts, preserve moderation records, or contact church/camp leadership when needed.",
      "Moderation decisions may consider context, severity, repeated behavior, safety concerns, ministry standards, and legal obligations."
    ]
  },
  {
    title: "11. Leaders, admins, and staff",
    body: [
      "Users with leadership or admin access are expected to model maturity, protect user safety, respect privacy, and use their tools only for authorized ministry purposes.",
      "Misuse of admin, leader, or staff access may result in removal of privileges or account restrictions."
    ]
  },
  {
    title: "12. When urgent help is needed",
    body: [
      "KDYM digital services are not emergency services. If someone is in immediate danger, contact local emergency services or a trusted adult, parent, guardian, pastor, leader, or appropriate authority immediately."
    ]
  },
  {
    title: "13. Updates",
    body: [
      "KDYM may update these Community Guidelines as the app, website, ministry operations, safety practices, or legal requirements change. The updated date at the top of this page shows when these Guidelines were last revised."
    ]
  },
  {
    title: "14. Contact",
    body: [
      "For safety concerns, moderation questions, or community issues, contact KDYM leadership through the official Kansas District Youth Ministries communication channels or the contact information provided on kdym.org."
    ]
  }
];

export const metadata = {
  title: "Community Guidelines | KDYM",
  description: "Community Guidelines for Kansas District Youth Ministries digital spaces."
};

export default function CommunityGuidelinesPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20 sm:px-8 lg:px-10">
        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-400">Kansas District Youth Ministries</p>
          <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Community Guidelines</h1>
          <p className="max-w-2xl text-base leading-7 text-white/65">Last updated: {updatedDate}</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
          <p className="text-sm leading-7 text-white/70">
            KDYM community spaces should be safe, respectful, ministry-centered, and appropriate for youth, leaders, churches, and families.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-white">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-white/70">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
