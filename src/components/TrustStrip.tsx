import { Star } from "lucide-react";

const METRICS = [
  { value: "10", unit: "Years", label: "Proven Track Record" },
  { value: "98", unit: "%", label: "Customer Satisfaction" },
  { value: "30", unit: "Projects", label: "We Have Completed" },
  { value: "3", unit: "Mins", label: "Average Answer Time" },
];

function ReviewBadge() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <div className="font-ui text-xs font-medium uppercase tracking-wide text-muted">
          Trusted by
        </div>
        <div className="mt-1.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="font-ui mt-1 text-sm font-semibold text-navy">
          Global clients
        </div>
      </div>
    </div>
  );
}

function Metric({ metric }: { metric: (typeof METRICS)[number] }) {
  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading text-[1.875rem] font-semibold leading-[1.2] text-navy">
          {metric.value}
        </span>
        {metric.unit && (
          <span className="font-heading text-xl font-semibold leading-[1.3] text-navy">
            {metric.unit}
          </span>
        )}
      </div>
      <div className="mt-1 text-base leading-[1.4] text-muted">
        {metric.label}
      </div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <div className="animate-fade-in-up delay-400 mt-16 border-t border-border py-8">
      {/* Desktop: one divided row — review badge + 4 metrics */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:divide-x lg:divide-border">
        <div className="pr-8">
          <ReviewBadge />
        </div>
        {METRICS.map((metric) => (
          <div key={metric.label} className="px-8">
            <Metric metric={metric} />
          </div>
        ))}
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="lg:hidden">
        <div className="border-b border-border pb-6">
          <ReviewBadge />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          {METRICS.map((metric) => (
            <Metric key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
}
