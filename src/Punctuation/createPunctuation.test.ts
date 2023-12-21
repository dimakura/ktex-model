import { expect, test } from "bun:test";

import {
  createCloseQuote,
  createCloseQuote2,
  createColon,
  createComma,
  createDot,
  createExclamation,
  createLBracket,
  createLParen,
  createMdash,
  createNdash,
  createOpenQuote,
  createOpenQuote2,
  createQuestion,
  createRBracket,
  createRParen,
  createSemicolon,
} from "./createPunctuation";

test("Punctuation", () => {
  const punctuations = [
    createCloseQuote,
    createCloseQuote2,
    createColon,
    createComma,
    createDot,
    createExclamation,
    createLBracket,
    createLParen,
    createMdash,
    createNdash,
    createOpenQuote,
    createOpenQuote2,
    createQuestion,
    createRBracket,
    createRParen,
    createSemicolon,
  ].map((fn) => fn().kind.toString());

  expect(punctuations).toEqual([
    "CloseQuote",
    "CloseQuote2",
    "Colon",
    "Comma",
    "Dot",
    "Exclamation",
    "LBracket",
    "LParen",
    "Mdash",
    "Ndash",
    "OpenQuote",
    "OpenQuote2",
    "Question",
    "RBracket",
    "RParen",
    "Semicolon",
  ]);
});
