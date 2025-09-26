import React from "react";
import Navigation from "@/components/v1/Navigation";
import Footer from "@/components/v1/Footer";

const CookiePolicy: React.FC = () => {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <Navigation />

      <div className="max-w-4xl mx-auto mt-10 mb-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
            Cookie Policy
          </h1>
          <p className="mt-4 text-lg text-brand-accent font-semibold">
            How we use cookies to improve your experience.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-brand-gray p-8 rounded-2xl border border-gray-700/50 shadow-lg text-brand-light-gray space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device to store data
              that can be recalled by a web server in the domain that placed the
              cookie. We use cookies and similar technologies for storing and
              honoring your preferences and settings, enabling you to sign in,
              combating fraud, analyzing how our products perform, and
              fulfilling other legitimate purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              2. How We Use Cookies
            </h2>
            <p>
              Our site uses cookies to distinguish you from other users of our
              website. This helps us to provide you with a good experience when
              you browse our website and also allows us to improve our site. We
              use the following types of cookies:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Strictly necessary cookies.</strong> Required for the
                operation of our website.
              </li>
              <li>
                <strong>Analytical/performance cookies.</strong> Help us
                recognize and count visitors, and see how they move around our
                website.
              </li>
              <li>
                <strong>Functionality cookies.</strong> Used to recognize you
                when you return to our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              3. How to Manage Cookies
            </h2>
            <p>
              You can use your web browser&apos;s cookie controls to manage and
              delete cookies. Please visit your browser&apos;s help pages for
              more information on how to do this. Please note that if you block
              all cookies (including essential ones), you may not be able to
              access all or parts of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              4. Contact Us
            </h2>
            <p>
              If you have questions or comments about this policy, you may email
              us at{" "}
              <a
                href="mailto:hello@thebuild.in"
                className="text-primary hover:underline"
              >
                hello@thebuild.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default CookiePolicy;
