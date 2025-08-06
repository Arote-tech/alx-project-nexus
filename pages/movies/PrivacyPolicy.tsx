import Head from 'next/head';
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import CustomLinks from "@/components/common/CustomLinks"



export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="p-6 space-y-6" style = {{backgroundImage: `url('/images/hour-glass.jpg')`}}>
        <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-lg font-bold mb-6 text-[#303132]">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: August 4, 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>We may collect personal details like your name, email address, social login data, search history, and interactions with movies (watched, liked, rated).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To personalize your movie recommendations</li>
            <li>To manage your watchlist and viewing history</li>
            <li>To enhance our app features and performance</li>
            <li>To send relevant notifications (if enabled)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
          <p>We do not sell your personal information. We only share data with trusted service providers or when legally required.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking</h2>
          <p>We use cookies to maintain login sessions, track usage patterns, and personalize content. You may disable cookies, but some features may not function properly.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>We use standard security practices (HTTPS, server access controls) to protect your information. However, no system is completely secure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access or update your data</li>
            <li>Request deletion of your account</li>
            <li>Opt out of optional notifications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Children's Privacy</h2>
          <p>Our service is not directed at children under 13. We do not knowingly collect data from them.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>This policy may be updated from time to time. Any changes will be posted here with a revised date.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>If you have questions about this policy, reach out:</p>
          <p className="mt-2">📧 <strong>your-support@email.com</strong></p>
        </section>
      </div>
    </div>
    <CustomLinks />
    <Footer />    
    </>
  );
}
