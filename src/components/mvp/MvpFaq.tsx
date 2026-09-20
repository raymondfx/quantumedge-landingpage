import Reveal from "../Reveal";

const FAQS = [
  {
    question: "How fast can you start?",
    answer:
      "We can typically kick off within a few days of our first call, once scope is locked.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You do — full IP transfers to you as part of every engagement.",
  },
  {
    question: "Do you sign an NDA?",
    answer:
      "Yes, before we discuss any specifics of your product or roadmap.",
  },
  {
    question: "Do you work with pre-seed or bootstrapped startups?",
    answer:
      "Yes — we work with funded and bootstrapped founders alike, and scope something that fits your stage.",
  },
  {
    question: "What if my requirements change mid-build?",
    answer:
      "Fixed-scope sprints lock the current milestone, but we re-scope openly between sprints as you learn.",
  },
];

export default function MvpFaq() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Common Questions
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Before You Reach Out
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-b border-border">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 3) * 100} className="py-6">
              <h3 className="font-heading text-lg font-semibold text-navy">
                {faq.question}
              </h3>
              <p className="mt-2 text-base leading-[1.4] text-muted">
                {faq.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
