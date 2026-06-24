// Eight-Wave consciousness program — complete exercise catalog.
// Content distilled from the publicly shared Waves I–VIII materials,
// the Discovery/Threshold manuals, and the declassified Gateway Analysis.
// Each tape carries the Focus level it works in, the core
// technique, preparation tips, and "takeaway readings" — the key things to
// remember and carry forward from the exercise.

export type Tape = {
  id: string; // stable slug, e.g. "w1-1"
  wave: number;
  waveTitle: string;
  number: number; // tape number within the wave
  title: string;
  focus: string; // Focus level(s) this tape works in
  duration: number; // approximate minutes
  audioFile: string; // original filename in the Gateway folder (for reference / optional player)
  summary: string;
  technique: string[]; // the steps / what you actually do
  tips: string[]; // preparation & in-session guidance
  takeaways: string[]; // "what to remember" — readings to carry forward
};

export type Wave = {
  number: number;
  title: string;
  subtitle: string;
  blurb: string;
};

export const WAVES: Wave[] = [
  {
    number: 1,
    title: "Discovery",
    subtitle: "Focus 10 — Mind Awake / Body Asleep",
    blurb:
      "The foundation. You learn to relax the body completely while keeping the mind fully alert, building the energy tools you will use for everything that follows.",
  },
  {
    number: 2,
    title: "Threshold",
    subtitle: "Focus 12 — Expanded Awareness",
    blurb:
      "Awareness expands beyond the physical senses. You learn problem solving, patterning (intention setting), and to direct and feel energy deliberately.",
  },
  {
    number: 3,
    title: "Freedom",
    subtitle: "Focus 12 — Perception & Separation",
    blurb:
      "Reaching out with non-physical perception: remote viewing, working with vectors, asking questions of the higher self, and first experiences of separation.",
  },
  {
    number: 4,
    title: "Adventure",
    subtitle: "Focus 12 — Free Flow & Conversion",
    blurb:
      "Long-range patterning, free-flow exploration in expanded awareness, and Non-Verbal Communication (NVC) — receiving meaning beyond words.",
  },
  {
    number: 5,
    title: "Exploring Focus 15",
    subtitle: "Focus 15 — The State of No Time",
    blurb:
      "Developing intuition and entering Focus 15, a profound still point outside of time used for creation, manifestation, and deep inner work.",
  },
  {
    number: 6,
    title: "Odyssey",
    subtitle: "Focus 21 — The Bridge",
    blurb:
      "Exploring Locale I and II, meeting non-physical friends and guides, and crossing into Focus 21 — the edge of other energy systems and realities.",
  },
  {
    number: 7,
    title: "Voyager",
    subtitle: "Focus 23 & 25 — Belief System Territories",
    blurb:
      "Venturing into Focus 23 (those who have recently left physical life) and Focus 25 (the belief system territories) as a conscious explorer.",
  },
  {
    number: 8,
    title: "Union",
    subtitle: "Focus 27 — The Reception Center & Beyond",
    blurb:
      "A guided tour of Focus 27 — the Park / Reception Center — its healing, planning and educational centers, the Inner Earth, and movement toward the Absolute.",
  },
];

