import type { Block } from "../Block";
import { type Node, NodeKind } from "../Node";

export interface Document extends Node {
  kind: NodeKind.Document;
  blocks: Block[];
}
