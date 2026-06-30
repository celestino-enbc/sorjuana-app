"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";

const experienceStats = [
  { key: "generations", value: "65+" },
  { key: "programs", value: "3" },
  { key: "support", value: "100%" },
] as const;

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-title"
      className="section section-experience bg-primary-deep text-white"
    >
      <Container className="section-experience__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-experience__intro section__content section__content--centered max-w-3xl"
        >
          <div className="section-experience__icon-wrapper inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Heart className="section-experience__icon w-8 h-8 text-accent" />
          </div>

          <h2 id="experience-title" className="section__title section__title--inverse section-experience__title mb-4">
            {t("experience.title")}
          </h2>
          <p className="section-experience__subtitle section__subtitle section__subtitle--inverse mb-6">
            {t("experience.subtitle")}
          </p>
          <p className="section-experience__description text-body-md text-white/60">
            {t("experience.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-experience__stats grid grid-cols-3 gap-8 mt-12 md:mt-16 max-w-2xl mx-auto"
        >
          {experienceStats.map((stat) => (
            <div key={stat.key} className="section-experience__stat text-center">
              <span className="section-experience__stat-value text-display-2 text-accent block">
                {stat.value}
              </span>
              <span className="section-experience__stat-label text-body-sm text-white/60">
                {t(`experience.stats.${stat.key}`)}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
