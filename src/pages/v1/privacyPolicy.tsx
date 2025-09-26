import React from "react";
import Navigation from "@/components/v1/Navigation";
import Footer from "@/components/v1/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-white text-black min-h-screen font-sans antialiased">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
              Privacy{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 font-semibold">
              Your data, your trust.
            </p>
            <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white border border-primary-800 rounded-lg shadow-lg p-8 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-400 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to The Build ("we," "our," or "us"). We are committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you express an interest in obtaining information about
              us or our products and services, when you participate in
              activities on the website or otherwise when you contact us. The
              personal information that we collect depends on the context of
              your interactions with us and the website, the choices you make
              and the products and features you use.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              We use personal information collected via our website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              4. Will Your Information Be Shared With Anyone?
            </h2>
            <p>
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations. We do not sell your personal
              information.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              5. Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have questions or comments about this policy, you may email
              us at{" "}
              <a
                href="mailto:privacy@thebuild.in"
                className="text-primary hover:underline font-medium"
              >
                hello@thebuild.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
