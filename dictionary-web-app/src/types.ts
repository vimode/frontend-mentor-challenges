export type Definition = { 
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  license: License;
  sourceUrls?: SourceUrls[]; 
}

type Phonetics = {
  text: string;
  audio?: string;
  sourceUrl?: SourceUrls;
  license?: License;
}

type Meanings = RelatedWords & {
  partOfSpeech: string;
  definitions: SpeechDefinition[];
}

type SpeechDefinition = RelatedWords & {
  definition: string;
  example?:string;
}

type RelatedWords = {
  synonyms:string[];
  antonyms: string[];
}

type License  = {
  name: string;
  url: string;
}

type SourceUrls = string;
