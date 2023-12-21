import { type Node, NodeKind } from "../Node";

export interface Whitespace extends Node {
  kind: NodeKind.Whitespace;
}
