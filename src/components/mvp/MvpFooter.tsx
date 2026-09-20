"use client";

import Image from "next/image";
import Link from "next/link";
import { useConsent } from "../ConsentProvider";

export default function MvpFooter() {
  const year = new Date().getFullYear();
  const { reopenConsentBanner } = useConsent();

  return (
    <footer className="border-t border-border bg-navy">
      <div className="mx-auto max-w-[1280px] px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/icon.svg"
              alt=""
              width={24}
              height={24}
              className="h-5 w-5"
            />
            <span>
              &copy; {year} Quantumedge Technologies Limited &middot; Nairobi, Kenya
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-accent-soft transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent-soft transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={reopenConsentBanner}
              className="hover:text-accent-soft transition-colors"
            >
              Cookie Preferences
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
