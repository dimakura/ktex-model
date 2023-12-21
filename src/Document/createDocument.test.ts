import { expect, test } from "bun:test";

import { NodeKind } from "../Node";
import { type Paragraph, createParagraph } from "../Paragraph";
import { createWord } from "../Word";
import { createDocument } from "./createDocument";

test("createDocument", () => {
  const para: Paragraph = createParagraph([createWord("Hello")]);

  expect(createDocument([para])).toEqual({
    kind: NodeKind.Document,
    blocks: [para],
  });
});
