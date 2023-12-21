import { expect, test } from "bun:test";

import { NodeKind } from "../Node";
import { createWord } from "./createWord";

test("createWord", () => {
  const word = createWord("hello");

  expect(word.kind).toBe(NodeKind.Word);
  expect(word.text).toBe("hello");
});
