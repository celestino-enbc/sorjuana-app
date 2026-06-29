# AGENTS.md - AI Collaboration Guide

This file provides context for AI assistants working on this codebase.

## Project Overview

**Instituto Sor Juana Inés de la Cruz** is a premium bilingual educational website built with Next.js 15. The site serves as a marketing landing page for a private high school in Tijuana, Mexico, founded in 1958.

## Key Principles

1. **Premium Quality**: The site should feel editorial, not corporate. Think Apple/Linear aesthetic.
2. **Bilingual First**: Both Spanish and English are first-class citizens. Never treat one as a "translation."
3. **Mobile-First**: Design for mobile, then enhance for desktop.
4. **Performance**: Maintain 60fps animations, fast load times.
5. **Accessibility**: WCAG 2.2 AA compliance.

## Architecture

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Custom i18n (React Context + localStorage)

### Key Files

| File | Purpose |
|------|---------|
| `src/app/[locale]/page.tsx` | Main page for each locale |
| `src/components/i18n-provider.tsx` | Translation context |
| `src/components/navigation.tsx` | Sticky nav with language switcher |
| `tailwind.config.ts` | Design tokens |

## Adding New Sections

1. Create component in `src/components/sections/`
2. Add translations to `i18n-provider.tsx` for both ES and EN
3. Import in `[locale]/page.tsx`
4. Ensure responsive design (mobile first)

## Translation Pattern

```tsx
// Get translations
const { t } = useI18n();

// Use in JSX
<h1>{t("section.title")}</h1>
```

## Animation Guidelines

- Use Framer Motion's `useInView` for scroll reveals
- Duration: 500-600ms for section reveals
- Easing: ease-out
- Stagger: 0.1s between items
- Never animate more than necessary

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Code Style

- TypeScript strict mode
- Use semantic HTML
- Prefer composition over duplication
- Keep components small and focused

## Common Tasks

### Adding a new FAQ
1. Add key to `faqItems` array in `faq.tsx`
2. Add translations in `i18n-provider.tsx`

### Adding a new program
1. Add to programs array in `programs.tsx`
2. Add translations for name, description, features

### Changing colors
1. Update `tailwind.config.ts` for design tokens
2. Update `globals.css` CSS variables

## Testing Checklist

- [ ] Spanish page loads correctly
- [ ] English page loads correctly
- [ ] Language switcher works
- [ ] All animations smooth (60fps)
- [ ] Mobile layout works
- [ ] No console errors
- [ ] Accessibility: keyboard navigation works

## Deployment

Vercel is recommended:
```bash
vercel deploy
```

Or static export:
```bash
npm run build
# Output in .next/
```