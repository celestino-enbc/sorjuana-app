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
    <section id="programs" ref={ref} className="bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2 text-primary-deep mb-4">{t("programs.title")}</h2>
          <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
            {t("programs.subtitle")}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-neutral-off-white rounded-lg overflow-hidden hover:shadow-level-2 transition-all duration-300"
            >
              {/* Card Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-h3 text-primary-deep mb-3 group-hover:text-accent transition-colors">
                  {t(`programs.${program}.name`)}
                </h3>
                <p className="text-body-sm text-neutral-500 mb-6">
                  {t(`programs.${program}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-body-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {t(`programs.${program}.features.${i}`)}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Button variant="ghost" className="w-full justify-between group-hover:text-accent">
                  {t("programs.cta")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}