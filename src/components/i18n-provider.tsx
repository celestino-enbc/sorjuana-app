"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "es" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.programs": "Oferta Educativa",
    "nav.admissions": "Admisiones",
    "nav.contact": "Contacto",
    "hero.title": "Historia que construye.",
    "hero.subtitle": "Más de 65 años formando el futuro de Tijuana. Educación de calidad que transforma vidas.",
    "hero.cta.primary": "Solicitar Información",
    "hero.cta.secondary": "Conoce Más",
    "trust.years.value": "65+",
    "trust.years.label": "Años de experiencia",
    "trust.programs.value": "3",
    "trust.programs.label": "Programas",
    "trust.official.value": "100%",
    "trust.official.label": "Validación oficial",
    "trust.location.value": "Central",
    "trust.location.label": "Ubicación",
    "history.title": "Nuestra Historia",
    "history.year": "1958",
    "history.content": "Cuando Tijuana necesitaba una escuela que creyera en el poder de la educación, nacimos con una visión clara: formar profesionales con propósito.",
    "history.today": "Hoy, más de 65 generaciones después, continuamos evolucionando mientras honramos nuestras raíces.",
    "history.partner": "Desde 2022, nuestra alianza con Grupo Ferdel trae metodologías STEAM e innovación a nuestro probado modelo educativo.",
    "differentiators.title": "Qué nos diferencia",
    "differentiators.official.title": "Validación oficial",
    "differentiators.official.description": "Reconocimiento de la SEP para todos nuestros programas",
    "differentiators.career.title": "Enfoque profesional",
    "differentiators.career.description": "Carreras diseñadas para el mercado laboral actual",
    "differentiators.support.title": "Atención personalizada",
    "differentiators.support.description": "Seguimiento individual a cada estudiante",
    "differentiators.practical.title": "Aprendizaje práctico",
    "differentiators.practical.description": "Habilidades reales para tu futuro profesional",
    "differentiators.location.title": "Ubicación central",
    "differentiators.location.description": "Fácil acceso en el corazón de Tijuana",
    "differentiators.results.title": "Resultados comprobados",
    "differentiators.results.description": "Alta tasa de colocación universitaria",
    "programs.title": "Oferta Educativa",
    "programs.subtitle": "Programas que preparan para el futuro",
    "programs.preparatoria.name": "Preparatoria Tecnológica",
    "programs.preparatoria.description": "Formación académica de excelencia con enfoque en ciencias, tecnología e ingeniería.",
    "programs.preparatoria.features.0": "Enfoque STEAM",
    "programs.preparatoria.features.1": "Laboratorios equipados",
    "programs.preparatoria.features.2": "Preparación universitaria",
    "programs.administracion.name": "Administración",
    "programs.administracion.description": "Desarrolla habilidades de liderazgo y gestión empresarial.",
    "programs.administracion.features.0": "Gestión empresarial",
    "programs.administracion.features.1": "Liderazgo",
    "programs.administracion.features.2": "Planeación estratégica",
    "programs.contabilidad.name": "Contabilidad",
    "programs.contabilidad.description": "Domina las finanzas y la fiscalidad.",
    "programs.contabilidad.features.0": "Finanzas",
    "programs.contabilidad.features.1": "Fiscalidad",
    "programs.contabilidad.features.2": "Software especializado",
    "programs.cta": "Ver más detalles",
    "experience.title": "La Experiencia Sor Juana",
    "experience.subtitle": "Una comunidad que apoya tu crecimiento",
    "experience.description": "Clases pequeñas. Atención individual. Un camino claro hacia la universidad o directamente a tu carrera.",
    "admissions.title": "Proceso de Admisión",
    "admissions.subtitle": "Tu camino hacia Sor Juana",
    "admissions.steps.1.title": "Contacto inicial",
    "admissions.steps.1.description": "Solicita información o agenda una visita",
    "admissions.steps.2.title": "Entrevista",
    "admissions.steps.2.description": "Conoce a nuestro equipo y haz preguntas",
    "admissions.steps.3.title": "Evaluación",
    "admissions.steps.3.description": "Evaluación del estudiante",
    "admissions.steps.4.title": "Decisión",
    "admissions.steps.4.description": "Recibe la respuesta de admisión",
    "admissions.steps.5.title": "Inscripción",
    "admissions.steps.5.description": "Completa tu registro",
    "admissions.cta": "Iniciar proceso",
    "faq.title": "Preguntas Frecuentes",
    "faq.cost.question": "¿Cuál es el costo de la inscripción?",
    "faq.cost.answer": "Contáctanos para obtener información detallada sobre colegiaturas.",
    "faq.location.question": "¿Dónde está ubicada la escuela?",
    "faq.location.answer": "Estamos en una ubicación central en Tijuana.",
    "faq.schedule.question": "¿Cuáles son los horarios?",
    "faq.schedule.answer": "Nuestros horarios son de lunes a viernes.",
    "faq.transport.question": "¿Ofrecen transporte escolar?",
    "faq.transport.answer": "Contáctanos para conocer las opciones de transporte.",
    "cta.title": "Inicia la historia de tu hijo aquí",
    "cta.subtitle": "Únete a la siguiente generación de estudiantes Sor Juana.",
    "cta.button": "Solicitar Información",
    "cta.phone": "O llámanos",
    "footer.programs": "Programas",
    "footer.contact": "Contacto",
    "footer.location": "Ubicación",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.copyright": "Instituto Sor Juana Inés de la Cruz. Tijuana, Baja California, México.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.admissions": "Admissions",
    "nav.contact": "Contact",
    "hero.title": "History that builds.",
    "hero.subtitle": "More than 65 years shaping Tijuana's future. Quality education that transforms lives.",
    "hero.cta.primary": "Request Information",
    "hero.cta.secondary": "Learn More",
    "trust.years.value": "65+",
    "trust.years.label": "Years of experience",
    "trust.programs.value": "3",
    "trust.programs.label": "Programs",
    "trust.official.value": "100%",
    "trust.official.label": "Official validation",
    "trust.location.value": "Central",
    "trust.location.label": "Location",
    "history.title": "Our History",
    "history.year": "1958",
    "history.content": "When Tijuana needed a school that believed in the power of education, we were born with a clear vision.",
    "history.today": "Today, more than 65 generations later, we continue to evolve while honoring our roots.",
    "history.partner": "Since 2022, our partnership with Grupo Ferdel brings STEAM methodologies and innovation.",
    "differentiators.title": "What sets us apart",
    "differentiators.official.title": "Official Accreditation",
    "differentiators.official.description": "SEP recognition for all our programs",
    "differentiators.career.title": "Career Focused",
    "differentiators.career.description": "Degrees designed for today's job market",
    "differentiators.support.title": "Personalized Support",
    "differentiators.support.description": "Individual attention for each student",
    "differentiators.practical.title": "Practical Learning",
    "differentiators.practical.description": "Real skills for your future career",
    "differentiators.location.title": "Central Location",
    "differentiators.location.description": "Easy access in the heart of Tijuana",
    "differentiators.results.title": "Proven Results",
    "differentiators.results.description": "High university placement rate",
    "programs.title": "Educational Programs",
    "programs.subtitle": "Programs that prepare for the future",
    "programs.preparatoria.name": "Technological High School",
    "programs.preparatoria.description": "Excellence in academic training with focus on science, technology, and engineering.",
    "programs.preparatoria.features.0": "STEAM focus",
    "programs.preparatoria.features.1": "Equipped labs",
    "programs.preparatoria.features.2": "University preparation",
    "programs.administracion.name": "Administration",
    "programs.administracion.description": "Develop leadership and business management skills.",
    "programs.administracion.features.0": "Business management",
    "programs.administracion.features.1": "Leadership",
    "programs.administracion.features.2": "Strategic planning",
    "programs.contabilidad.name": "Accounting",
    "programs.contabilidad.description": "Master finance and taxation.",
    "programs.contabilidad.features.0": "Finance",
    "programs.contabilidad.features.1": "Taxation",
    "programs.contabilidad.features.2": "Specialized software",
    "programs.cta": "View more details",
    "experience.title": "The Sor Juana Experience",
    "experience.subtitle": "A community that supports your growth",
    "experience.description": "Small classes. Individual attention. A clear path to university or directly to your career.",
    "admissions.title": "Admission Process",
    "admissions.subtitle": "Your path to Sor Juana",
    "admissions.steps.1.title": "Initial Contact",
    "admissions.steps.1.description": "Request information or schedule a visit",
    "admissions.steps.2.title": "Interview",
    "admissions.steps.2.description": "Meet our team and ask questions",
    "admissions.steps.3.title": "Assessment",
    "admissions.steps.3.description": "Student evaluation",
    "admissions.steps.4.title": "Decision",
    "admissions.steps.4.description": "Receive admission decision",
    "admissions.steps.5.title": "Enrollment",
    "admissions.steps.5.description": "Complete your registration",
    "admissions.cta": "Start Process",
    "faq.title": "Frequently Asked Questions",
    "faq.cost.question": "What is the tuition cost?",
    "faq.cost.answer": "Contact us for detailed information about tuition and payment options.",
    "faq.location.question": "Where is the school located?",
    "faq.location.answer": "We are in a central location in Tijuana, easy to access.",
    "faq.schedule.question": "What are the school hours?",
    "faq.schedule.answer": "Our hours are Monday through Friday.",
    "faq.transport.question": "Do you offer transportation?",
    "faq.transport.answer": "Contact us to learn about transportation options.",
    "cta.title": "Start your child's story here",
    "cta.subtitle": "Join the next generation of Sor Juana students.",
    "cta.button": "Request Information",
    "cta.phone": "Or call us",
    "footer.programs": "Programs",
    "footer.contact": "Contact",
    "footer.location": "Location",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.copyright": "Instituto Sor Juana Inés de la Cruz. Tijuana, Baja California, Mexico.",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "es" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string): string => {
    return translations[locale][key as keyof typeof translations.es] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}