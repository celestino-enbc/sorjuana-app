import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { History } from "@/components/sections/history";
import { Differentiators } from "@/components/sections/differentiators";
import { Programs } from "@/components/sections/programs";
import { Experience } from "@/components/sections/experience";
import { Admissions } from "@/components/sections/admissions";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { FloatingWhatsApp } from "@/components/features/floating-whatsapp";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="site-main min-h-screen">
        <Hero />
        <TrustBar />
        <History />
        <Differentiators />
        <Programs />
        <Experience />
        <Admissions />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}