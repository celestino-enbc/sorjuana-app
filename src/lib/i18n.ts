// Simple i18n utilities without next-intl

import { routing } from './routing';

export const locales = routing.locales;
export type Locale = (typeof locales)[number];

export function getLocaleFromPath(pathname: string): string {
  const segment = pathname.split('/')[1];
  return locales.includes(segment as Locale) ? segment : routing.defaultLocale;
}