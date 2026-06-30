"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n-provider";

const faqItems = ["cost", "location", "schedule", "transport", "food"];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section
      id="faq"
      ref={ref}
      aria-labelledby="faq-title"
      className="section section-faq bg-white"
    >
      <Container className="section-faq__container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section__header section-faq__header"
        >
          <h2 id="faq-title" className="section__title section-faq__title">
            {t("faq.title")}
          </h2>
        </motion.header>

        <div className="section-faq__accordion max-w-2xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="section-faq__item border-b border-neutral-light"
            >
              <button
                type="button"
                id={`faq-question-${item}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="section-faq__question w-full py-5 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${item}`}
              >
                <span className="section-faq__question-text text-body-md font-medium text-primary-deep pr-4">
                  {t(`faq.${item}.question`)}
                </span>
                <ChevronDown
                  className={cn(
                    "section-faq__question-icon w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${item}`}
                    role="region"
                    aria-labelledby={`faq-question-${item}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="section-faq__answer overflow-hidden"
                  >
                    <p className="section-faq__answer-text pb-5 text-body-sm text-neutral-500">
                      {t(`faq.${item}.answer`)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
