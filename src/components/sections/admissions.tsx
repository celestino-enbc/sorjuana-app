"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";

const steps = ["1", "2", "3", "4", "5"];

export function Admissions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="admissions" ref={ref} className="bg-neutral-off-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2 text-primary-deep mb-4">{t("admissions.title")}</h2>
          <p className="text-body-lg text-neutral-500">{t("admissions.subtitle")}</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  {step}
                </div>
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="text-h4 text-primary-deep mb-1">
                  {t(`admissions.steps.${step}.title`)}
                </h3>
                <p className="text-body-sm text-neutral-500">
                  {t(`admissions.steps.${step}.description`)}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px bg-neutral-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg">
            {t("admissions.cta")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}