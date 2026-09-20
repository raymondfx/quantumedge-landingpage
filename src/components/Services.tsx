import { Code2, Rocket, Sparkles, Cloud, ShieldCheck, Handshake } from "lucide-react";
import Reveal from "./Reveal";

export const SOLUTIONS = [
  {
    id: "solution-custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Web, mobile, and backend systems built from scratch by senior engineers — architected to scale with your business.",
  },
  {
    id: "solution-product-engineering",
    icon: Rocket,
    title: "Product Engineering & MVP Development",
    description:
      "From requirements to a working product — we design, build, and ship MVPs and full-scale platforms end-to-end.",
  },
  {
    id: "solution-ai-automation",
    icon: Sparkles,
    title: "Enterprise AI & Workflow Automation",
    description:
      "From purchase-order processing to AI-assisted operations — we automate the manual work that slows your business down.",
  },
  {
    id: "solution-cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    description:
      "Cloud architecture, CI/CD, and infrastructure that keeps your systems fast, secure, and always available.",
  },
  {
    id: "solution-cyber-security",
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
  },
  {
    id: "solution-managed-support",
    icon: Handshake,
    title: "Managed Support & Maintenance",
    description:
      "Ongoing monitoring, updates, and support after launch — so your software keeps running long after we ship it.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-solutions-gradient relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <span className="font-ui inline-block rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            How We Help
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Software Development & IT Outsourcing Services
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 3) * 100}>
              <div
                id={solution.id}
                className="card-shadow flex h-full scroll-mt-28 flex-col rounded-2xl bg-white"
              >
                <div className="flex-1 p-8">
                  <solution.icon size={40} strokeWidth={1.5} className="text-accent" />
                  <h3 className="font-heading mt-5 text-xl font-bold leading-[1.3] text-navy">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.4] text-muted">
                    {solution.description}
                  </p>
                </div>
                <div className="border-t border-border px-8 py-5">
                  <a
                    href="#contact"
                    className="font-ui text-sm font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center rounded-lg px-8 py-3.5"
          >
            View All Solutions
          </a>
        </Reveal>
      </div>
    </section>
  );
}
