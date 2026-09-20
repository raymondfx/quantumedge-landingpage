"use client";

import Reveal from "../Reveal";
import { useContactModal } from "../ContactModalProvider";

export default function MvpFinalCta() {
  const { openContactModal } = useContactModal();

  return (
    <section className="pt-8 pb-20 sm:pt-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-navy px-8 py-14 text-center sm:px-14 sm:py-16">
            <h2 className="font-heading mx-auto max-w-xl text-3xl font-bold leading-[1.2] text-accent-soft sm:text-[2.5rem]">
              Ready to turn your spec into a shipped product?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-[1.4] text-white/60">
              Tell us what you&rsquo;re building — we&rsquo;ll follow up
              within one business day with a clear scope and free estimate.
            </p>
            <button
              onClick={openContactModal}
              className="btn-primary mt-8 inline-flex items-center justify-center rounded-lg px-8 py-3.5"
            >
              Get My Free MVP Estimate
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
