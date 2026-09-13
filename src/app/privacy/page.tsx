import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Quantumedge Technologies Limited",
  description:
    "How Quantumedge Technologies Limited collects, uses, and protects information for clients and website visitors.",
};

const LAST_UPDATED = "September 13, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28 pb-24 lg:pt-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Legal
          </span>
          <h1 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="prose-legal mt-12 space-y-10">
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                1. Introduction
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Quantumedge Technologies Limited (&ldquo;Quantumedge&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), based in
                Nairobi, Kenya, provides enterprise software engineering, AI
                automation, and cloud-native consulting services. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                information when you visit our website or engage us as a client.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                2. Information We Collect
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                We may collect information you voluntarily provide, such as your
                name, company name, email address, phone number, and project
                details when you submit a contact or consultation request. We
                also collect limited technical data automatically, including IP
                address, browser type, and general usage analytics, to help us
                operate and improve our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                3. How We Use Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-[1.6] text-muted">
                <li>To respond to inquiries and prepare project proposals or quotes.</li>
                <li>To deliver, support, and maintain contracted services.</li>
                <li>To communicate updates, invoices, and service-related notices.</li>
                <li>To improve our website, security, and service offerings.</li>
                <li>To comply with applicable legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                4. Data Sharing
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                We do not sell personal information. We may share information
                with trusted subprocessors and infrastructure providers (such as
                cloud hosting and communications tools) strictly to deliver our
                services, and only under confidentiality obligations consistent
                with this policy. We may also disclose information where
                required by law or to protect our legal rights.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                5. Data Security &amp; Retention
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                We apply industry-standard technical and organizational measures
                to protect information against unauthorized access, alteration,
                or loss. We retain information only for as long as necessary to
                fulfill the purposes described in this policy or as required by
                applicable law or contract.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                6. Your Rights
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Depending on your jurisdiction, you may have the right to access,
                correct, or request deletion of your personal information. To
                exercise these rights, contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                7. Contact Us
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                For questions about this Privacy Policy or our data practices,
                reach us through our{" "}
                <Link
                  href="/#contact"
                  className="font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  contact form
                </Link>{" "}
                or by phone at{" "}
                <a
                  href="tel:+254726084248"
                  className="font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  +254 726 084 248
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
