"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BookOpen, CheckCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";

const stats = [
  { key: "years", icon: Award, colSpan: "col-span-2 md:col-span-1" },
  { key: "programs", icon: BookOpen, colSpan: "col-span-2 md:col-span-1" },
  { key: "official", icon: CheckCircle, colSpan: "col-span-2 md:col-span-1" },
  { key: "location", icon: MapPin, colSpan: "col-span-2 md:col-span-1" },
];

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section ref={ref} className="bg-white border-b border-neutral-light">
      <Container>
        <div className="grid grid-cols-4 gap-4 md:gap-8 py-8 md:py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${stat.colSpan} text-center`}
            >
              <div className="flex justify-center mb-2 md:mb-3">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              </div>
              <div className="flex justify-center items-baseline">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  className="text-display-1 md:text-display-2 text-primary-deep"
                >
                  {t(`trust.${stat.key}.value`)}
                </motion.span>
              </div>
              <p className="text-body-sm text-neutral-500 mt-1">
                {t(`trust.${stat.key}.label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}