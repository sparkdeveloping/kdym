const updatedDate = "May 14, 2026";

const sections = [
  {
    title: "1. Acceptance of these Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your use of the KDYM app, kdym.org, and related digital services provided by Kansas District Youth Ministries (\"KDYM,\" \"we,\" \"our,\" or \"us\").",
      "By using KDYM digital services, you agree to these Terms, the Privacy Policy, and the Community Guidelines. If you do not agree, do not use the services."
    ]
  },
  {
    title: "2. Ministry purpose",
    body: [
      "KDYM digital services are provided to support youth ministry communication, events, camp participation, groups, media, announcements, and community engagement.",
      "The services are not intended for emergency communication, crisis response, legal advice, medical advice, counseling, or guaranteed real-time safety monitoring."
    ]
  },
  {
    title: "3. Accounts and access",
    body: [
      "You may need an account to access certain features. You are responsible for keeping your login information secure and for activity that occurs through your account.",
      "Some features may require approval by KDYM staff, camp staff, church leadership, group leaders, or authorized administrators. KDYM may approve, deny, restrict, suspend, or remove access at its discretion to protect the ministry community."
    ]
  },
  {
    title: "4. User content",
    body: [
      "You may be able to submit content such as profile information, posts, comments, messages, reactions, photos, videos, files, reports, or other materials.",
      "You are responsible for the content you submit. Do not submit content that violates these Terms, the Community Guidelines, anyone’s rights, or applicable law.",
      "By submitting content, you give KDYM permission to host, display, process, moderate, and share that content as needed to operate the services and ministry features."
    ]
  },
  {
    title: "5. Community conduct",
    body: [
      "You agree not to harass, threaten, bully, exploit, impersonate, spam, deceive, abuse, or harm other users.",
      "You agree not to post sexually explicit content, hateful content, violent threats, illegal content, private information, or content that endangers minors or vulnerable people.",
      "You agree to use the services in a way that reflects respect for KDYM, local churches, leaders, parents, volunteers, staff, and other users."
    ]
  },
  {
    title: "6. Moderation and enforcement",
    body: [
      "KDYM may review reports, remove content, hide content, restrict posting, remove group access, suspend accounts, delete accounts, preserve safety records, or take other moderation actions when needed.",
      "KDYM is not required to publish, retain, review, or remove every piece of content, but may act when content or conduct appears to violate these Terms, the Community Guidelines, ministry standards, safety expectations, or law.",
      "Users may have access to reporting and blocking tools. Abuse of reporting tools may also result in restrictions."
    ]
  },
  {
    title: "7. Admin and leadership features",
    body: [
      "Certain users may receive elevated access for ministry operations, moderation, camp management, group leadership, scoring, announcements, or media publishing.",
      "Users with elevated access must use those tools responsibly, only for authorized ministry purposes, and in accordance with KDYM leadership direction."
    ]
  },
  {
    title: "8. Notifications",
    body: [
      "The app may send notifications for ministry updates, events, camp information, group activity, messages, moderation notices, and account-related matters if notifications are enabled.",
      "You can manage notifications through app settings or your device settings."
    ]
  },
  {
    title: "9. Intellectual property",
    body: [
      "KDYM names, branding, designs, graphics, text, media, logos, app features, and related materials may be owned by KDYM or its licensors and may not be copied or misused without permission.",
      "You must have the rights to any content you upload. Do not upload copyrighted, private, or restricted content unless you have permission."
    ]
  },
  {
    title: "10. Third-party services",
    body: [
      "KDYM digital services may rely on third-party providers for authentication, hosting, database storage, push notifications, media storage, analytics, or other technical operations.",
      "Your use of those features may also be subject to the policies or terms of those third-party providers."
    ]
  },
  {
    title: "11. Account deletion and termination",
    body: [
      "You may request or start account deletion through the app where available. KDYM may also suspend or terminate accounts that violate these Terms, Community Guidelines, safety requirements, ministry expectations, or law.",
      "Some safety, legal, backup, audit, or moderation records may be retained after deletion when necessary."
    ]
  },
  {
    title: "12. No guarantee of availability",
    body: [
      "KDYM may update, suspend, limit, or discontinue any feature at any time. The services may not always be available, error-free, secure, or uninterrupted."
    ]
  },
  {
    title: "13. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, KDYM is not liable for indirect, incidental, special, consequential, or punitive damages related to your use of the services.",
      "The services are provided on an \"as is\" and \"as available\" basis."
    ]
  },
  {
    title: "14. Changes to these Terms",
    body: [
      "We may update these Terms as the app, website, ministry operations, or legal requirements change. The updated date at the top of this page shows when these Terms were last revised."
    ]
  },
  {
    title: "15. Contact",
    body: [
      "For questions about these Terms, contact KDYM leadership through the official Kansas District Youth Ministries communication channels or the contact information provided on kdym.org."
    ]
  }
];

export const metadata = {
  title: "Terms of Service | KDYM",
  description: "Terms of Service for Kansas District Youth Ministries digital services."
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20 sm:px-8 lg:px-10">
        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-400">Kansas District Youth Ministries</p>
          <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Terms of Service</h1>
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
