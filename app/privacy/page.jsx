const updatedDate = "May 14, 2026";

const sections = [
  {
    title: "1. Who we are",
    body: [
      "Kansas District Youth Ministries (\"KDYM,\" \"we,\" \"our,\" or \"us\") provides the KDYM app and website to help youth, leaders, churches, and families stay connected with ministry updates, events, camp information, groups, media, and community features.",
      "This Privacy Policy explains what information we collect, how we use it, and the choices you have when using the KDYM app, KDYM website, and related digital services."
    ]
  },
  {
    title: "2. Information we collect",
    body: [
      "Account information: name, email address, username, profile photo, church affiliation, role, access status, and similar profile details you provide.",
      "Camp and ministry participation information: camp access requests, group memberships, tribe assignments, role approvals, event participation, and ministry-related preferences.",
      "Community content: posts, comments, reactions, group messages, reports, moderation actions, and other content you submit or interact with.",
      "Device and notification information: device identifiers, push notification tokens, notification preferences, app diagnostics, and basic usage information needed to operate and secure the app.",
      "Media you upload: photos, videos, files, avatars, or other content you choose to upload through app features."
    ]
  },
  {
    title: "3. Information we do not intentionally collect",
    body: [
      "We do not sell personal information.",
      "We do not use the KDYM app for third-party advertising tracking.",
      "We do not intentionally collect precise location information if location-based features are not active in the app.",
      "We do not knowingly request more personal information than is needed for ministry, safety, account access, communication, and app functionality."
    ]
  },
  {
    title: "4. How we use information",
    body: [
      "To create and manage user accounts.",
      "To provide app features such as events, posts, comments, groups, chats, Play/media content, notifications, camp access, and admin tools.",
      "To review camp access requests and assign appropriate roles or permissions.",
      "To send important ministry, event, camp, group, safety, and account notifications.",
      "To protect users by reviewing reports, moderating content, blocking abusive behavior, enforcing community standards, and preventing misuse.",
      "To improve reliability, security, performance, and user experience."
    ]
  },
  {
    title: "5. How information is shared",
    body: [
      "With KDYM staff, church leaders, camp staff, group leaders, or authorized administrators when needed to operate ministry features, approve access, moderate content, or support users.",
      "With other users when you choose to post, comment, join groups, send messages, or display profile information inside community features.",
      "With service providers that help us operate the app, such as hosting, authentication, database, cloud storage, notifications, analytics, or security providers.",
      "When required by law, safety obligations, legal process, or to protect users, KDYM, churches, staff, or the public."
    ]
  },
  {
    title: "6. Community safety and moderation",
    body: [
      "The KDYM app may include user-generated content such as comments, messages, profile details, group content, and reactions.",
      "Users may be able to report content, report users, block users, or request review by KDYM moderators. KDYM may remove content, restrict accounts, suspend access, preserve moderation records, or take other safety actions when needed.",
      "Reports and moderation data may include the reported content, reporter information, reported user information, timestamps, reasons, and related context so KDYM can review and respond appropriately."
    ]
  },
  {
    title: "7. Push notifications",
    body: [
      "If you enable notifications, we may send ministry updates, event reminders, camp alerts, group notifications, message alerts, moderation notices, or account-related notices.",
      "You can manage notification preferences in the app or through your device settings."
    ]
  },
  {
    title: "8. Children and youth users",
    body: [
      "KDYM serves youth ministry communities, which may include minors. We aim to collect only information reasonably needed to operate the app, support ministry participation, and maintain safety.",
      "Parents or guardians who believe a child has provided information that should be reviewed or removed may contact KDYM using the contact information below."
    ]
  },
  {
    title: "9. Data retention",
    body: [
      "We keep information for as long as needed to provide the app, support ministry records, meet safety and moderation needs, comply with legal obligations, resolve disputes, and enforce our policies.",
      "Some content may be retained in backup, audit, safety, or moderation records even after account deletion if necessary for security, legal, or abuse-prevention purposes."
    ]
  },
  {
    title: "10. Account deletion",
    body: [
      "You may request or start account deletion from inside the KDYM app where available. Account deletion may remove or anonymize account profile data and revoke account access.",
      "Some content, moderation records, reports, safety logs, legal records, or backups may be retained when necessary to protect the community, comply with obligations, or prevent abuse."
    ]
  },
  {
    title: "11. Your choices",
    body: [
      "You may update profile details in the app where available.",
      "You may manage notification preferences in the app or device settings.",
      "You may report or block users through community safety tools where available.",
      "You may request account deletion through the app or by contacting KDYM."
    ]
  },
  {
    title: "12. Security",
    body: [
      "We use reasonable technical, administrative, and organizational safeguards to protect information. No digital service can guarantee complete security, but we work to protect accounts, content, and community data from unauthorized access or misuse."
    ]
  },
  {
    title: "13. Changes to this Privacy Policy",
    body: [
      "We may update this Privacy Policy as the app, website, ministry operations, or legal requirements change. The updated date at the top of this page shows when this policy was last revised."
    ]
  },
  {
    title: "14. Contact",
    body: [
      "For privacy questions, account deletion requests, or safety concerns, contact KDYM leadership through the official Kansas District Youth Ministries communication channels or the contact information provided on kdym.org."
    ]
  }
];

export const metadata = {
  title: "Privacy Policy | KDYM",
  description: "Privacy Policy for Kansas District Youth Ministries digital services."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20 sm:px-8 lg:px-10">
        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-400">Kansas District Youth Ministries</p>
          <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Privacy Policy</h1>
          <p className="max-w-2xl text-base leading-7 text-white/65">Last updated: {updatedDate}</p>
        </div>

        {/* <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
          <p className="text-sm leading-7 text-white/70">
            This page is provided for general ministry app operations and should be reviewed by KDYM leadership before publication.
          </p>
        </div> */}

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
