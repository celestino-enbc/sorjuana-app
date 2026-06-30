export const CONTACT = {
  phone: "+52 664 688 1388",
  phoneTel: "+526646881388",
  whatsapp: "526646881388",
  whatsappUrl: "https://wa.me/526646881388",
  email: "info@sorjuana.edu.mx",
  address: {
    es: "Av. Miguel F. Martínez 1292, Centro, 22000 Tijuana, B.C., México",
    en: "Av. Miguel F. Martínez 1292, Centro, 22000 Tijuana, B.C., Mexico",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Miguel+F.+Mart%C3%ADnez+1292,+Centro,+22000+Tijuana,+B.C.,+Mexico",
} as const;

export function getWhatsAppUrl(locale: "es" | "en" = "es"): string {
  const message =
    locale === "es"
      ? "Hola, me gustaría obtener información sobre el Instituto Sor Juana Inés de la Cruz."
      : "Hello, I would like to request information about Instituto Sor Juana Inés de la Cruz.";

  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
