"use client";

import Image from "next/image";
import { useContactModal } from "../ContactModalProvider";

export default function MvpHeader() {
  const { openContactModal } = useContactModal();

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex min-h-18 max-w-[1280px] items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo/icon.svg"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-navy sm:text-xl">
            QuantumEdge<span className="hidden sm:inline"> Technologies</span>
          </span>
        </div>

        <button
          onClick={openContactModal}
          className="btn-primary inline-flex shrink-0 items-center whitespace-nowrap rounded-md px-5 py-2.5"
        >
          <span className="sm:hidden">Free Estimate</span>
          <span className="hidden sm:inline">Get My Free MVP Estimate</span>
        </button>
      </div>
    </header>
  );
}
