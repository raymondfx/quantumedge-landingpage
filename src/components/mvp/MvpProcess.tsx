import { ChevronRight } from "lucide-react";
import Reveal from "../Reveal";

const STEPS = [
  {
    number: 1,
    title: "Kickoff Call",
    text: "We scope your MVP requirements and lock a fixed timeline — usually within days of our first call.",
  },
  {
    number: 2,
    title: "Build Sprint",
    text: "Senior engineers build in focused, visible sprints — you see progress every week, not at the end.",
  },
  {
    number: 3,
    title: "Ship & Iterate",
    text: "Launch to real users, then iterate fast based on what you learn — no long change-request cycles.",
  },
];

export default function MvpProcess() {
  return (
    <section id="process" className="relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            How It Works
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            From Spec to Shipped Product
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-start">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="flex flex-1 items-start gap-4">
              <span className="font-heading shrink-0 text-3xl font-bold text-navy">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-base leading-[1.4] text-muted">
                  {step.text}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <ChevronRight
                  className="mt-1 hidden shrink-0 text-navy/25 sm:block"
                  size={20}
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
