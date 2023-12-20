import type { Block } from "../Block";
import { NodeKind } from "../Node";

export function createDocument(blocks: Block[]) {
  return {
    kind: NodeKind.Document,
    blocks: [...blocks],
  };
}
