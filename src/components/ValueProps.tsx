import { CircleDollarSign, Users, MessageCircle, Boxes } from "lucide-react";
import Reveal from "./Reveal";

const VALUES = [
  {
    icon: CircleDollarSign,
    title: "Outsourcing Economics",
    description:
      "Senior engineering talent at a fraction of onshore rates — without cutting corners on quality or code ownership.",
  },
  {
    icon: Users,
    title: "Vetted Senior Engineers",
    description:
      "Every engineer is senior-level and rigorously vetted — no juniors learning on your dime.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Collaboration",
    description:
      "Daily standups, shared tooling, and overlapping working hours — outsourced doesn't mean out of reach.",
  },
  {
    icon: Boxes,
    title: "Flexible Engagement",
    description:
      "Scale your team up or down as scope changes, with no long-term lock-in.",
  },
];

export default function ValueProps() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <value.icon size={40} strokeWidth={1.4} className="text-navy" />
              <h3 className="font-heading mt-5 text-xl font-semibold leading-[1.3] text-navy">
                {value.title}
              </h3>
              <p className="mt-2.5 text-base leading-[1.4] text-muted">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
