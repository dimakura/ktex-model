import type { Language } from "./Language";

export function isLanguage(value: any): value is Language {
  if (typeof value !== "string") {
    return false;
  }

  value = value.toLowerCase();

  return value === "en" || value === "ru" || value === "ka";
}
