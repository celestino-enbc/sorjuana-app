# Instituto Sor Juana Inés de la Cruz - Official Website

A premium bilingual landing page for Instituto Sor Juana Inés de la Cruz, a private educational institution in Tijuana, Mexico, founded in 1958.

## 🌐 Live Demo

- **Spanish**: http://localhost:3000/es
- **English**: http://localhost:3000/en
- **GitHub**: https://github.com/celestino-enbc/sorjuana-app

## ✨ Features

### Core
- **Full Bilingual Support**: Spanish (Mexico) and English (United States)
- **Responsive Design**: Mobile-first, works on all devices
- **Premium Typography**: Cormorant Garamond (titles), Proza Libre (body)
- **Smooth Animations**: Framer Motion for scroll reveals and microinteractions
- **Accessibility**: WCAG 2.2 AA considerations

### Sections
1. **Hero**: Animated headline with gradient orbs
2. **Trust Bar**: 4 key statistics (65+ years, 3 programs, 100% official, central location)
3. **History**: 1958 founding story with Grupo Ferdel partnership
4. **Differentiators**: 6 feature cards (Official, Career-focused, Support, Practical, Location, Results)
5. **Programs**: Preparatoria Tecnológica, Administración, Contabilidad
6. **Experience**: Dark section with community stats
7. **Admissions**: 5-step timeline process
8. **FAQ**: Accordion with common questions
9. **Final CTA**: Contact section
10. **Footer**: Contact info and navigation

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: Custom provider with localStorage persistence

## 📁 Project Structure

```
sorjuana-app/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   └── page.tsx          # Locale page (/es, /en)
│   │   ├── globals.css          # Global styles + Tailwind
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Redirect to /es
│   ├── components/
│   │   ├── features/
│   │   │   └── floating-whatsapp.tsx
│   │   ├── i18n-provider.tsx    # Custom i18n context
│   │   ├── layout/
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── sections/
│   │   │   ├── admissions.tsx
│   │   │   ├── cta.tsx
│   │   │   ├── differntiators.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── faq.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── history.tsx
│   │   │   ├── programs.tsx
│   │   │   └── trust-bar.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── container.tsx
│   ├── lib/
│   │   ├── i18n.ts              # i18n utilities
│   │   ├── routing.ts           # Locale routing config
│   │   └── utils.ts            # Utility functions
│   ├── messages/
│   │   ├── es.json              # Spanish translations
│   │   └── en.json              # English translations
│   └── middleware.ts          # Locale routing middleware
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/celestino-enbc/sorjuana-app.git
cd sorjuana-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Black | #050504 | Darkest backgrounds, body text |
| Shadow Grey | #2A2827 | Headings, navigation, secondary |
| Olive Leaf | #0C5C02 | CTAs, highlights, accents |
| Accent Hover | #094A02 | Button hover |
| Snow | #FDF7F9 | Main backgrounds, cards |
| Bright Snow | #FCF9F6 | Section backgrounds, muted surfaces |

### Typography

| Font | Usage | Weights |
|------|-------|---------|
| Cormorant Garamond | Headlines, display, titles | 400-700 |
| Proza Libre | Body text, UI | 400-700 |

### Type Scale

| Level | Desktop | Mobile |
|-------|---------|--------|
| display-1 | 80px | 40px |
| display-2 | 72px | 36px |
| h1 | 56px | 32px |
| h2 | 44px | 28px |
| h3 | 32px | 24px |
| body-md | 16px | 15px |

### Spacing Scale

| Token | Value |
|-------|-------|
| xs | 8px |
| md | 16px |
| lg | 24px |
| 2xl | 48px |
| 4xl | 80px |
| 5xl | 120px |

### Components

#### Button
- **Primary**: bg-accent, white text, hover lift
- **Secondary**: Transparent, border, hover fill
- **Sizes**: sm (h-10), md (h-12), lg (h-14)

#### Container
- **Default**: max-w-content (1280px)
- **Narrow**: max-w-narrow (800px)
- **Paddings**: 16px mobile, 40px tablet, 80px desktop

#### Card
- Border-radius: 16px
- Shadow: level-1 (default), level-2 (hover)
- Padding: 24px-32px

## 🌍 Internationalization

### How It Works

The i18n system uses React Context with localStorage persistence:

```tsx
// Using the provider
import { useI18n } from "@/components/i18n-provider";

