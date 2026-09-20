"use client";

import Image from "next/image";
import { useContactModal } from "../ContactModalProvider";
import TrustStrip from "../TrustStrip";

export default function MvpHero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative overflow-hidden pt-14 pb-0 lg:pt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="font-heading animate-fade-in-up text-[2rem] font-semibold leading-[1.05] tracking-[-1px] text-navy sm:text-[2.5rem] lg:text-[3rem]">
              Ship Your MVP in
              <br />
              Weeks, Not Months.
            </h1>

            <p className="animate-fade-in-up delay-200 mt-7 max-w-lg text-xl leading-[1.4] text-[#242627]">
              QuantumEdge helps funded startups turn a spec into a working
              product fast — senior engineers, fixed-scope sprints, and a
              process built for founders who can&rsquo;t wait on procurement
              cycles.
            </p>

            <div className="animate-fade-in-up delay-300 mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openContactModal}
                className="btn-primary inline-flex items-center justify-center rounded-md px-6 py-3.5"
              >
                Get My Free MVP Estimate
              </button>
              <a
                href="#process"
                className="btn-secondary inline-flex items-center justify-center rounded-md px-6 py-3.5"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="animate-fade-in delay-200 relative">
            <div className="card-shadow relative aspect-[1504/950] overflow-hidden rounded-2xl">
              <Image
                src="/images/mvp-hero.jpg"
                alt="Founder holding up a notepad reading &quot;Start Up&quot;"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <TrustStrip />
      </div>
    </section>
  );
}
