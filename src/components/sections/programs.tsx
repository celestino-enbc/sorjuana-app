"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";

const programs = ["preparatoria", "administracion", "contabilidad"];

export function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="programs"
      ref={ref}
      aria-labelledby="programs-title"
      className="section section-programs bg-white"
    >
      <Container className="section-programs__container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section__header section-programs__header"
        >
          <h2 id="programs-title" className="section__title section-programs__title">
            {t("programs.title")}
          </h2>
          <p className="section__subtitle section__subtitle--centered section-programs__subtitle">
            {t("programs.subtitle")}
          </p>
        </motion.header>

        <div className="section-programs__grid grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.article
              key={program}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-programs__card group relative bg-neutral-off-white rounded-lg overflow-hidden hover:shadow-level-2 transition-all duration-300"
            >
              <div className="section-programs__card-body p-6 md:p-8">
                <h3 className="section-programs__card-title text-h3 text-primary-deep mb-3 group-hover:text-accent transition-colors">
                  {t(`programs.${program}.name`)}
                </h3>
                <p className="section-programs__card-description text-body-sm text-neutral-500 mb-6">
                  {t(`programs.${program}.description`)}
                </p>

                <ul className="section-programs__features space-y-2 mb-6">
                  {[0, 1, 2].map((i) => (
                    <li
                      key={i}
                      className="section-programs__feature flex items-center gap-2 text-body-sm text-neutral-600"
                    >
                      <CheckCircle2 className="section-programs__feature-icon w-4 h-4 text-accent flex-shrink-0" />
                      {t(`programs.${program}.features.${i}`)}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="section-programs__card-cta w-full justify-between group-hover:text-accent"
                >
                  {t("programs.cta")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div
                className="section-programs__card-overlay absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
