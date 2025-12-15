export enum PartType {
  SUBJECT = 'S',
  VERB = 'V',
  OBJECT = 'O',
  COMPLEMENT = 'C',
  MODIFIER = 'M',
  CONNECT = 'CONN', // Conjunctions, connectors
}

export interface GrammarPart {
  text: string;
  type: PartType;
  label?: string; // e.g., "誰が/は", "どうする"
  detail?: string; // e.g., "Place", "Time", "Reason"
  japanese?: string; // Translation for this specific part
  subParts?: GrammarPart[]; // For nested clauses like [1B] inside [1A]
}

export interface SentenceData {
  id: string;
  code: string; // e.g., "2F", "1A", "4N"
  fullText: string;
  parts: GrammarPart[];
  translation?: string; // Full sentence translation (optional backup)
}

export interface LessonData {
  id: string;
  title: string;       // e.g. "Lesson 5 Part 1"
  subtitle?: string;   // e.g. "Mt. Fuji and Heritage"
  description?: string;
  sentences: SentenceData[];
}

export const PART_LABELS: Record<PartType, string> = {
  [PartType.SUBJECT]: 'S (誰が/何が)',
  [PartType.VERB]: 'V (どうする)',
  [PartType.OBJECT]: 'O (何を/誰に)',
  [PartType.COMPLEMENT]: 'C (どんな/何)',
  [PartType.MODIFIER]: 'M (修飾語)',
  [PartType.CONNECT]: 'Connect (接/繋)',
};
