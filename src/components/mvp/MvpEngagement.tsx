import { Zap, RefreshCw, FileCheck2, Lock, Users, Server } from "lucide-react";
import Reveal from "../Reveal";

const MODELS = [
  {
    icon: Zap,
    title: "Fixed-Scope Sprint",
    description:
      "A clearly defined MVP, built and delivered on a locked timeline and budget — no scope surprises.",
    bestFor: "Founders who know what they want to test.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Build Partner",
    description:
      "Flexible, ongoing development as your product and roadmap evolve after launch.",
    bestFor: "Post-launch iteration and fast-moving roadmaps.",
  },
];

const ASSURANCES = [
  { icon: FileCheck2, text: "NDA on First Call" },
  { icon: Lock, text: "You Own the IP" },
  { icon: Users, text: "Senior Engineers Only" },
  { icon: Server, text: "Weekly Progress Reports" },
];

export default function MvpEngagement() {
  return (
    <section id="engagement" className="relative scroll-mt-20 bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui inline-block rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            How We Engage
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Simple, Founder-Friendly Engagement
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
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

        <Reveal delay={200} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {ASSURANCES.map((item) => (
            <span
              key={item.text}
              className="font-ui inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-navy"
            >
              <item.icon size={14} className="text-accent" />
              {item.text}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
