import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                  <Navigation />
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-brand-accent font-semibold">
            Your data, your trust.
          </p>
        </div>
        <div className="prose prose-invert lg:prose-lg max-w-none text-brand-light-gray mx-auto bg-brand-gray p-8 rounded-lg border border-gray-700/50">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to Stellar Solutions ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information.
          </p>
          
          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@stellarsolutions.dev" className="text-brand-accent-light hover:underline">privacy@stellarsolutions.dev</a>.
          </p>
        </div>
      </div>
            <Footer />
    </main>
  );
};

export default PrivacyPolicy;
