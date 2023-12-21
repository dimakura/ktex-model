import { expect, test } from "bun:test";

import { isLanguage } from "./isLanguage";

test("isLanguage", () => {
  expect(isLanguage("EN")).toBe(true);
  expect(isLanguage("RU")).toBe(true);
  expect(isLanguage("KA")).toBe(true);

  expect(isLanguage("ES")).toBe(false);
});
