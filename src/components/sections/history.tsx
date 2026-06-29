"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";

export function History() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale } = useI18n();

  return (
    <section id="history" ref={ref} className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-off-white rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-deep/5 to-accent/5">
                <div className="text-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-display-1 text-accent font-display block"
                  >
                    {t("history.year")}
                  </motion.span>
                  <p className="text-body-sm text-neutral-500 mt-2">
                    {locale === "es" ? "Año de fundación" : "Year founded"}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-h2 text-primary-deep mb-6">{t("history.title")}</h2>
            <p className="text-body-lg text-neutral-600 mb-4">{t("history.content")}</p>
            <p className="text-body-md text-neutral-500 mb-6">{t("history.today")}</p>

            {/* Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-neutral-off-white px-4 py-3 rounded-lg"
            >
              <Handshake className="w-5 h-5 text-accent" />
              <span className="text-body-sm font-medium text-neutral-700">{t("history.partner")}</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}