function MyComponent() {
  const { locale, setLocale, t } = useI18n();
  
  return (
    <button onClick={() => setLocale("en")}>
      {t("hero.cta.primary")}
    </button>
  );
}
```

### Adding Translations

1. Edit `src/components/i18n-provider.tsx`
2. Add keys to both `es` and `en` objects:

```tsx
es: {
  "section.key": "Spanish translation",
},
en: {
  "section.key": "English translation",
}
```

### Language Switcher

Located in the navigation bar. Clicking toggles between ES | EN instantly. Language preference is saved to localStorage.

### URL Structure

- `/es` - Spanish (default)
- `/en` - English

## 🎬 Animations

### Scroll Reveals

Using Framer Motion's `useInView`:

```tsx
const { useInView } from "framer-motion";

function Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    />
  );
}
```

### Microinteractions

- **Buttons**: Scale to 1.02 on hover
- **Cards**: Lift -4px on hover
- **Links**: Underline expand from left

### Timing

| Animation | Duration | Easing |
|-----------|----------|--------|
| Quick hover | 150ms | ease |
| Standard | 200ms | ease |
| Page load | 500ms | ease-out |
| Scroll reveal | 600ms | ease-out |

## ♿ Accessibility

### Implemented
- Semantic HTML (nav, main, section, footer)
- Focus visible states (2px ring)
- Skip to main content link
- ARIA labels for icons
- Reduced motion support via `prefers-reduced-motion`
- Touch targets: 44px minimum

### Color Contrast
- All text meets 4.5:1 ratio
- Links meet 3:1 ratio on backgrounds

## 🔧 Configuration

### Tailwind

Custom theme in `tailwind.config.ts`:
- Colors
- Typography scale
- Spacing scale
- Border radius
- Shadows

### Next.js

Config in `next.config.ts`:
- Image optimization
- Static export (if needed)

### Middleware

Locale routing in `middleware.ts`:
- Redirects / to /es
- Preserves locale in URL

## 📱 Responsive Breakpoints

| Name | Width | Target |
|------|-------|--------|
| xs | < 375px | Small mobile |
| sm | 375-639px | Mobile |
| md | 640-1023px | Tablet |
| lg | 1024-1279px | Desktop |
| xl | 1280-1535px | Large desktop |
| 2xl | 1536px+ | Ultra-wide |

## 🚦 SEO

### Meta Tags
- Title: Instituto Sor Juana Inés de la Cruz | Educación de Calidad en Tijuana
- Description: Escuela privada en Tijuana desde 1958...
- Keywords: preparatoria Tijuana, escuela privada, educación técnica

### Open Graph
- Title, description, locale (es_MX, en_US)
- Twitter card: summary_large_image

## 📝 Adding Content

### New Section

1. Create component in `src/components/sections/`
2. Add translations to i18n-provider
3. Import and add to `[locale]/page.tsx`

### New Program

1. Add to programs array in `programs.tsx`
2. Add translations for name, description, features

### New FAQ Item

1. Add key to faqItems array in `faq.tsx`
2. Add translations for question and answer

## 🔐 Environment Variables

Create `.env.local`:

```env
# Not required for basic setup
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📄 License

Private - All rights reserved by Instituto Sor Juana Inés de la Cruz

## 👏 Credits

- **Institution**: Instituto Sor Juana Inés de la Cruz, Tijuana
- **Founded**: 1958
- **Programs**: Preparatoria Tecnológica, Administración, Contabilidad
- **Partner**: Grupo Ferdel (STEAM methodologies since 2022)

---

Built with Next.js, Tailwind CSS, and Framer Motion.