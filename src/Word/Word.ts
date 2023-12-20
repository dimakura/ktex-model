import { type Node, NodeKind } from "../Node";

export interface Word extends Node {
  kind: NodeKind.Word;
  text: string;
}
