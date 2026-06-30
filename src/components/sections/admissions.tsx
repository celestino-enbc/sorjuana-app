"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";
import { getWhatsAppUrl } from "@/lib/contact";

const steps = ["1", "2", "3", "4", "5"];

export function Admissions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale } = useI18n();

  return (
    <section
      id="admissions"
      ref={ref}
      aria-labelledby="admissions-title"
      className="section section-admissions bg-neutral-off-white"
    >
      <Container className="section-admissions__container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section__header section-admissions__header"
        >
          <h2 id="admissions-title" className="section__title section-admissions__title">
            {t("admissions.title")}
          </h2>
          <p className="section__subtitle section-admissions__subtitle">
            {t("admissions.subtitle")}
          </p>
        </motion.header>

        <ol className="section-admissions__timeline max-w-2xl mx-auto list-none p-0 m-0">
          {steps.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-admissions__step relative flex gap-4 pb-8 last:pb-0"
            >
              <div className="section-admissions__step-marker flex-shrink-0">
                <div className="section-admissions__step-number w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  {step}
                </div>
              </div>

              <div className="section-admissions__step-content pt-1">
                <h3 className="section-admissions__step-title text-h4 text-primary-deep mb-1">
                  {t(`admissions.steps.${step}.title`)}
                </h3>
                <p className="section-admissions__step-description text-body-sm text-neutral-500">
                  {t(`admissions.steps.${step}.description`)}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="section-admissions__step-connector absolute left-5 top-10 bottom-0 w-px bg-neutral-200"
                  aria-hidden="true"
                />
              )}
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="section-admissions__actions text-center mt-12"
        >
          <Button
            href={getWhatsAppUrl(locale)}
            external
            size="lg"
            className="section-admissions__cta"
          >
            {t("admissions.cta")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
