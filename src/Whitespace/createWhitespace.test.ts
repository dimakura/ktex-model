import { expect, test } from "bun:test";

import { NodeKind } from "../Node";
import { createWhitespace } from "./createWhitespace";

test("createWhitespace", () => {
  expect(createWhitespace().kind).toBe(NodeKind.Whitespace);
});
