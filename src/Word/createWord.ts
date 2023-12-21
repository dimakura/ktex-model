import { NodeKind } from "../Node";
import type { Word } from "./Word";

export function createWord(text: string): Word {
  return {
    kind: NodeKind.Word,
    text,
  };
}
