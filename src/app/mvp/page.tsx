import type { Metadata } from "next";
import MvpHeader from "@/components/mvp/MvpHeader";
import MvpHero from "@/components/mvp/MvpHero";
import MvpProcess from "@/components/mvp/MvpProcess";
import MvpEngagement from "@/components/mvp/MvpEngagement";
import CloudPartners from "@/components/CloudPartners";
import MvpFaq from "@/components/mvp/MvpFaq";
import MvpFinalCta from "@/components/mvp/MvpFinalCta";
import MvpFooter from "@/components/mvp/MvpFooter";

export const metadata: Metadata = {
  title: "Build Your MVP Fast | QuantumEdge Technologies",
  description:
    "Ship your startup's MVP in weeks, not months — senior engineers, fixed-scope sprints, and a founder-friendly process. Get a free estimate.",
  keywords: [
    "MVP development",
    "startup software development",
    "build MVP fast",
    "minimum viable product development company",
    "startup development agency",
    "hire a dev team for my startup",
  ],
};

export default function MvpPage() {
  return (
    <>
      <MvpHeader />
      <main className="flex-1">
        <MvpHero />
        <MvpProcess />
        <MvpEngagement />
        <CloudPartners />
        <MvpFaq />
        <MvpFinalCta />
      </main>
      <MvpFooter />
    </>
  );
}
