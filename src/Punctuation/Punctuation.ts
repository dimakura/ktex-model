import { type Node, NodeKind } from "../Node";

export type PunctuationKind =
  | NodeKind.CloseQuote
  | NodeKind.CloseQuote2
  | NodeKind.Colon
  | NodeKind.Comma
  | NodeKind.Dot
  | NodeKind.Exclamation
  | NodeKind.LBracket
  | NodeKind.LParen
  | NodeKind.Mdash
  | NodeKind.Ndash
  | NodeKind.OpenQuote
  | NodeKind.OpenQuote2
  | NodeKind.Question
  | NodeKind.RBracket
  | NodeKind.RParen
  | NodeKind.Semicolon;

export interface Punctuation extends Node {
  kind: PunctuationKind;
}
