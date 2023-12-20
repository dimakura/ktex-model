import { NodeKind } from "../Node";
import type { Punctuation, PunctuationKind } from "./Punctuation";

function punctuationFactory(kind: PunctuationKind): () => Punctuation {
  return function () {
    return { kind };
  };
}

export const createColon = punctuationFactory(NodeKind.Colon);
export const createComma = punctuationFactory(NodeKind.Comma);
export const createDot = punctuationFactory(NodeKind.Dot);
export const createExclamation = punctuationFactory(NodeKind.Exclamation);
export const createMdash = punctuationFactory(NodeKind.Mdash);
export const createNdash = punctuationFactory(NodeKind.Ndash);
export const createSemicolon = punctuationFactory(NodeKind.Semicolon);
export const createQuestion = punctuationFactory(NodeKind.Question);

export const createLParen = punctuationFactory(NodeKind.LParen);
export const createRParen = punctuationFactory(NodeKind.RParen);

export const createLBracket = punctuationFactory(NodeKind.LBracket);
export const createRBracket = punctuationFactory(NodeKind.RBracket);

export const createOpenQuote = punctuationFactory(NodeKind.OpenQuote);
export const createCloseQuote = punctuationFactory(NodeKind.CloseQuote);
export const createOpenQuote2 = punctuationFactory(NodeKind.OpenQuote2);
export const createCloseQuote2 = punctuationFactory(NodeKind.CloseQuote2);
