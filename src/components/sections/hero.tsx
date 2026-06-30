"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";
import { getWhatsAppUrl } from "@/lib/contact";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale } = useI18n();

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hero"
      className={cn(
        "section-hero",
        "relative min-h-screen flex items-center overflow-hidden bg-primary-deep"
      )}
    >
      <div className="section-hero__background absolute inset-0" aria-hidden="true">
        <Image
          src={BRAND.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="section-hero__image object-cover object-[70%_center] md:object-right"
        />
        <div className="section-hero__overlay section-hero__overlay--horizontal absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/55 to-primary-deep/15" />
        <div className="section-hero__overlay section-hero__overlay--vertical absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-primary-deep/20" />
      </div>

      <Container className="section-hero__container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="section-hero__content max-w-2xl text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-hero__eyebrow overline text-white/70 mb-4 md:mb-6"
          >
            Instituto Sor Juana Inés de la Cruz • 1958
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-hero__title text-display-1 text-white mb-6 md:mb-8 text-balance"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-hero__subtitle text-body-lg md:text-body-xl text-white/85 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-hero__actions flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <Button
              href={getWhatsAppUrl(locale)}
              external
              size="lg"
              className="section-hero__cta section-hero__cta--primary w-full sm:w-auto"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="#programs" className="section-hero__cta-link w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="section-hero__cta section-hero__cta--secondary w-full border-white text-white hover:bg-white/10 hover:border-white"
              >
                {t("hero.cta.secondary")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="section-hero__scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="section-hero__scroll-track w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="section-hero__scroll-thumb w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
