"use client";

import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/components/i18n-provider";

const programs = ["preparatoria", "administracion", "contabilidad"];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary-deep text-white">
      <Container>
        <div className="py-12 md:py-16 grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold mb-4">
              <GraduationCap className="w-8 h-8 text-accent" />
              <span>Instituto Sor Juana</span>
            </Link>
            <p className="text-body-sm text-white/60 max-w-sm mb-6">
              {t("footer.copyright")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-body-sm text-white/80">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Tijuana, Baja California, México</span>
              </div>
              <div className="flex items-center gap-3 text-body-sm text-white/80">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+52 (664) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-body-sm text-white/80">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@sorjuana.edu.mx</span>
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-body-sm font-semibold text-white mb-4">{t("footer.programs")}</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    href="#programs"
                    className="text-body-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {t(`programs.${program}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-body-sm font-semibold text-white mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#history"
                  className="text-body-sm text-white/60 hover:text-accent transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-body-sm text-white/60 hover:text-accent transition-colors"
                >
                  {t("nav.programs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#admissions"
                  className="text-body-sm text-white/60 hover:text-accent transition-colors"
                >
                  {t("nav.admissions")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-body-sm text-white/60 hover:text-accent transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-xs text-white/40">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-body-xs text-white/40 hover:text-white/60 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              className="text-body-xs text-white/40 hover:text-white/60 transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}