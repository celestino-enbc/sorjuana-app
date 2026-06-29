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
    <section id="differentiators" ref={ref} className="bg-neutral-off-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2 text-primary-deep mb-4">{t("differentiators.title")}</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-level-1 hover:shadow-level-2 transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-h4 text-primary-deep mb-2">
                {t(`differentiators.${feature.key}.title`)}
              </h3>
              <p className="text-body-sm text-neutral-500">
                {t(`differentiators.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}