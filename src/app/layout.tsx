import type { Metadata } from "next";
import { Cormorant_Garamond, Proza_Libre } from "next/font/google";
import { I18nProvider } from "@/components/i18n-provider";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const prozaLibre = Proza_Libre({
  variable: "--font-proza-libre",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Instituto Sor Juana Inés de la Cruz | Educación de Calidad en Tijuana",
    template: "%s | Instituto Sor Juana Inés de la Cruz",
  },
  description:
    "Escuela privada en Tijuana desde 1958. Preparatoria tecnológica, administración y contabilidad. Educación de calidad que transforma vidas.",
  keywords: [
    "preparatoria Tijuana",
    "escuela privada Tijuana",
    "educación técnica Tijuana",
    "bachillerato",
    "Instituto Sor Juana",
  ],
  authors: [{ name: "Instituto Sor Juana Inés de la Cruz" }],
  creator: "Instituto Sor Juana Inés de la Cruz",
  publisher: "Instituto Sor Juana Inés de la Cruz",
  metadataBase: new URL("https://sorjuana.edu.mx"),
  icons: {
    icon: "/images/favicon_sorjuana.png",
    apple: "/images/favicon_sorjuana.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    siteName: "Instituto Sor Juana Inés de la Cruz",
    title: "Instituto Sor Juana Inés de la Cruz | Educación de Calidad en Tijuana",
    description:
      "Escuela privada en Tijuana desde 1958. Preparatoria tecnológica, administración y contabilidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Sor Juana Inés de la Cruz",
    description:
      "Más de 65 años formando el futuro de Tijuana. Educación de calidad que transforma vidas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${cormorantGaramond.variable} ${prozaLibre.variable} min-h-full antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}