import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions – My Recipe App</h1>
      <p className="mb-4">Last Updated:</p>

      <p className="mb-4">
        Welcome to <strong>My Recipe App</strong>. By using this application, you agree to the
        following Terms and Conditions. Please read them carefully before using the app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Purpose of the App</h2>
      <p className="mb-4">
        My Recipe App is created <strong>purely as a design and portfolio project</strong>. The app
        showcases user interface design and layout concepts. It is <strong>not intended for commercial
        use</strong>, public distribution, or data collection.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. No User Data Collection</h2>
      <p className="mb-4">
        This app <strong>does not collect, store, share, or transmit any personal information</strong>
        from users. No login, tracking, analytics, or data processing features are used in this app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Permissions</h2>
      <p className="mb-4">
        This app does <strong>not request or access any device permissions</strong>, including but not
        limited to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Camera</li>
        <li>Storage</li>
        <li>Location</li>
        <li>Contacts</li>
        <li>Microphone</li>
        <li>Network / Internet Access</li>
      </ul>
      <p className="mb-4">
        If future versions require permissions, the purpose will be clearly explained before use.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All graphics, icons, text, and layouts in this app are part of the creator’s design
        portfolio. Users may <strong>not copy, resell, distribute, or republish</strong> any part of the
        app without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. No Professional Advice</h2>
      <p className="mb-4">
        Any recipe information shown is for visual demonstration only and may not represent real
        cooking instructions or nutritional accuracy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        Since this app is for educational and design purposes, the developer is not responsible for
        any direct or indirect damages that may result from using the app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to These Terms</h2>
      <p className="mb-4">
        These Terms may be updated at any time. Continued use of the app means you accept the
        revised Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        For questions, please contact: <strong>[Your Email]</strong>
      </p>
    </div>
  );
}
