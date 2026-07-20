export const TESTER_INTENTS = [
  "Yes, I'd like to test it",
  "Maybe, send me updates first",
  "Not right now",
] as const;

export const WAITLIST_FIELD_LIMITS = {
  email: 254,
  currentTool: 120,
  pain: 1_000,
  testerIntent: 40,
  website: 200,
} as const;

export type TesterIntent = (typeof TESTER_INTENTS)[number];

export function isTesterIntent(value: string): value is TesterIntent {
  return TESTER_INTENTS.some((intent) => intent === value);
}
