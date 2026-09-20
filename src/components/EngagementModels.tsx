"use client";

import { Users, Clock, ClipboardCheck, FileCheck2, Lock, Server } from "lucide-react";
import Reveal from "./Reveal";
import { useContactModal } from "./ContactModalProvider";

const MODELS = [
  {
    icon: ClipboardCheck,
    title: "Fixed-Price Project",
    description:
      "A clearly scoped project delivered on a defined timeline and budget, start to finish.",
    bestFor: "Well-scoped projects with defined deliverables.",
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    description:
      "A team assigned exclusively to your roadmap — we manage delivery, you get shipped features every sprint.",
    bestFor: "Long-term product development and an ongoing roadmap.",
  },
  {
    icon: Clock,
    title: "Time & Materials",
    description:
      "Flexible ongoing development billed by time and effort, built and delivered by our team.",
    bestFor: "Evolving products where scope shifts as you learn.",
  },
];

const ASSURANCES = [
  { icon: FileCheck2, text: "NDA on First Call" },
  { icon: Lock, text: "You Own the IP" },
  { icon: Users, text: "Senior Engineers Only" },
  { icon: Server, text: "Weekly Progress Reports" },
];

export default function EngagementModels() {
  const { openContactModal } = useContactModal();

  return (
    <section id="engagement" className="relative scroll-mt-20 bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui inline-block rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            How To Engage Us
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            An Engagement Model That Fits How You Work
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 100}>
              <div className="card-shadow card-shadow-hover h-full rounded-2xl bg-white p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <model.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-heading mt-5 text-xl font-bold leading-[1.3] text-navy">
                  {model.title}
                </h3>
                <p className="mt-3 text-base leading-[1.4] text-muted">
                  {model.description}
                </p>
                <p className="mt-4 border-t border-border pt-4 text-sm font-medium text-navy/70">
                  <span className="text-accent">Best for:</span> {model.bestFor}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ASSURANCES.map((item) => (
              <span
                key={item.text}
                className="font-ui inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-navy"
              >
                <item.icon size={14} className="text-accent" />
                {item.text}
              </span>
            ))}
          </div>

          <button
            onClick={openContactModal}
            className="btn-primary inline-flex items-center justify-center rounded-lg px-8 py-3.5"
          >
            Talk to Our Team
          </button>
        </Reveal>
      </div>
    </section>
  );
}
