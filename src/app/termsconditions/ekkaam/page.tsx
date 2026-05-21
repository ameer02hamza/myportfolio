export default function PrivacyPolicy() {
  const lastUpdated = "May 21, 2025";

  return (
    <div className="min-h-screen bg-[#0f1117] text-white font-sans">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { font-family: 'Sora', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .glow { box-shadow: 0 0 40px rgba(99,212,180,0.12); }
        .badge { background: linear-gradient(135deg, rgba(99,212,180,0.15), rgba(99,212,180,0.05)); border: 1px solid rgba(99,212,180,0.25); }
        .section-line { background: linear-gradient(90deg, rgba(99,212,180,0.6), transparent); }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); }
      `}</style>

      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#0f1117]/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#63d4b4] to-[#3aafa9] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-sm font-600 text-white/80">
              Privacy Policy
            </span>
          </div>
          <span className="mono text-xs text-white/30">
            v1.0 · {lastUpdated}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[#63d4b4] text-xs font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Google Play Store · Privacy Policy
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Your Privacy,
            <br />
            <span className="text-[#63d4b4]">Fully Protected.</span>
          </h1>
          <p className="text-white/50 text-base leading-relaxed max-w-xl">
            This app is built with a zero-data-collection principle. Your
            information stays on your device — always.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#63d4b4]/60"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* Key Promise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              icon: "🔒",
              title: "No Data Collected",
              desc: "Zero personal data ever collected or transmitted",
            },
            {
              icon: "📱",
              title: "Local Only",
              desc: "All data stays exclusively on your device",
            },
            {
              icon: "👁️",
              title: "No Owner Access",
              desc: "App owner cannot access any of your data",
            },
          ].map((item) => (
            <div key={item.title} className="card rounded-2xl p-5 space-y-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-semibold text-sm text-white/90">
                {item.title}
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Section: Introduction */}
        <Section number="1" title="Introduction">
          <p>
            This Privacy Policy describes how your information is handled when
            you use this application. We take your privacy seriously — this app
            was designed from the ground up to function entirely without
            collecting, processing, or transmitting any personal data.
          </p>
          <p className="mt-3">
            By using this app, you agree to this policy. If you do not agree,
            please discontinue use of the application.
          </p>
        </Section>

        {/* Section: Data Collection */}
        <Section number="2" title="Information We Do NOT Collect">
          <p className="mb-4">
            This app{" "}
            <strong className="text-white/90">
              does not collect, store, share, or transmit
            </strong>{" "}
            any personal information. This includes but is not limited to:
          </p>
          <ul className="space-y-2">
            {[
              "Name, email address, phone number, or any identity information",
              "Location data (GPS or network-based)",
              "Device identifiers, IMEI, or advertising IDs",
              "Usage data, analytics, or behavioral tracking",
              "Contacts, calendar, or media files",
              "Any form of payment or financial information",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/60 text-sm"
              >
                <span className="mt-0.5 text-[#63d4b4] flex-shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Section: Permissions */}
        <Section number="3" title="Permissions Used & Why">
          <p className="mb-5">
            The following Android permissions are used by this app. Each
            permission serves a specific local function only —{" "}
            <strong className="text-white/90">
              no data is sent to any server or third party.
            </strong>
          </p>
          <div className="space-y-3">
            {[
              {
                perm: "POST_NOTIFICATIONS",
                use: "To display local reminder or alert notifications to the user on their device.",
                private: true,
              },
              {
                perm: "SCHEDULE_EXACT_ALARM",
                use: "To schedule notifications or reminders at a precise time as set by the user.",
                private: true,
              },
              {
                perm: "USE_EXACT_ALARM",
                use: "To ensure alarms trigger at the exact moment the user configured them.",
                private: true,
              },
              {
                perm: "RECEIVE_BOOT_COMPLETED",
                use: "To restore scheduled alarms after the device restarts, so user-set reminders are not lost.",
                private: true,
              },
              {
                perm: "VIBRATE",
                use: "To vibrate the device as part of a notification alert for user-configured reminders.",
                private: true,
              },
            ].map((item) => (
              <div key={item.perm} className="card rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <code className="mono text-xs bg-[#63d4b4]/10 text-[#63d4b4] px-2 py-0.5 rounded-md">
                    {item.perm}
                  </code>
                  <span className="text-xs text-white/30 badge px-2 py-0.5 rounded-full">
                    Local Only
                  </span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 rounded-xl border border-[#63d4b4]/20 bg-[#63d4b4]/5">
            <p className="text-[#63d4b4] text-sm font-medium mb-1">
              Important Note
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              None of the above permissions are used to collect, read, or
              transmit any personal data. All operations occur locally on your
              device. The app owner has no access to any information derived
              from these permissions.
            </p>
          </div>
        </Section>

        {/* Section: Local Storage */}
        <Section number="4" title="Local Data Storage">
          <p>
            Any data created or saved by this app (such as preferences or
            user-configured settings) is stored{" "}
            <strong className="text-white/90">
              exclusively on your device
            </strong>{" "}
            using Android&apos;s local storage mechanisms. This data:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Is never uploaded to any server, cloud, or remote storage",
              "Is not accessible to the app owner or any third party",
              "Can be deleted at any time by uninstalling the app or clearing app data",
              "Is not shared with any other app or service",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/60 text-sm"
              >
                <span className="mt-0.5 text-[#63d4b4] flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Section: Third Party */}
        <Section number="5" title="Third-Party Services">
          <p>
            This app{" "}
            <strong className="text-white/90">does not integrate</strong> any
            third-party SDKs, analytics tools, advertising networks, crash
            reporting services, or external APIs that could collect data. There
            are no third-party services embedded in this application.
          </p>
        </Section>

        {/* Section: Children */}
        <Section number="6" title="Children&apos;s Privacy">
          <p>
            This app does not knowingly collect any information from children
            under the age of 13. Since no data is collected from any user, the
            app is safe for use by all age groups in this regard.
          </p>
        </Section>

        {/* Section: Changes */}
        <Section number="7" title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated &apos;Last Updated&apos; date.
            Continued use of the app after changes constitutes acceptance of the
            revised policy. We encourage you to review this page periodically.
          </p>
        </Section>

        {/* Section: Contact */}
        <Section number="8" title="Contact Us">
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or
            the app&apos;s data practices, please feel free to reach out:
          </p>
          <div className="card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#63d4b4]/10 flex items-center justify-center flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#63d4b4"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">Email</p>
              <p className="text-white/80 text-sm font-medium">
                ameer02hamza@gmail.com
              </p>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="pt-8 border-t border-white/[0.06] text-center space-y-2">
          <p className="text-white/25 text-xs">
            This privacy policy is effective as of {lastUpdated}
          </p>
          <p className="text-white/15 text-xs mono">
            © 2025 · All rights reserved
          </p>
        </div>
      </main>
    </div>
  );
}

// Section Component
function Section({ number, title, children }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="mono text-xs text-[#63d4b4]/60 font-medium">
          0{number}
        </span>
        <div className="h-px flex-1 section-line" style={{ height: "1px" }} />
      </div>
      <h2 className="text-xl font-semibold text-white/90">{title}</h2>
      <div className="text-white/55 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
