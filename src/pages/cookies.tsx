import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy: React.FC = () => {
  return (

    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                  <Navigation />

      <div className="max-w-4xl mx-auto mt-10 mb-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Cookie Policy
          </h1>
          <p className="mt-4 text-lg text-brand-accent font-semibold">
            How we use cookies to improve your experience.
          </p>
        </div>
        <div className="prose prose-invert lg:prose-lg max-w-none text-brand-light-gray mx-auto bg-brand-gray p-8 rounded-lg border border-gray-700/50">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies for storing and honoring your preferences and settings, enabling you to sign-in, combating fraud, analyzing how our products perform, and fulfilling other legitimate purposes.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            Our site uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. We use the following types of cookies:
          </p>
          <ul>
            <li><strong>Strictly necessary cookies.</strong> These are cookies that are required for the operation of our website.</li>
            <li><strong>Analytical/performance cookies.</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it.</li>
            <li><strong>Functionality cookies.</strong> These are used to recognise you when you return to our website.</li>
          </ul>

          <h2>3. How to Manage Cookies</h2>
          <p>
            You can use your web browser's cookie controls to manage and delete cookies. Please visit your browser's help pages for more information on how to do this. Please note that if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
          </p>
           <h2>4. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:legal@stellarsolutions.dev" className="text-brand-accent-light hover:underline">legal@stellarsolutions.dev</a>.
          </p>
        </div>
      </div>
            <Footer />
    </main>
  );
};

export default CookiePolicy;
