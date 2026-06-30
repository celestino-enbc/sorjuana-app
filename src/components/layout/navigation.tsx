"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n-provider";
import { getWhatsAppUrl } from "@/lib/contact";

const navLinks = [
  { href: "#history", key: "about" },
  { href: "#programs", key: "programs" },
  { href: "#admissions", key: "admissions" },
  { href: "#contact", key: "contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "en" : "es";
    setLocale(newLocale);
  };

  const isOverHero = !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-level-1"
          : "bg-transparent"
      )}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center font-display font-bold">
          <BrandLogo priority variant={isOverHero ? "white" : "default"} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                isOverHero
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-500 hover:text-primary-deep"
              )}
            >
              {t(`nav.${link.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className={cn(
              "text-sm font-semibold transition-colors flex items-center gap-1",
              isOverHero
                ? "text-white/80 hover:text-white"
                : "text-neutral-500 hover:text-primary-deep"
            )}
            aria-label="Switch language"
          >
            <span className={cn(locale === "es" && "text-accent")}>ES</span>
            <span className={cn(isOverHero ? "text-white/40" : "text-neutral-300")}>
              |
            </span>
            <span className={cn(locale === "en" && "text-accent")}>EN</span>
          </button>

          {/* CTA Button */}
          <Button
            href={getWhatsAppUrl(locale)}
            external
            size="sm"
            className="hidden md:inline-flex"
          >
            {t("hero.cta.primary")}
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2",
              isOverHero ? "text-white" : "text-primary-deep"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-neutral-light"
          >
            <div className="container-main py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-primary-deep py-2 border-b border-neutral-light"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
              <Button
                href={getWhatsAppUrl(locale)}
                external
                className="w-full mt-2"
              >
                {t("hero.cta.primary")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}