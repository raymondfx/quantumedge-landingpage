import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Script from "next/script";
import ContactModalProvider from "@/components/ContactModalProvider";
import ConsentProvider from "@/components/ConsentProvider";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-SFMZZGGZP5";

// Headings — matches the reference theme's "Inter Tight" heading font exactly.
const interTight = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Buttons, nav, small UI labels — the reference theme's plain "Inter" (distinct from
// its Helvetica body copy and Inter Tight headings).
const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Quantumedge Technologies Limited | Enterprise Software & AI Engineering",
  description:
    "Nairobi-based enterprise software and IT consultancy specializing in B2B business automation, enterprise AI integrations, and custom software systems for East Africa's growing enterprises.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        {/* Consent Mode v2 default: deny storage until the visitor accepts the
            cookie banner. Must run before gtag.js loads and before any config
            call, so this is `beforeInteractive` (Next.js always injects it
            into <head> regardless of where it's placed in the tree). */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ConsentProvider>
          <ContactModalProvider>{children}</ContactModalProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
