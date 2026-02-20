import type { Lang } from "./language-context"

type Translations = Record<string, Record<Lang, string>>

export const ui: Translations = {
  // Navbar
  "nav.analysis": { en: "Analysis", es: "Analisis" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.blog": { en: "Blog", es: "Blog" },

  // Hero
  "hero.title.line1": { en: "Tactical Intelligence", es: "Inteligencia Tactica" },
  "hero.title.line2": { en: "Through Data", es: "A Traves de los Datos" },
  "hero.subtitle": {
    en: "Independent advanced football analytics. Breaking down elite performance through spatial metrics, match context, and data-driven evaluation.",
    es: "Analitica avanzada de futbol independiente. Desglosando el rendimiento de elite a traves de metricas espaciales, contexto de partido y evaluacion basada en datos.",
  },
  "hero.cta.analysis": { en: "View Analysis", es: "Ver Analisis" },
  "hero.cta.get": { en: "Get Analysis", es: "Solicitar Analisis" },

  // Institutional Strip
  "strip.main": {
    en: "INDEPENDENT TACTICAL & DATA INTELLIGENCE",
    es: "INTELIGENCIA TACTICA Y DE DATOS INDEPENDIENTE",
  },
  "strip.spatial": { en: "SPATIAL METRICS", es: "METRICAS ESPACIALES" },
  "strip.match": { en: "MATCH CONTEXT", es: "CONTEXTO DE PARTIDO" },
  "strip.performance": { en: "PERFORMANCE EVALUATION", es: "EVALUACION DE RENDIMIENTO" },

  // Analysis Section
  "analysis.title.prefix": { en: "Latest", es: "Ultimos" },
  "analysis.title.accent": { en: "Analysis", es: "Analisis" },
  "analysis.subtitle": {
    en: "In-depth tactical and data-driven football intelligence",
    es: "Inteligencia futbolistica tactica y basada en datos en profundidad",
  },
  "analysis.viewAll": { en: "View All Analysis", es: "Ver Todos los Analisis" },
  "analysis.empty": {
    en: "No analysis found for this category yet.",
    es: "Aun no hay analisis para esta categoria.",
  },

  // CTA Section
  "cta.title.prefix": { en: "Need this level of", es: "Necesita este nivel de" },
  "cta.title.accent": { en: "analysis", es: "analisis" },
  "cta.title.suffix": { en: "?", es: "?" },
  "cta.description": {
    en: "From individual player reports to full tactical breakdowns and recruitment metrics, get bespoke data intelligence tailored to your team or organization.",
    es: "Desde informes individuales de jugadores hasta desgloses tacticos completos y metricas de reclutamiento, obtenga inteligencia de datos a medida para su equipo u organizacion.",
  },
  "cta.button": { en: "Contact for Projects", es: "Contactar para Proyectos" },

  // Footer
  "footer.description": {
    en: "Independent tactical and data intelligence for the modern game.",
    es: "Inteligencia tactica y de datos independiente para el futbol moderno.",
  },

  // Contact Page
  "contact.back": { en: "Back to Home", es: "Volver al Inicio" },
  "contact.title.prefix": { en: "Get in", es: "Ponte en" },
  "contact.title.accent": { en: "Touch", es: "Contacto" },
  "contact.description": {
    en: "Interested in bespoke tactical analysis, player evaluation reports, or data consulting? Fill out the form below and we will get back to you.",
    es: "Interesado en analisis tactico personalizado, informes de evaluacion de jugadores o consultoria de datos? Complete el formulario a continuacion y nos pondremos en contacto.",
  },
  "contact.name": { en: "Name", es: "Nombre" },
  "contact.name.placeholder": { en: "Your name", es: "Tu nombre" },
  "contact.email": { en: "Email", es: "Correo electronico" },
  "contact.email.placeholder": { en: "your@email.com", es: "tu@email.com" },
  "contact.organization": { en: "Organization", es: "Organizacion" },
  "contact.organization.placeholder": {
    en: "Club, agency, or company name",
    es: "Nombre del club, agencia o empresa",
  },
  "contact.message": { en: "Message", es: "Mensaje" },
  "contact.message.placeholder": {
    en: "Describe your project or analysis needs...",
    es: "Describe tu proyecto o necesidades de analisis...",
  },
  "contact.submit": { en: "Send Message", es: "Enviar Mensaje" },
  "contact.success.title": { en: "Message Sent", es: "Mensaje Enviado" },
  "contact.success.description": {
    en: "Thank you for reaching out. We will review your inquiry and respond within 48 hours.",
    es: "Gracias por contactarnos. Revisaremos tu consulta y responderemos en un plazo de 48 horas.",
  },
  "contact.success.button": { en: "Back to Home", es: "Volver al Inicio" },

  // Analysis Listing Page
  "listing.back": { en: "Back to Home", es: "Volver al Inicio" },
  "listing.title.prefix": { en: "All", es: "Todos los" },
  "listing.title.accent": { en: "Analysis", es: "Analisis" },
  "listing.description": {
    en: "Complete archive of tactical reports, player evaluations, match breakdowns, and data-driven insights.",
    es: "Archivo completo de informes tacticos, evaluaciones de jugadores, desgloses de partidos e ideas basadas en datos.",
  },

  // Analysis Detail Page
  "detail.backToAnalysis": { en: "Back to Analysis", es: "Volver a Analisis" },
  "detail.readingTime": { en: "min read", es: "min de lectura" },
  "detail.executiveSummary": { en: "Executive Summary", es: "Resumen Ejecutivo" },
  "detail.tacticalConclusion": { en: "Tactical Conclusion", es: "Conclusion Tactica" },

  // Blog
  "blog.back": { en: "Back to Home", es: "Volver al Inicio" },
  "blog.title.prefix": { en: "Blog", es: "Blog" },
  "blog.description": {
    en: "Articles and updates from Analityka XG.",
    es: "Articulos y actualizaciones de Analityka XG.",
  },
  "blog.empty": { en: "No posts yet.", es: "Aun no hay entradas." },
  "blog.backToBlog": { en: "Back to Blog", es: "Volver al Blog" },
}
