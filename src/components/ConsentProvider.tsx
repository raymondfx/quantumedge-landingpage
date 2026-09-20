"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getStoredConsent,
  storeConsent,
  pushConsentUpdate,
  type ConsentValue,
} from "@/lib/consent";

type ConsentContextValue = {
  reopenConsentBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage isn't available during SSR, so whether to show the banner
    // can only be known once we're mounted in the browser.
    const stored = getStoredConsent();
    if (stored) {
      pushConsentUpdate(stored);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  const decide = (value: ConsentValue) => {
    storeConsent(value);
    pushConsentUpdate(value);
    setVisible(false);
  };

  return (
    <ConsentContext.Provider value={{ reopenConsentBanner: () => setVisible(true) }}>
      {children}

      {visible && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/10 bg-navy px-6 py-5 shadow-[0_-12px_28px_rgba(10,13,49,0.25)] sm:px-8"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-[1.5] text-white/80">
              We use cookies to measure site performance and understand how
              visitors use QuantumEdge. Read our{" "}
              <a href="/privacy" className="underline hover:text-accent-soft">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => decide("denied")}
                className="btn-secondary rounded-lg px-5 py-2.5 text-sm"
              >
                Reject
              </button>
              <button
                onClick={() => decide("granted")}
                className="btn-primary rounded-lg px-5 py-2.5 text-sm"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  );
}
