export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "qe-cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function storeConsent(value: ConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value);
}

export function pushConsentUpdate(value: ConsentValue) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}
