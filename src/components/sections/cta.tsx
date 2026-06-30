"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale } = useI18n();

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
      className="section section-contact bg-accent text-white"
    >
      <Container className="section-contact__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-contact__content section__content section__content--centered max-w-3xl"
        >
          <h2 id="contact-title" className="section__title section__title--inverse section-contact__title mb-4">
            {t("cta.title")}
          </h2>
          <p className="section-contact__subtitle section__subtitle section__subtitle--inverse mb-8">
            {t("cta.subtitle")}
          </p>

          <div className="section-contact__actions flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={getWhatsAppUrl(locale)}
              external
              variant="secondary"
              size="lg"
              className="section-contact__cta section-contact__cta--whatsapp bg-white text-accent hover:bg-neutral-off-white w-full sm:w-auto"
            >
              {t("cta.button")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="section-contact__phone flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="section-contact__phone-icon w-4 h-4" />
              <span className="section-contact__phone-text text-body-sm">
                {t("cta.phone")} {CONTACT.phone}
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
