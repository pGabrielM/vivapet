/**
 * Currency helper for multi-language price formatting
 * Converts prices based on the current locale language
 */

export type CurrencyLocale = "pt" | "en" | "es";

export interface CurrencyConfig {
  symbol: string;
  code: string;
  locale: string;
  rate: number; // conversion rate from base price (BRL)
}

const currencyMap: Record<CurrencyLocale, CurrencyConfig> = {
  pt: {
    symbol: "R$",
    code: "BRL",
    locale: "pt-BR",
    rate: 1, // base currency
  },
  en: {
    symbol: "$",
    code: "USD",
    locale: "en-US",
    rate: 0.2, // approximate conversion rate BRL to USD
  },
  es: {
    symbol: "€",
    code: "EUR",
    locale: "es-ES",
    rate: 0.19, // approximate conversion rate BRL to EUR
  },
};

/**
 * Format price based on locale language
 * @param price - Price in Brazilian Real (base currency)
 * @param locale - Language locale (pt, en, es)
 * @returns Formatted price string with currency symbol
 */
export function formatCurrency(price: number, locale: CurrencyLocale): string {
  const config = currencyMap[locale] || currencyMap.pt;
  const convertedPrice = price * config.rate;

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedPrice);
}

/**
 * Get currency symbol for locale
 * @param locale - Language locale (pt, en, es)
 * @returns Currency symbol
 */
export function getCurrencySymbol(locale: CurrencyLocale): string {
  return currencyMap[locale]?.symbol || "R$";
}

/**
 * Get currency code for locale
 * @param locale - Language locale (pt, en, es)
 * @returns Currency code (BRL, USD, EUR)
 */
export function getCurrencyCode(locale: CurrencyLocale): string {
  return currencyMap[locale]?.code || "BRL";
}

/**
 * Convert price to target locale
 * @param price - Price in Brazilian Real
 * @param fromLocale - Source locale (defaults to pt)
 * @param toLocale - Target locale
 * @returns Converted price number
 */
export function convertPrice(
  price: number,
  fromLocale: CurrencyLocale = "pt",
  toLocale: CurrencyLocale
): number {
  const fromRate = currencyMap[fromLocale]?.rate || 1;
  const toRate = currencyMap[toLocale]?.rate || 1;

  // Convert from source currency to base (BRL)
  const basePrice = price / fromRate;

  // Convert from base to target currency
  return basePrice * toRate;
}
