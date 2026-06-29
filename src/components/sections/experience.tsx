"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="experience" ref={ref} className="bg-primary-deep text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-h2 mb-4">{t("experience.title")}</h2>
          <p className="text-body-lg text-white/80 mb-6">{t("experience.subtitle")}</p>
          <p className="text-body-md text-white/60">{t("experience.description")}</p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mt-12 md:mt-16 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <span className="text-display-2 text-accent block">65+</span>
            <span className="text-body-sm text-white/60">Generaciones</span>
          </div>
          <div className="text-center">
            <span className="text-display-2 text-accent block">3</span>
            <span className="text-body-sm text-white/60">Programas</span>
          </div>
          <div className="text-center">
            <span className="text-display-2 text-accent block">100%</span>
            <span className="text-body-sm text-white/60">Apoyo</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}