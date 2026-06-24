// Shared data types for the Gateway tracker.

export type Profile = {
  id: string;
  name: string;
  intention: string; // why they're doing the work
  createdAt: string; // ISO date
};

export type Session = {
  id: string;
  profileId: string;
  tapeId: string;
  date: string; // ISO date-time of the session
  // Subjective ratings, 1–5
  relaxation: number; // how deeply the body relaxed
  vividness: number; // how vivid the experience was
  focusReached: number; // how well you reached/held the target state
  mood: number; // overall mood/wellbeing after
  // Structured experience flags
  experiences: string[]; // e.g. ["vibrations", "imagery", "contact"]
  // Free-form
  journal: string; // what happened
  insights: string; // your own takeaways from this sitting
  durationMin?: number; // actual minutes practiced
};

export type AppData = {
  profiles: Profile[];
  activeProfileId: string | null;
  sessions: Session[];
};

export const EXPERIENCE_OPTIONS = [
  "Deep body relaxation",
  "Reached the target Focus level",
  "Vibrations / energy sensations",
  "Floating / expansion / size change",
  "Vivid imagery or visions",
  "Insight / problem solved",
  "Emotional release",
  "Contact with a guide or being",
  "Non-verbal communication",
  "Separation from the body",
  "Sense of timelessness",
  "Fell asleep",
] as const;
