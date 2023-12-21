export enum NodeKind {
  // document
  Document = "Document",

  // paragraph
  Paragraph = "Paragraph",

  // whitespace
  Whitespace = "Whitespace",

  // punctuations
  CloseQuote = "CloseQuote", // “ in KA
  CloseQuote2 = "CloseQuote2", // » in KA
  Colon = "Colon", // :
  Comma = "Comma", // ,
  Dot = "Dot", // .
  Exclamation = "Exclamation", // !
  LBracket = "LBracket", // [
  LParen = "LParen", // (
  Mdash = "Mdash", // ---
  Ndash = "Ndash", // --
  OpenQuote = "OpenQuote", // „ in KA
  OpenQuote2 = "OpenQuote2", // « in KA
  RParen = "RParen", // )
  RBracket = "RBracket", // ]
  Semicolon = "Semicolon", // ;
  Question = "Question", // ?

  // word
  Word = "Word",
}
