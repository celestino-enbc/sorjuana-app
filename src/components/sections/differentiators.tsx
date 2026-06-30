"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Target, Users, Wrench, MapPin, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";

const features = [
  { key: "official", icon: Award },
  { key: "career", icon: Target },
  { key: "support", icon: Users },
  { key: "practical", icon: Wrench },
  { key: "location", icon: MapPin },
  { key: "results", icon: TrendingUp },
];

export function Differentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="differentiators"
      ref={ref}
      aria-labelledby="differentiators-title"
      className="section section-differentiators bg-neutral-off-white"
    >
      <Container className="section-differentiators__container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section__header section-differentiators__header"
        >
          <h2 id="differentiators-title" className="section__title section-differentiators__title">
            {t("differentiators.title")}
          </h2>
        </motion.header>

        <div className="section-differentiators__grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-differentiators__card bg-white p-6 md:p-8 rounded-lg shadow-level-1 hover:shadow-level-2 transition-shadow duration-300"
            >
              <div className="section-differentiators__card-icon w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="section-differentiators__card-title text-h4 text-primary-deep mb-2">
                {t(`differentiators.${feature.key}.title`)}
              </h3>
              <p className="section-differentiators__card-description text-body-sm text-neutral-500">
                {t(`differentiators.${feature.key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
