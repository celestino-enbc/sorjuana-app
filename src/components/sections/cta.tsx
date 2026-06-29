"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="contact" ref={ref} className="bg-accent text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-h2 mb-4">{t("cta.title")}</h2>
          <p className="text-body-lg text-white/80 mb-8">{t("cta.subtitle")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-accent hover:bg-neutral-off-white w-full sm:w-auto"
            >
              {t("cta.button")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="w-4 h-4" />
              <span className="text-body-sm">{t("cta.phone")}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}