import { expect, test } from "bun:test";

import { NodeKind, createComma, createExclamation, createWhitespace, createWord } from "..";
import { createParagraph } from "./createParagraph";

test("createParagraph", () => {
  const p = createParagraph([
    createWord("Hello"),
    createComma(),
    createWhitespace(),
    createWord("world"),
    createExclamation(),
  ]); // Hello, world!

  expect(p.kind).toBe(NodeKind.Paragraph);
  expect(p.items).toHaveLength(5);
  expect(p.items[0].kind).toBe(NodeKind.Word);
  expect(p.items[1].kind).toBe(NodeKind.Comma);
  expect(p.items[2].kind).toBe(NodeKind.Whitespace);
  expect(p.items[3].kind).toBe(NodeKind.Word);
  expect(p.items[4].kind).toBe(NodeKind.Exclamation);
});
