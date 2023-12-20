import { NodeKind } from "../Node";
import type { Whitespace } from "./Whitespace";

export function createWhitespace(): Whitespace {
  return { kind: NodeKind.Whitespace };
}
