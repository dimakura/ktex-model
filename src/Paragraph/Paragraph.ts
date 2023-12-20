import type { Punctuation, Whitespace, Word } from "..";
import type { Node, NodeKind } from "../Node";

export type ParagraphItem = Whitespace | Punctuation | Word;

export interface Paragraph extends Node {
  kind: NodeKind.Paragraph;
  items: ParagraphItem[];
}