export const TAPES: Tape[] = [
  // ────────────────────────────── WAVE I ──────────────────────────────
  {
    id: "w1-1",
    wave: 1,
    waveTitle: "Discovery",
    number: 1,
    title: "Orientation",
    focus: "Focus 3 (binaural) → Focus 10 preview",
    duration: 35,
    audioFile: "Wave I - Discovery/CD1 - 1 - Orientation.flac",
    summary:
      "Your introduction to the binaural-beat audio. You learn the Energy Conversion Box, the Resonant Tuning breath, the Resonant Energy Balloon (REBAL), and the Affirmation — the core tools every later exercise rests on.",
    technique: [
      "Energy Conversion Box: visualize a container, place every worry and distraction inside, close the lid. You can retrieve them later — for now they are set aside.",
      "Resonant Tuning: breathe deeply and sound a tone (aloud or internally) on the exhale to charge the body with energy and vibration.",
      "Resonant Energy Balloon (REBAL): draw energy up through the body and form a protective, energizing field of light around you.",
      "Recite the Gateway Affirmation to set intention for the work.",
    ],
    tips: [
      "Use headphones — the binaural beat depends on each ear receiving a slightly different tone.",
      "Lie down somewhere you won't be disturbed; loosen tight clothing; aim for a cool, dark room.",
      "Don't try to make anything happen. Your only job is to relax and let the signals do the work.",
      "Repeat this tape until the four tools feel automatic before moving on — the whole Wave is built on them.",
    ],
    takeaways: [
      "The Energy Conversion Box is your reset button: anything that intrudes goes in the box.",
      "The binaural beat guides the brain into synchrony; you cooperate, you don't force.",
      "The REBAL is both protection and a battery — it shows up again and again.",
      "Memorize the Affirmation. It is the contract you make with your own deeper self.",
    ],
  },
  {
    id: "w1-2",
    wave: 1,
    waveTitle: "Discovery",
    number: 2,
    title: "Introduction to Focus 10",
    focus: "Focus 10 — Mind Awake / Body Asleep",
    duration: 35,
    audioFile: "Wave I - Discovery/CD1 - 2 - Introduction to Focus 10.flac",
    summary:
      "The single most important state in the entire program. You learn to let the body fall completely asleep while the mind stays clear, awake, and alert.",
    technique: [
      "Run through your preparatory process: Box, Resonant Tuning, Affirmation.",
      "Following the guidance, relax each part of the body in turn until the body is profoundly still — 'asleep'.",
      "Keep the mind bright and observing. Notice the difference between a relaxed body and a relaxed mind.",
      "Anchor the state so you can return to it on cue.",
    ],
    tips: [
      "Tingling, heaviness, floating, or feeling very large/small are all normal Focus 10 signs — welcome them.",
      "If you fall asleep, that's fine at first; with practice the mind learns to stay awake.",
      "Don't judge the depth of your state. Consistency matters more than intensity.",
    ],
    takeaways: [
      "Focus 10 = body asleep, mind awake. Everything else is built on reaching it reliably.",
      "The body's signals (numbness, warmth, expansion) are confirmation, not distraction.",
      "You can re-enter Focus 10 anytime by recalling the feeling, not just by playing the tape.",
    ],
  },
  {
    id: "w1-3",
    wave: 1,
    waveTitle: "Discovery",
    number: 3,
    title: "Advanced Focus 10",
    focus: "Focus 10",
    duration: 35,
    audioFile: "Wave I - Discovery/CD2 - 3 - Advanced Focus 10.flac",
    summary:
      "Deepening and stabilizing Focus 10 and learning to move into and hold it more quickly and on your own, with less reliance on verbal guidance.",
    technique: [
      "Enter Focus 10 using your established cues.",
      "Practice deepening: let the body grow heavier and the mind clearer with each breath.",
      "Explore holding the state during longer stretches of silence.",
      "Practice returning to full awareness cleanly (C1 consciousness).",
    ],
    tips: [
      "Try reaching Focus 10 before the tape tells you to — build independence.",
      "Use the silence. The gaps are where your own experience happens.",
      "Note how quickly you can drop in; track it across sessions.",
    ],
    takeaways: [
      "Speed and stability come from repetition, not effort.",
      "The silences are the actual practice — the voice just sets the stage.",
      "A clean return to C1 is part of the skill: come back fully present.",
    ],
  },
  {
    id: "w1-4",
    wave: 1,
    waveTitle: "Discovery",
    number: 4,
    title: "Release and Recharge",
    focus: "Focus 10",
    duration: 35,
    audioFile: "Wave I - Discovery/CD2 - 4 - Release and Recharge.flac",
    summary:
      "Emotional housekeeping. You deliberately release held fears, anxieties and tensions, then recharge with fresh energy — clearing the channel for deeper work.",
    technique: [
      "In Focus 10, identify a fear, worry, or emotional charge you are carrying.",
      "Let it surface fully, then consciously release it on the exhale.",
      "Draw in clean energy on the inhale to fill the space the release left.",
      "Repeat with whatever else arises.",
    ],
    tips: [
      "Emotions may rise strongly — that is the point. Let them move through and out.",
      "Don't analyze the fear; just feel it and let it go.",
      "If something big surfaces, work it again on later replays.",
    ],
    takeaways: [
      "Releasing fear is not suppression — you feel it fully, then let it leave.",
      "Every release makes room; always recharge to fill the space.",
      "Unreleased emotional charge is the most common block to deeper states.",
    ],
  },
  {
    id: "w1-5",
    wave: 1,
    waveTitle: "Discovery",
    number: 5,
    title: "Exploration, Sleep",
    focus: "Focus 10",
    duration: 45,
    audioFile: "Wave I - Discovery/CD3 - 5 - Exploration, Sleep.flac",
    summary:
      "Free exploration of Focus 10 followed by a guided transition into restorative sleep — learning to use the state to improve the quality of your rest.",
    technique: [
      "Enter Focus 10 and explore freely with no agenda.",
      "Observe whatever sensations, images, or impressions arise.",
      "When guided, allow the state to deepen into natural, refreshing sleep.",
    ],
    tips: [
      "Best done at night — you can let yourself drift off at the end.",
      "Keep a notebook nearby; note impressions the instant you wake.",
      "Approach with curiosity, not expectation.",
    ],
    takeaways: [
      "Focus 10 can become a doorway into deeper, more restorative sleep.",
      "Free exploration teaches your unique signs and signals.",
      "What seems like 'nothing happening' is often the state itself stabilizing.",
    ],
  },
  {
    id: "w1-6",
    wave: 1,
    waveTitle: "Discovery",
    number: 6,
    title: "Free Flow 10",
    focus: "Focus 10",
    duration: 35,
    audioFile: "Wave I - Discovery/CD3 - 6 - Free Flow 10.flac",
    summary:
      "Extended unstructured time in Focus 10 to consolidate everything in Wave I and discover what the state offers you personally.",
    technique: [
      "Drop into Focus 10 on your own cues.",
      "Use any tool you've learned — REBAL, release, recharge — as you feel moved.",
      "Spend the long silence simply being in the state and noticing.",
    ],
    tips: [
      "This is your graduation from Wave I — aim to enter Focus 10 quickly and unaided.",
      "Set a gentle intention beforehand if you like, then let go of it.",
      "Don't rush to Wave II until Focus 10 feels like home.",
    ],
    takeaways: [
      "Free Flow is where the state becomes yours rather than the tape's.",
      "Mastery of Focus 10 is the gate to all later Waves — don't skip ahead.",
      "Trust subtle impressions; the signal is often quiet at first.",
    ],
  },

  // ────────────────────────────── WAVE II ──────────────────────────────
  {
    id: "w2-1",
    wave: 2,
    waveTitle: "Threshold",
    number: 1,
    title: "Introduction to Focus 12",
    focus: "Focus 12 — Expanded Awareness",
    duration: 35,
    audioFile: "Wave II - Threshold/CD1 - 1 - Introduction to Focus 12.flac",
    summary:
      "Stepping up from Focus 10 into Focus 12, a state of expanded awareness where perception reaches beyond the ordinary physical senses.",
    technique: [
      "Reach Focus 10, then follow the count up into Focus 12.",
      "Deliberately expand your awareness outward in all directions.",
      "Practice holding the wider, more open state.",
      "Return cleanly through Focus 10 to C1.",
    ],
    tips: [
      "Focus 12 feels 'bigger' than Focus 10 — more space, more openness.",
      "Master entering Focus 12 reliably before using it for tasks.",
      "Expansion is an act of intention, not strain.",
    ],
    takeaways: [
      "Focus 12 = expanded awareness; your perceptual field opens beyond the body.",
      "Each higher Focus is reached by passing through the ones below it.",
      "Hold the state first; the applications come once it's stable.",
    ],
  },
  {
    id: "w2-2",
    wave: 2,
    waveTitle: "Threshold",
    number: 2,
    title: "Problem Solving",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave II - Threshold/CD1 - 2 - Problem Solving.flac",
    summary:
      "Using expanded awareness to solve real problems — presenting a question to your deeper mind and receiving insight beyond ordinary reasoning.",
    technique: [
      "Before the session, choose one clear problem or question.",
      "In Focus 12, present the problem simply and then let go of it.",
      "Remain open and receptive; accept whatever impressions arrive.",
      "Record everything afterward, even fragments.",
    ],
    tips: [
      "State the problem as a clear question, then stop working on it.",
      "Answers may come as images, words, feelings, or later 'aha' moments.",
      "Don't force a solution in-session; insight often surfaces hours later.",
    ],
    takeaways: [
      "Pose the question, then release it — receptivity beats effort.",
      "Solutions arrive in many forms; keep the channel open and judgment off.",
      "Write impressions down immediately; they fade like dreams.",
    ],
  },
  {
    id: "w2-3",
    wave: 2,
    waveTitle: "Threshold",
    number: 3,
    title: "One-Month Patterning",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave II - Threshold/CD2 - 3 - One-Month Patterning.flac",
    summary:
      "Patterning is conscious manifestation: in expanded awareness you vividly picture and emotionally feel a desired outcome for the coming month, planting it as a pattern.",
    technique: [
      "Choose a realistic goal for the next ~30 days.",
      "In Focus 12, picture it as already accomplished, in rich detail.",
      "Feel the emotion of having it — the feeling is what gives the pattern power.",
      "Release the pattern outward and let it go.",
    ],
    tips: [
      "Pattern for what you genuinely want, stated positively and in the present.",
      "Emotion and vividness matter more than words.",
      "Then detach — clinging undoes the pattern. Trust and act normally.",
    ],
    takeaways: [
      "Patterning = vivid image + genuine emotion + release.",
      "State goals as already-true and in the present tense.",
      "After patterning, let go completely and stay open to how it arrives.",
    ],
  },
  {
    id: "w2-4",
    wave: 2,
    waveTitle: "Threshold",
    number: 4,
    title: "Color Breathing",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave II - Threshold/CD2 - 4 - Color Breathing.flac",
    summary:
      "An energy and healing technique: you breathe in specific colors and direct them through the body to vitalize, balance, and heal.",
    technique: [
      "In Focus 12, choose a color associated with the energy you need.",
      "Inhale the color, drawing it into the body and to any area needing attention.",
      "Exhale used or stagnant energy as a dull or dark color.",
      "Cycle through colors as guided.",
    ],
    tips: [
      "Let colors arise intuitively — your system often knows what it needs.",
      "Direct color to areas of tension, pain, or low energy.",
      "Combine with the REBAL to amplify the effect.",
    ],
    takeaways: [
      "Breath + color + intention is a complete self-healing tool.",
      "Inhale vitalizing color; exhale what's spent or stuck.",
      "Trust the color your intuition offers over any 'correct' chart.",
    ],
  },
  {
    id: "w2-5",
    wave: 2,
    waveTitle: "Threshold",
    number: 5,
    title: "Energy Bar Tool",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave II - Threshold/CD3 - 5 - Energy Bar Tool.flac",
    summary:
      "You build a tool of pure energy — a glowing bar you charge, shape, and use to direct energy for healing, clearing, and exploration.",
    technique: [
      "In Focus 12, gather energy and form it into a bar of light between your hands.",
      "Charge the bar by drawing in more energy until it feels vivid and real.",
      "Use it to scan, clear, or send energy where intended.",
      "Store the tool for future use.",
    ],
    tips: [
      "Make the bar as tactile as possible — see it, feel its weight and charge.",
      "The Energy Bar Tool recurs in later Waves; build it well now.",
      "Recharge it whenever it feels depleted.",
    ],
    takeaways: [
      "Energy follows intention and takes whatever form you give it.",
      "The Energy Bar Tool is reusable — keep and recharge it.",
      "Vividness makes energy tools effective; engage all inner senses.",
    ],
  },
  {
    id: "w2-6",
    wave: 2,
    waveTitle: "Threshold",
    number: 6,
    title: "Living Body Map",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave II - Threshold/CD3 - 6 - Living Body Map.flac",
    summary:
      "A diagnostic and healing exercise: you create an inner map of your body to sense its condition and direct energy toward health and balance.",
    technique: [
      "In Focus 12, form a detailed inner image of your whole body.",
      "Scan it for areas that feel dim, tense, painful, or 'off'.",
      "Direct energy (with color or the Energy Bar) to those areas.",
      "See the map brighten into balance and health.",
    ],
    tips: [
      "Make the body map vivid and alive, not a flat diagram.",
      "Trust the spots that draw your attention — the body communicates this way.",
      "Use this map for ongoing self-care between formal sessions.",
    ],
    takeaways: [
      "Your body broadcasts its state; the Body Map lets you read it.",
      "Combine scanning with energy direction for self-healing.",
      "Revisit the map regularly as a wellness check-in.",
    ],
  },

  // ────────────────────────────── WAVE III ──────────────────────────────
  {
    id: "w3-1",
    wave: 3,
    waveTitle: "Freedom",
    number: 1,
    title: "Lift Off",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave III - Freedom/CD1 - 1 - Lift Off.flac",
    summary:
      "Preparing for non-physical movement: you practice the sensations of lifting away from the body while remaining safe and grounded in Focus 12.",
    technique: [
      "Stabilize Focus 12 with a strong REBAL.",
      "Use intention and imagery to feel yourself lift, float, or expand upward.",
      "Notice movement-related sensations (vibrations, floating, spinning).",
      "Return gently to the body.",
    ],
    tips: [
      "There is nothing to fear — you are always connected and in control.",
      "Vibrations are a normal precursor to separation; relax into them.",
      "Use intention, not muscular effort, to move.",
    ],
    takeaways: [
      "Non-physical movement is driven by intention, not the body.",
      "Vibrational sensations are a green light, not a warning.",
      "A strong REBAL keeps the experience safe and bounded.",
    ],
  },
  {
    id: "w3-2",
    wave: 3,
    waveTitle: "Freedom",
    number: 2,
    title: "Remote Viewing",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave III - Freedom/CD1 - 2 - Remote Viewing.flac",
    summary:
      "Perceiving a distant or hidden target with the mind. You learn to send awareness to a location and gather impressions without physical presence.",
    technique: [
      "Pick a target ahead of time (a place, an object, a sealed image).",
      "In Focus 12, direct your awareness to the target.",
      "Record raw impressions — shapes, textures, colors, feelings — without interpreting.",
      "Check against the real target afterward.",
    ],
    tips: [
      "Capture the first, faint impression — it is usually the true signal.",
      "Don't analyze or name things mid-session; that invites the imagination.",
      "Use blind targets so you can honestly verify hits.",
    ],
    takeaways: [
      "The first impression is the signal; analysis is the noise.",
      "Record sensory data, not conclusions.",
      "Verification with blind targets builds real, earned confidence.",
    ],
  },
  {
    id: "w3-3",
    wave: 3,
    waveTitle: "Freedom",
    number: 3,
    title: "Vectors",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave III - Freedom/CD2 - 3 - Vectors.flac",
    summary:
      "Learning to aim awareness with precision. A vector is a directed line of intention you use to point your perception toward any chosen target.",
    technique: [
      "In Focus 12, establish a clear point of intention.",
      "Project a vector — a line or arrow of awareness — toward a target or question.",
      "Follow the vector and observe what it brings back.",
      "Practice aiming vectors in different directions.",
    ],
    tips: [
      "Think of a vector as both direction and purpose combined.",
      "Keep the aim clear and simple; precision sharpens the result.",
      "Vectors are the steering wheel for later journeys.",
    ],
    takeaways: [
      "A vector = direction + intention; it's how you aim perception.",
      "Clarity of aim determines clarity of result.",
      "This steering skill underlies all later non-physical exploration.",
    ],
  },
  {
    id: "w3-4",
    wave: 3,
    waveTitle: "Freedom",
    number: 4,
    title: "Five Questions",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave III - Freedom/CD2 - 4 - Five Questions.flac",
    summary:
      "A structured dialogue with your higher self or Total Self. You pose five life questions in expanded awareness and receive guidance.",
    technique: [
      "Prepare five sincere questions about your life and direction beforehand.",
      "In Focus 12, ask each question and pause to receive.",
      "Accept the answer in whatever form it comes.",
      "Record each response immediately after.",
    ],
    tips: [
      "Ask what genuinely matters to you, not test questions.",
      "Leave real silence after each question for the answer to form.",
      "Answers may be symbolic; sit with them afterward.",
    ],
    takeaways: [
      "Your higher self answers sincere questions sincerely asked.",
      "Give each question space — don't rush to the next.",
      "Symbolic answers often carry the deepest meaning; reflect later.",
    ],
  },
  {
    id: "w3-5",
    wave: 3,
    waveTitle: "Freedom",
    number: 5,
    title: "Energy Food",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave III - Freedom/CD3 - 5 - Energy Food.flac",
    summary:
      "Learning to draw nourishment directly from energy — taking in vitality from your surroundings and the wider energy field to recharge yourself.",
    technique: [
      "In Focus 12, open yourself to the energy around and above you.",
      "Draw that energy in and let it nourish and recharge your whole system.",
      "Feel yourself filled, vitalized, and replenished.",
      "Seal it in with your REBAL.",
    ],
    tips: [
      "Imagine 'feeding' on light or vitality the way the body feeds on food.",
      "Use this whenever you feel drained, physically or emotionally.",
      "Pair with Color Breathing for a stronger effect.",
    ],
    takeaways: [
      "You can recharge directly from energy, not only from rest and food.",
      "Intention opens the intake; the REBAL seals it.",
      "Energy nourishment is a practical tool for daily depletion.",
    ],
  },
  {
    id: "w3-6",
    wave: 3,
    waveTitle: "Freedom",
    number: 6,
    title: "First Stage Separation",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave III - Freedom/CD3 - 6 - First Stage Separation.flac",
    summary:
      "A gentle first taste of separating awareness from the physical body — extending a hand or part of yourself beyond your physical form.",
    technique: [
      "In a deep, stable Focus 12, use intention to extend awareness beyond the body.",
      "Try reaching out with a non-physical 'hand' or floating slightly free.",
      "Notice sensations without grabbing at them.",
      "Settle gently back into the body.",
    ],
    tips: [
      "Small, partial experiences are real successes — don't demand full separation.",
      "Relax; tension and over-eagerness pull you back instantly.",
      "Feeling 'doubled' or stretched is normal and safe.",
    ],
    takeaways: [
      "Separation begins partial and subtle — honor the small steps.",
      "Relaxed allowing, not effort, is what frees awareness.",
      "You remain safe and connected at all times.",
    ],
  },

  // ────────────────────────────── WAVE IV ──────────────────────────────
  {
    id: "w4-1",
    wave: 4,
    waveTitle: "Adventure",
    number: 1,
    title: "One Year Patterning",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave IV - Adventure/CD1 - 1 - One Year Patterning.flac",
    summary:
      "Long-range manifestation. You pattern a vision for the year ahead — bigger and farther out than the one-month patterning of Wave II.",
    technique: [
      "Choose a meaningful vision for the next year.",
      "In Focus 12, build it vividly and feel it as already realized.",
      "Charge it with strong, genuine emotion.",
      "Release it fully into the larger field.",
    ],
    tips: [
      "Think bigger here — a year gives room for substantial change.",
      "Revisit and re-pattern periodically to keep it energized.",
      "Stay detached from the 'how'; allow surprising routes.",
    ],
    takeaways: [
      "Long-range patterning sets direction for major life movement.",
      "Vividness + emotion + release still apply at every scale.",
      "Detach from the mechanism; trust the outcome to find its way.",
    ],
  },
  {
    id: "w4-2",
    wave: 4,
    waveTitle: "Adventure",
    number: 2,
    title: "Five Messages",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave IV - Adventure/CD1 - 2 - Five Messages.flac",
    summary:
      "Receiving rather than asking. You open to five messages from your higher self or guides — guidance that comes unbidden when you make space for it.",
    technique: [
      "In Focus 12, set the intention to receive, then become quiet.",
      "Allow up to five messages to arrive without prompting.",
      "Accept whatever comes — words, images, feelings, knowings.",
      "Record each message right away.",
    ],
    tips: [
      "This is listening, not asking — resist the urge to direct.",
      "Don't reject a message because it seems small or odd.",
      "Reflect on the messages over the following days.",
    ],
    takeaways: [
      "Receiving is a distinct skill from asking — practice pure listening.",
      "Guidance often arrives unbidden once you stop pushing.",
      "Honor every message; meaning may unfold with time.",
    ],
  },
  {
    id: "w4-3",
    wave: 4,
    waveTitle: "Adventure",
    number: 3,
    title: "Free Flow 12",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave IV - Adventure/CD2 - 3 - Free Flow 12.flac",
    summary:
      "Open, unstructured exploration of Focus 12, consolidating your expanded-awareness skills and discovering what the state holds for you.",
    technique: [
      "Enter and stabilize Focus 12 on your own cues.",
      "Explore freely — use vectors, ask, receive, or simply observe.",
      "Follow whatever draws your attention.",
      "Return cleanly and record the journey.",
    ],
    tips: [
      "Bring a loose intention, then surrender the agenda.",
      "Let the experience lead; you are exploring, not performing.",
      "Compare Free Flow 12 with Free Flow 10 — note the difference.",
    ],
    takeaways: [
      "Free Flow makes Focus 12 your own working space.",
      "Surrender within structure: prepared, then open.",
      "Your unstructured sessions reveal your natural strengths.",
    ],
  },
  {
    id: "w4-4",
    wave: 4,
    waveTitle: "Adventure",
    number: 4,
    title: "NVC I — Non-Verbal Communication",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave IV - Adventure/CD2 - 4 - NVC I.flac",
    summary:
      "Introduction to communication beyond words — receiving and sending whole meanings, feelings, and knowings directly, without language.",
    technique: [
      "In Focus 12, quiet the verbal mind.",
      "Open to receive a complete thought or feeling transmitted whole.",
      "Practice sending a simple non-verbal packet in return.",
      "Notice how meaning arrives faster than words.",
    ],
    tips: [
      "Let go of translating into sentences — receive the whole 'package'.",
      "NVC feels like sudden knowing or felt sense, not narration.",
      "Don't dismiss instant impressions as imagination.",
    ],
    takeaways: [
      "Non-verbal communication conveys whole meaning at once.",
      "The verbal mind is a filter; quieting it opens the channel.",
      "Trust felt knowings — they are the native language of these states.",
    ],
  },
  {
    id: "w4-5",
    wave: 4,
    waveTitle: "Adventure",
    number: 5,
    title: "NVC II — Non-Verbal Communication",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave IV - Adventure/CD3 - 5 - NVC II.flac",
    summary:
      "Deepening non-verbal communication — clearer, richer exchanges and more confident sending and receiving of meaning beyond language.",
    technique: [
      "Re-enter Focus 12 and settle into the NVC state.",
      "Engage in fuller non-verbal exchange, receiving more complex meaning.",
      "Practice deliberate two-way communication.",
      "Record the felt content afterward, translating only after the fact.",
    ],
    tips: [
      "Build on NVC I; expect subtler, richer transmissions.",
      "Translate to words only afterward, for your notes.",
      "Confidence grows with verification over time.",
    ],
    takeaways: [
      "NVC deepens with practice into genuine two-way exchange.",
      "Capture the experience first; verbalize it second.",
      "This is the communication mode used with guides and other intelligences.",
    ],
  },
  {
    id: "w4-6",
    wave: 4,
    waveTitle: "Adventure",
    number: 6,
    title: "Compoint (Conversion Point)",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave IV - Adventure/CD3 - 6 - Compoint.flac",
    summary:
      "Establishing your personal Conversion Point — a stable reference 'home base' in expanded awareness you can return to as an anchor for exploration.",
    technique: [
      "In Focus 12, establish a clear, stable point of reference.",
      "Make it vivid and familiar — your conversion point / home base.",
      "Practice leaving from and returning to it.",
      "Fix it firmly so it's instantly recallable.",
    ],
    tips: [
      "Treat the Compoint as a launch pad and a safe return point.",
      "The stronger and more familiar it is, the freer you can roam.",
      "Return to it any time you feel disoriented in a session.",
    ],
    takeaways: [
      "A stable home base makes bold exploration safe.",
      "The Compoint is both departure point and anchor.",
      "Always know you can return to your reference point instantly.",
    ],
  },

  // ────────────────────────────── WAVE V ──────────────────────────────
  {
    id: "w5-1",
    wave: 5,
    waveTitle: "Exploring Focus 15",
    number: 1,
    title: "Advanced Focus 12",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave V - Exploring Focus 15/CD1 - 1 - Advanced Focus 12.flac",
    summary:
      "Strengthening and refining Focus 12 to a high degree of stability — the launch platform for entering the deeper state of Focus 15.",
    technique: [
      "Enter Focus 12 quickly and hold it with ease.",
      "Refine stability and clarity over longer silences.",
      "Practice subtle control of the depth of the state.",
      "Prepare the ground for the count into Focus 15.",
    ],
    tips: [
      "Solidify Focus 12 before reaching for Focus 15 — don't rush.",
      "Aim for effortless, on-demand entry.",
      "Stability now pays off in every higher state.",
    ],
    takeaways: [
      "A rock-solid Focus 12 is the prerequisite for Focus 15.",
      "Mastery means effortless, repeatable entry.",
      "Depth control is itself a skill worth practicing.",
    ],
  },
  {
    id: "w5-2",
    wave: 5,
    waveTitle: "Exploring Focus 15",
    number: 2,
    title: "Discovering Intuition",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave V - Exploring Focus 15/CD1 - 2 - Discovering Intuition.flac",
    summary:
      "Awakening and recognizing your intuitive faculty — learning to notice the quiet inner signal and distinguish it from ordinary thought.",
    technique: [
      "In Focus 12, turn attention to your intuitive sense.",
      "Notice subtle nudges, knowings, and gut feelings as they arise.",
      "Practice telling intuition apart from analysis and wishful thinking.",
      "Acknowledge each intuitive hit to reinforce it.",
    ],
    tips: [
      "Intuition is usually quiet, quick, and calm — not loud or anxious.",
      "Keep an intuition log and check accuracy over time.",
      "The more you honor it, the louder it becomes.",
    ],
    takeaways: [
      "Intuition has a distinct, quiet signature — learn to recognize it.",
      "Honoring intuitive hits strengthens the faculty.",
      "Tracking accuracy turns belief into earned trust.",
    ],
  },
  {
    id: "w5-3",
    wave: 5,
    waveTitle: "Exploring Focus 15",
    number: 3,
    title: "Exploring Intuition",
    focus: "Focus 12",
    duration: 35,
    audioFile: "Wave V - Exploring Focus 15/CD2 - 3 - Exploring Intuition.flac",
    summary:
      "Putting intuition to work — actively using your intuitive sense to gather information and guidance with growing confidence.",
    technique: [
      "In Focus 12, pose a question to your intuition.",
      "Receive the intuitive response without second-guessing.",
      "Act on or test small intuitive impressions.",
      "Record results to calibrate your accuracy.",
    ],
    tips: [
      "Start with low-stakes questions to build a track record.",
      "Trust the first clean impression.",
      "Don't overthink — analysis drowns the intuitive signal.",
    ],
    takeaways: [
      "Intuition strengthens through use and verification.",
      "First, clean impressions are usually the true signal.",
      "Calibration through testing builds reliable confidence.",
    ],
  },
  {
    id: "w5-4",
    wave: 5,
    waveTitle: "Exploring Focus 15",
    number: 4,
    title: "Introduction to Focus 15",
    focus: "Focus 15 — The State of No Time",
    duration: 40,
    audioFile: "Wave V - Exploring Focus 15/CD2 - 4 - Intro to Focus 15.flac",
    summary:
      "Entering Focus 15 — a deep, still state beyond the sense of time, often described as pure consciousness in the void. A landmark of the program.",
    technique: [
      "Move up through Focus 10 and 12 into Focus 15.",
      "Let go of the sense of time entirely; rest in the still point.",
      "Simply be present in the timeless space.",
      "Return slowly and gently through the lower Focus levels.",
    ],
    tips: [
      "Focus 15 can feel like vast stillness, void, or no-thing — this is correct.",
      "Don't fill the space with mental chatter; let it be empty.",
      "Re-enter several times before using it for active work.",
    ],
    takeaways: [
      "Focus 15 is the state of no time — a still point beyond clock and calendar.",
      "Emptiness here is the experience, not a failure.",
      "Time itself becomes optional; this is the gateway to creation work.",
    ],
  },
  {
    id: "w5-5",
    wave: 5,
    waveTitle: "Exploring Focus 15",
    number: 5,
    title: "Mission 15 — Creation and Manifestation",
    focus: "Focus 15",
    duration: 40,
    audioFile:
      "Wave V - Exploring Focus 15/CD3 - 5 - Mission 15 Creation and Manifestation.flac",
    summary:
      "Using the timeless state of Focus 15 for powerful creation and manifestation — planting intentions in a place unbounded by time.",
    technique: [
      "In Focus 15, hold a clear creative intention.",
      "Because there is no time, experience the outcome as already real, now.",
      "Charge it with feeling, then release it into the timeless field.",
      "Return without clinging to the result.",
    ],
    tips: [
      "Manifestation is potent here precisely because time isn't a constraint.",
      "Feel the outcome as a present reality, not a future hope.",
      "Release completely — the no-time state dislikes grasping.",
    ],
    takeaways: [
      "Creation in Focus 15 works because past/future collapse into now.",
      "Experience the wish fulfilled in the present tense.",
      "Plant, feel, release — then let the timeless field do its work.",
    ],
  },
  {
    id: "w5-6",
    wave: 5,
    waveTitle: "Exploring Focus 15",
    number: 6,
    title: "Exploring Focus 15",
    focus: "Focus 15",
    duration: 40,
    audioFile: "Wave V - Exploring Focus 15/CD3 - 6 - Exploring Focus 15.flac",
    summary:
      "Free exploration of the timeless state — discovering what Focus 15 uniquely offers you: deep insight, healing, creativity, and stillness.",
    technique: [
      "Enter Focus 15 on your own and rest in it.",
      "Explore freely — observe, create, heal, or simply abide.",
      "Let the timeless quality reveal its gifts.",
      "Return slowly and journal thoroughly.",
    ],
    tips: [
      "Each visit to Focus 15 can feel different — stay open.",
      "Even 'empty' sessions deepen your access to the state.",
      "This is your graduation into the deep states; consolidate before Wave VI.",
    ],
    takeaways: [
      "Focus 15 becomes a personal sanctuary for stillness and creation.",
      "Its gifts unfold gradually across many visits.",
      "Mastery of Focus 15 prepares you for the journeys of Focus 21+.",
    ],
  },

  // ────────────────────────────── WAVE VI ──────────────────────────────
  {
    id: "w6-1",
    wave: 6,
    waveTitle: "Odyssey",
    number: 1,
    title: "Sensing Locale I",
    focus: "Focus 12 / 15",
    duration: 40,
    audioFile: "Wave VI - Odyssey/CD1 - 1 - Sensing Locale 1.flac",
    summary:
      "Learning to perceive Locale I — the non-physical 'here and now', the energetic layer overlapping ordinary physical reality.",
    technique: [
      "In expanded awareness, extend perception into the space around you.",
      "Sense the non-physical aspects of your immediate environment (Locale I).",
      "Notice presences, energies, or impressions in the here-and-now.",
      "Return and record.",
    ],
    tips: [
      "Locale I overlaps the physical — start with your own room.",
      "Subtle is normal; you are sensing, not seeing with eyes.",
      "Keep a beginner's openness; don't pre-decide what you'll find.",
    ],
    takeaways: [
      "Locale I is the non-physical layer of ordinary reality, right here.",
      "Perception here is subtle and felt — trust faint impressions.",
      "Sensing your immediate space is the safe first step outward.",
    ],
  },
  {
    id: "w6-2",
    wave: 6,
    waveTitle: "Odyssey",
    number: 2,
    title: "Expansion in Locale I",
    focus: "Focus 15 / 21",
    duration: 40,
    audioFile: "Wave VI - Odyssey/CD1 - 2 - Expansion in Locale 1.flac",
    summary:
      "Extending your reach within Locale I — moving awareness farther out to perceive distant places and presences in the non-physical here-and-now.",
    technique: [
      "From a stable state, expand awareness beyond your immediate surroundings.",
      "Use vectors to direct perception to chosen places within Locale I.",
      "Explore what you find, staying anchored to your Compoint.",
      "Return cleanly.",
    ],
    tips: [
      "Lean on your earlier vector and Compoint skills.",
      "Expand gradually; you can always pull back to home base.",
      "Note both what you perceive and how confident it feels.",
    ],
    takeaways: [
      "Locale I extends far beyond your room — awareness can travel within it.",
      "Vectors steer; the Compoint anchors. Use both together.",
      "Gradual expansion builds confidence and reliability.",
    ],
  },
  {
    id: "w6-3",
    wave: 6,
    waveTitle: "Odyssey",
    number: 3,
    title: "Point of Departure",
    focus: "Focus 21",
    duration: 40,
    audioFile: "Wave VI - Odyssey/CD2 - 3 - Point of Departure.flac",
    summary:
      "Establishing the jumping-off point for travel beyond Locale I — preparing to move from physical reality toward Focus 21 and other energy systems.",
    technique: [
      "Reach a deep, stable state and locate your point of departure.",
      "Prepare to move from the physical/Locale I toward Focus 21.",
      "Feel the readiness to cross over; set clear intention.",
      "Make the first tentative movements outward.",
    ],
    tips: [
      "Treat this as preparation — readiness matters more than distance covered.",
      "Strengthen the REBAL before departing.",
      "Calm, clear intention is your best navigation tool.",
    ],
    takeaways: [
      "A clear point of departure makes the journey outward orderly.",
      "Preparation and intention precede travel.",
      "You set out protected and anchored, never adrift.",
    ],
  },
  {
    id: "w6-4",
    wave: 6,
    waveTitle: "Odyssey",
    number: 4,
    title: "Non-Physical Friends",
    focus: "Focus 21",
    duration: 40,
    audioFile: "Wave VI - Odyssey/CD2 - 4 - Nonphysical friends.flac",
    summary:
      "Meeting helpers, guides, and non-physical friends. You open to contact with benevolent intelligences who can accompany and assist you.",
    technique: [
      "In Focus 21, invite contact with non-physical friends or guides.",
      "Use NVC to receive and exchange meaning.",
      "Notice presences, their qualities, and any guidance offered.",
      "Thank them and return.",
    ],
    tips: [
      "Set the intention to meet only benevolent, helpful presences.",
      "Communication is non-verbal — receive whole meanings, not sentences.",
      "Build relationships over multiple sessions; trust grows.",
    ],
    takeaways: [
      "You are not alone — benevolent guides are available to help.",
      "NVC is how you communicate with non-physical friends.",
      "Intention sets the company you keep; ask for the helpful and wise.",
    ],
  },
  {
    id: "w6-5",
    wave: 6,
    waveTitle: "Odyssey",
    number: 5,
    title: "Movement to Locale II — Introduction to Focus 21",
    focus: "Focus 21 — The Bridge",
    duration: 45,
    audioFile:
      "Wave VI - Odyssey/CD3 - 5 - Movement to Locale 2 - Intro Focus 21.flac",
    summary:
      "Crossing into Locale II and formally entering Focus 21 — the bridge to other energy systems and realities beyond physical existence.",
    technique: [
      "Move up through the Focus levels to Focus 21.",
      "Cross from Locale I into Locale II — beyond physical reality.",
      "Sense the 'bridge' quality of Focus 21 at the edge of other systems.",
      "Return through the levels carefully.",
    ],
    tips: [
      "Focus 21 is a threshold — expect a sense of edge or boundary.",
      "Re-enter several times before exploring far.",
      "Keep your Compoint and REBAL strong for safe crossing.",
    ],
    takeaways: [
      "Focus 21 is the bridge between physical reality and other energy systems.",
      "Crossing is gradual; revisit the threshold until it's familiar.",
      "From Focus 21 the territories of Waves VII–VIII become reachable.",
    ],
  },
  {
    id: "w6-6",
    wave: 6,
    waveTitle: "Odyssey",
    number: 6,
    title: "Free Flow Journey in Focus 21",
    focus: "Focus 21",
    duration: 45,
    audioFile: "Wave VI - Odyssey/CD3 - 6 - Free Flow Journey in Focus 21.flac",
    summary:
      "Open exploration in Focus 21 — your first free journeys across the bridge, consolidating everything in Wave VI.",
    technique: [
      "Enter Focus 21 on your own and stabilize.",
      "Journey freely — explore, meet guides, or observe other systems.",
      "Follow your intention and curiosity across the bridge.",
      "Return cleanly and journal in detail.",
    ],
    tips: [
      "Bring a loose purpose, then let the journey unfold.",
      "Lean on guides and your Compoint while exploring.",
      "Consolidate Focus 21 fully before the Voyager territories of Wave VII.",
    ],
    takeaways: [
      "Free Flow in Focus 21 turns the bridge into familiar ground.",
      "Guides and home base keep exploration safe and oriented.",
      "Confident Focus 21 access is the doorway to Focus 23–27.",
    ],
  },

  // ────────────────────────────── WAVE VII ──────────────────────────────
  {
    id: "w7-1",
    wave: 7,
    waveTitle: "Voyager",
    number: 1,
    title: "Introduction to Focus 23",
    focus: "Focus 23 — The Recently Departed",
    duration: 45,
    audioFile: "Wave VII - Voyager/CD1 - 2 - Intro Focus 23.flac",
    summary:
      "Entering Focus 23 — a region inhabited by those who have recently left physical life but have not yet fully moved on, often unaware of their state.",
    technique: [
      "Journey from Focus 21 into Focus 23.",
      "Observe the region and any beings present, with compassion.",
      "Use NVC; offer help or simply witness as guided.",
      "Return carefully through the levels.",
    ],
    tips: [
      "Approach with compassion — many here are confused or 'stuck'.",
      "Keep a strong REBAL and clear intention; observe before engaging.",
      "Lean on your guides; you can assist, but you needn't fix anything.",
    ],
    takeaways: [
      "Focus 23 holds those recently departed, often unaware they've passed.",
      "Compassion and clear boundaries go together here.",
      "You travel as a protected, intentional explorer — never adrift.",
    ],
  },
  {
    id: "w7-2",
    wave: 7,
    waveTitle: "Voyager",
    number: 2,
    title: "Introduction to Focus 25",
    focus: "Focus 25 — The Belief System Territories",
    duration: 45,
    audioFile: "Wave VII - Voyager/CD2 - 3 - Intro Focus 25.flac",
    summary:
      "Exploring Focus 25 — the belief system territories, vast realms shaped and inhabited according to the beliefs people held in physical life.",
    technique: [
      "Journey upward from Focus 23 into Focus 25.",
      "Observe how environments here are formed by shared beliefs.",
      "Explore with an open, non-judgmental mind.",
      "Return through the Focus levels with care.",
    ],
    tips: [
      "Suspend judgment — these are belief-created realities, all 'real' to their inhabitants.",
      "Notice how belief shapes experience here, and reflect on your own beliefs.",
      "Stay anchored; the variety can be vast and vivid.",
    ],
    takeaways: [
      "Focus 25 reveals how belief literally shapes reality after death.",
      "Withholding judgment lets you see clearly.",
      "Your own beliefs are creative forces too — a sobering, useful insight.",
    ],
  },

  // ────────────────────────────── WAVE VIII ──────────────────────────────
  {
    id: "w8-1",
    wave: 8,
    waveTitle: "Union",
    number: 1,
    title: "Special Tour (Focus 27 — The Park)",
    focus: "Focus 27 — The Reception Center",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_1_Special_Tour.flac",
    summary:
      "Arrival at Focus 27 — 'the Park' or Reception Center, a human-made waystation where consciousness transitions and prepares. This tape gives you the orienting tour.",
    technique: [
      "Journey up through Focus 21–25 into Focus 27.",
      "Arrive at the Park / Reception Center and take in the surroundings.",
      "Establish your own special place within Focus 27.",
      "Return through the levels with care.",
    ],
    tips: [
      "Create a personal 'special place' in the Park — your anchor in Focus 27.",
      "Take the tour slowly; Focus 27 is rich and detailed.",
      "Use guides freely; this is a welcoming, supportive realm.",
    ],
    takeaways: [
      "Focus 27 is the Reception Center — a structured, supportive realm of consciousness.",
      "Your personal special place becomes your home base in Focus 27.",
      "This is the destination the whole program has been building toward.",
    ],
  },
  {
    id: "w8-2",
    wave: 8,
    waveTitle: "Union",
    number: 2,
    title: "Meeting with the Entry Director",
    focus: "Focus 27",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_2_Meeting_with_the_Entry_Director.flac",
    summary:
      "Meeting the Entry Director — the guiding intelligence who oversees arrivals at the Reception Center and can orient you within Focus 27.",
    technique: [
      "Return to your special place in Focus 27.",
      "Seek and meet the Entry Director.",
      "Communicate via NVC; ask for orientation and guidance.",
      "Return carefully.",
    ],
    tips: [
      "Come with sincere questions about your path and purpose.",
      "Receive guidance non-verbally; record it afterward.",
      "Treat the meeting as the start of an ongoing relationship.",
    ],
    takeaways: [
      "Focus 27 has guiding intelligences who help orient new explorers.",
      "Sincere questions invite meaningful guidance.",
      "Relationships with guides deepen across repeated visits.",
    ],
  },
  {
    id: "w8-3",
    wave: 8,
    waveTitle: "Union",
    number: 3,
    title: "Educational Opportunities",
    focus: "Focus 27",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_3_Educational_Opportunities.flac",
    summary:
      "Visiting the centers of learning within Focus 27 — places where knowledge and wisdom from across systems can be accessed and studied.",
    technique: [
      "From your special place, travel to the educational centers of Focus 27.",
      "Explore the learning available; pose what you wish to understand.",
      "Receive knowledge via NVC and direct experience.",
      "Return and journal what you learned.",
    ],
    tips: [
      "Bring genuine curiosity and specific questions.",
      "Learning may be experiential rather than lecture-like.",
      "Revisit to study a topic over multiple sessions.",
    ],
    takeaways: [
      "Focus 27 holds centers of learning open to the sincere explorer.",
      "Knowledge here is often transmitted as direct experience.",
      "Repeated study deepens understanding, just as on Earth.",
    ],
  },
  {
    id: "w8-4",
    wave: 8,
    waveTitle: "Union",
    number: 4,
    title: "Healing and Regeneration Center",
    focus: "Focus 27",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_4_Healing_and_Regeneration_Center.flac",
    summary:
      "Visiting the Healing and Regeneration Center of Focus 27 — a place to receive and learn deep healing for body, mind, and spirit.",
    technique: [
      "Travel to the Healing and Regeneration Center in Focus 27.",
      "Receive healing for yourself, or learn to channel it for others.",
      "Combine with your energy tools (color, Energy Bar, REBAL).",
      "Return gently and rest.",
    ],
    tips: [
      "Come open to receive — you don't have to do the healing yourself.",
      "You can bring others (with their openness) here in intention for healing.",
      "Integrate slowly afterward; deep healing keeps unfolding.",
    ],
    takeaways: [
      "Focus 27 offers profound healing for body, mind, and spirit.",
      "Healing can be received, learned, and extended to others.",
      "Your earlier energy tools amplify the work here.",
    ],
  },
  {
    id: "w8-5",
    wave: 8,
    waveTitle: "Union",
    number: 5,
    title: "Planning Center",
    focus: "Focus 27",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_5_Planning_Center.flac",
    summary:
      "Visiting the Planning Center — where life direction, purpose, and future possibilities can be examined and shaped with guidance.",
    technique: [
      "Travel to the Planning Center within Focus 27.",
      "Examine your life purpose and the paths open to you.",
      "Work with guides to clarify direction and intention.",
      "Return and record the guidance for action.",
    ],
    tips: [
      "Bring real questions about purpose and direction.",
      "Treat insights as a plan to act on, not just contemplate.",
      "Revisit when at a crossroads in life.",
    ],
    takeaways: [
      "The Planning Center is for examining and shaping life direction.",
      "Insight is meant to translate into real-world action.",
      "Purpose can be consciously reviewed and refined with guidance.",
    ],
  },
  {
    id: "w8-6",
    wave: 8,
    waveTitle: "Union",
    number: 6,
    title: "Coordination Area",
    focus: "Focus 27",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_6_Coordination_Area.flac",
    summary:
      "Exploring the Coordination Area of Focus 27 — where activities across centers and systems are organized, and where larger patterns become visible.",
    technique: [
      "Travel to the Coordination Area in Focus 27.",
      "Observe how the centers and systems interrelate.",
      "Seek understanding of larger patterns and your part in them.",
      "Return and reflect.",
    ],
    tips: [
      "Look for the bigger picture — how things connect.",
      "Ask guides to show you your role within the wider whole.",
      "Hold insights lightly; let understanding mature.",
    ],
    takeaways: [
      "The Coordination Area reveals how the parts of Focus 27 work together.",
      "Seeing the larger pattern reframes your individual path.",
      "Connection and coordination are themes of the Union wave.",
    ],
  },
  {
    id: "w8-7",
    wave: 8,
    waveTitle: "Union",
    number: 7,
    title: "Inner Earth",
    focus: "Focus 27",
    duration: 50,
    audioFile: "Wave VIII - Union/CD_7_Inner_Earth.flac",
    summary:
      "A journey to the Inner Earth — a deep exploration connecting you with the living energy and consciousness of the planet itself.",
    technique: [
      "From Focus 27, set intention to journey to the Inner Earth.",
      "Connect with the planet's living energy and consciousness.",
      "Explore and commune as guided.",
      "Return gently and ground yourself.",
    ],
    tips: [
      "Approach the Earth as a living, conscious being.",
      "Ground thoroughly afterward — feel your feet, your breath, your room.",
      "Let the connection inform how you live day to day.",
    ],
    takeaways: [
      "The Earth can be experienced as a living, conscious presence.",
      "Connection with the planet is grounding and reorienting.",
      "Bring the felt connection back into ordinary life.",
    ],
  },
  {
    id: "w8-8",
    wave: 8,
    waveTitle: "Union",
    number: 8,
    title: "The Absolute",
    focus: "Focus 27 → Beyond",
    duration: 55,
    audioFile: "Wave VIII - Union/CD_8_The_Absolute.flac",
    summary:
      "The culmination of the entire program — an opening toward union with the Absolute, the source and totality of all consciousness.",
    technique: [
      "From a deep, stable Focus 27, set intention toward the Absolute.",
      "Open completely; release self and merge with the greater whole.",
      "Rest in union as far as you are able.",
      "Return slowly, gently, fully, and integrate over time.",
    ],
    tips: [
      "There is nothing to achieve here — only to open and allow.",
      "Whatever you experience is right for you; comparison is meaningless.",
      "Integrate slowly; the effects of this work unfold for a long time.",
    ],
    takeaways: [
      "The Absolute is union with the source of all consciousness — the journey's summit.",
      "Surrender, not effort, is the way: open and allow.",
      "Integration continues long after the final tape; the path keeps unfolding.",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────
export function getTape(id: string): Tape | undefined {
  return TAPES.find((t) => t.id === id);
}

export function tapesByWave(wave: number): Tape[] {
  return TAPES.filter((t) => t.wave === wave).sort((a, b) => a.number - b.number);
}

export const TOTAL_TAPES = TAPES.length;
