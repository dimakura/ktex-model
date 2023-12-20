import { NodeKind } from "..";
import type { Paragraph, ParagraphItem } from "./Paragraph";

export function createParagraph(items: ParagraphItem[]): Paragraph {
  return {
    kind: NodeKind.Paragraph,
    items: [...items],
  };
}
