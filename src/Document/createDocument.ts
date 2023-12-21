import type { Document } from ".";
import type { Block } from "../Block";
import { NodeKind } from "../Node";

export function createDocument(blocks: Block[] = []): Document {
  return {
    kind: NodeKind.Document,
    blocks: [...blocks],
  };
}
