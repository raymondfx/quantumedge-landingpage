import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Quantumedge Technologies Limited",
  description:
    "The terms governing use of the Quantumedge Technologies Limited website and engagement of our services.",
};

const LAST_UPDATED = "September 13, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28 pb-24 lg:pt-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Legal
          </span>
          <h1 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="prose-legal mt-12 space-y-10">
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                1. Agreement to Terms
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access
                to and use of the Quantumedge Technologies Limited
                (&ldquo;Quantumedge&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
                website and the engagement of our software engineering, AI
                automation, and cloud consulting services. By using our website
                or engaging our services, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                2. Services
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Specific project scope, deliverables, timelines, and fees are
                defined in a separate written proposal, statement of work, or
                master services agreement signed by both parties. These Terms
                apply generally alongside, and do not replace, any such signed
                agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                3. Client Responsibilities
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Clients agree to provide timely access to information, systems,
                and feedback reasonably required for us to perform contracted
                services, and to use deliverables in compliance with applicable
                laws.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                4. Intellectual Property
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Unless otherwise agreed in writing, ownership of custom
                deliverables transfers to the client upon full payment.
                Quantumedge retains ownership of its pre-existing tools,
                frameworks, and general know-how used to deliver services, and
                may reuse non-client-specific components across engagements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                5. Fees &amp; Payment
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Fees, invoicing schedules, and payment terms are set out in the
                applicable proposal or agreement. Late payments may result in
                suspension of services until outstanding amounts are settled.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                6. Confidentiality
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Both parties agree to keep confidential any non-public business,
                technical, or financial information disclosed during the course
                of an engagement, and to use it only for purposes of the
                engagement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                7. Limitation of Liability
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                To the maximum extent permitted by law, Quantumedge shall not be
                liable for indirect, incidental, or consequential damages
                arising from use of our website or services. Our total
                liability for any claim shall not exceed the fees paid for the
                specific engagement giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                8. Governing Law
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                These Terms are governed by the laws of the Republic of Kenya,
                without regard to conflict-of-law principles. Disputes shall be
                subject to the exclusive jurisdiction of the courts of Kenya,
                unless otherwise agreed in a signed engagement contract.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                9. Contact Us
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-muted">
                Questions about these Terms can be sent through our{" "}
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
