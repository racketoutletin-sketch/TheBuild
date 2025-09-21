import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService: React.FC = () => {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <Navigation />
      <div className="max-w-4xl mx-auto mt-3">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-brand-accent font-semibold">
            The rules of our digital playground.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-brand-gray p-8 rounded-2xl border border-gray-700/50 shadow-lg text-brand-light-gray space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              By using our Services, you agree to be bound by these Terms. If
              you don’t agree to be bound by these Terms, do not use the
              Services. These Terms govern your access to and use of our
              website, products, and services ("Services").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of TheBuild
              and its licensors. Our trademarks and trade dress may not be used
              in connection with any product or service without the prior
              written consent of TheBuild.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              3. User Conduct
            </h2>
            <p>
              You agree not to use the Service for any purpose that is illegal
              or prohibited by these Terms. You are responsible for all of your
              activity in connection with the Service. You shall not (and shall
              not permit any third party to) either (a) take any action or (b)
              upload, download, post, submit or otherwise distribute or
              facilitate distribution of any content on or through the Service
              that is unlawful, threatening, abusive, harassing, defamatory,
              libelous, deceptive, or fraudulent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall TheBuild, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-accent mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
};

export default TermsOfService;
