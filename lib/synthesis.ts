// Neuroscience × Yoga — the synthesis layer.
// How the Focus states map onto brainwave physiology, and which
// classical Indian yogic techniques amplify each one. Evidence-informed and
// tradition-rooted; framed for personal practice, not medical advice.

export type BrainBand = {
  band: string;
  hz: string;
  gateway: string; // matching Focus level(s)
  yogic: string; // closest yogic state
  quality: string;
};

// Beta → Gamma, ascending toward subtler states.
export const BRAIN_BANDS: BrainBand[] = [
  {
    band: "Beta",
    hz: "13–30 Hz",
    gateway: "C1 — ordinary waking",
    yogic: "Vitarka — discursive mind",
    quality: "Alert, analytical, outward-facing. The state you start and end in.",
  },
  {
    band: "Alpha",
    hz: "8–12 Hz",
    gateway: "Entering Focus 10",
    yogic: "Pratyāhāra — sense withdrawal",
    quality:
      "Relaxed, eyes-closed awareness. The senses turn inward; the body begins to settle.",
  },
  {
    band: "Theta",
    hz: "4–8 Hz",
    gateway: "Focus 10 → 12",
    yogic: "Dhāraṇā / Yoga Nidrā",
    quality:
      "Hypnagogic threshold — vivid imagery, intuition, the 'mind awake / body asleep' zone.",
  },
  {
    band: "Delta",
    hz: "0.5–4 Hz",
    gateway: "Focus 15+",
    yogic: "Suṣupti with awareness · seed of Samādhi",
    quality:
      "The 'state of no time'. Deep, still, formless — conscious presence within deep-sleep rhythms.",
  },
  {
    band: "Gamma",
    hz: "30–100 Hz",
    gateway: "Focus 21 → 27 → the Absolute",
    yogic: "Dhyāna → Samādhi · Turīya",
    quality:
      "Unitive, boundary-dissolving awareness — the binding of experience into one whole, seen in long-term meditators.",
  },
];

// ── The Nāḍīs — iḍā, piṅgalā, suṣumnā ────────────────────────────────
export const NADI_INTRO = {
  lead: "Yogis describe three primary energy channels (nāḍīs). Iḍā and piṅgalā spiral up the spine and end at the left and right nostrils; suṣumnā runs straight up the centre. Which channel is dominant at any moment is read directly from the breath — the science of swara yoga.",
  nasalCycle:
    "This is not just metaphor. The nostrils take turns: roughly every 1.5–4 hours one nostril flows more freely than the other (the 'nasal cycle'), governed by the autonomic nervous system swelling and shrinking tissue inside the nose. Research has linked right-nostril dominance to sympathetic (arousing) activity and relatively more left-hemisphere engagement, and left-nostril dominance to parasympathetic (calming) activity and relatively more right-hemisphere engagement — each nostril tied to the opposite hemisphere, exactly as the yogis mapped it.",
  check:
    "Check yours now: close one nostril, breathe; then the other. Whichever flows more easily is dominant. The dominant channel tells you which state you are already in — and which practice will shift you where you want to go.",
};

export type Nadi = {
  id: string;
  sanskrit: string;
  english: string;
  side: string;
  element: string; // lunar / solar / balance
  nostril: string; // which nostril flow signals it
  autonomic: string; // sympathetic / parasympathetic
  hemisphere: string;
  qualities: string[];
  neuro: string;
  activate: string[]; // how to switch this channel on
  useFor: string; // uses + Gateway pairing
};

export const NADIS: Nadi[] = [
  {
    id: "ida",
    sanskrit: "Iḍā",
    english: "The Lunar / Cooling Channel",
    side: "Left",
    element: "Chandra · Moon",
    nostril: "Left nostril flowing",
    autonomic: "Parasympathetic (rest & restore)",
    hemisphere: "Right hemisphere (spatial, intuitive, holistic)",
    qualities: ["Cooling", "Calming", "Receptive", "Introspective", "Restorative"],
    neuro:
      "Left-nostril breathing is associated with a parasympathetic shift — lower heart rate and blood pressure — and relatively greater right-hemisphere activity. It is the physiology of calm, inward, receptive states.",
    activate: [
      "Chandra bhedana (moon-piercing breath): close the RIGHT nostril with the thumb and breathe only through the LEFT.",
      "Inhale left, then exhale either left or slowly through the right — 9–18 rounds.",
      "Body shortcut: lie on your RIGHT side for a few minutes; the left nostril opens.",
      "Best in the evening, in heat, or whenever you are over-stimulated.",
    ],
    useFor:
      "Calming, cooling, sleep, healing and emotional release. In Gateway terms, iḍā is the ally of Focus 10 — it brings the parasympathetic 'body asleep' shift, and supports Release & Recharge and the healing/Body-Map exercises.",
  },
  {
    id: "pingala",
    sanskrit: "Piṅgalā",
    english: "The Solar / Activating Channel",
    side: "Right",
    element: "Surya · Sun",
    nostril: "Right nostril flowing",
    autonomic: "Sympathetic (arouse & act)",
    hemisphere: "Left hemisphere (verbal, logical, sequential)",
    qualities: ["Heating", "Energizing", "Active", "Focused", "Outward"],
    neuro:
      "Right-nostril breathing is associated with a sympathetic shift — raised heart rate, metabolism and alertness — and relatively greater left-hemisphere activity. It is the physiology of vitality, drive and outward action.",
    activate: [
      "Surya bhedana (sun-piercing breath): close the LEFT nostril and breathe only through the RIGHT.",
      "Inhale right, exhale left, 9–18 rounds (skip if anxious or before sleep).",
      "Body shortcut: lie on your LEFT side; the right nostril opens.",
      "Best in the morning, before activity, digestion, or physical energy work.",
    ],
    useFor:
      "Energy, warmth, alertness and digestion. In Gateway terms, piṅgalā fuels active work — physical energy practices (Energy Bar, Energy Food) and the will-charged moment of patterning and manifestation. Use sparingly; too much keeps the body too awake for deep states.",
  },
  {
    id: "sushumna",
    sanskrit: "Suṣumnā",
    english: "The Central Channel",
    side: "Centre (spine)",
    element: "Balance · Agni",
    nostril: "Both nostrils flowing equally",
    autonomic: "Balanced autonomic state",
    hemisphere: "Both hemispheres in coherence",
    qualities: ["Balanced", "Still", "Unitive", "Meditative", "Awakening"],
    neuro:
      "When the two nostrils flow equally, the autonomic system is balanced and the hemispheres tend toward coherence — the very state the binaural-beat audio engineers. This balance naturally appears in the brief transition between nasal-cycle phases, and meditation prolongs it.",
    activate: [
      "Nāḍī śodhana (alternate-nostril breathing) is the direct route: balance the two flows until they equalize.",
      "Or catch the natural junction — the few minutes when dominance switches from one nostril to the other.",
      "Sit tall; keep the spine straight so the central channel is open.",
      "Then sit in stillness or begin your tape — do not 'do', simply abide.",
    ],
    useFor:
      "Meditation, deep states, and spiritual awakening — suṣumnā is the path kuṇḍalinī rises through. This balanced channel is the prize: it is what nāḍī śodhana and the binaural-beat audio are both reaching for. Enter it before Focus 12, 15 and 21 work for the deepest, most stable journeys.",
  },
];

// ── Quick Switch — activating a nāḍī on demand (work / travel) ───────
export type QuickSwitch = {
  goal: string;
  channel: string;
  tone: "ida" | "pingala" | "sushumna";
  moves: { method: string; onset: string }[];
};

export const QUICK_SWITCH: QuickSwitch[] = [
  {
    goal: "Calm down / cool off",
    channel: "Iḍā · left nostril",
    tone: "ida",
    moves: [
      { method: "Exhale longer than you inhale (in 4, out 8)", onset: "60–90 sec" },
      { method: "Press the RIGHT armpit (fist / armrest) to open the left nostril", onset: "1–3 min" },
      { method: "Lean or lie on your RIGHT side", onset: "2–5 min" },
      { method: "Rest your cheek on your hand, a fingertip closing the right nostril", onset: "2–5 min" },
    ],
  },
  {
    goal: "Energize / focus outward",
    channel: "Piṅgalā · right nostril",
    tone: "pingala",
    moves: [
      { method: "A few faster breaths through the right nostril, sit tall", onset: "1–2 min" },
      { method: "Press the LEFT armpit to open the right nostril", onset: "1–3 min" },
      { method: "Lean or lie on your LEFT side", onset: "2–5 min" },
      { method: "(Skip if anxious or before sleep)", onset: "—" },
    ],
  },
  {
    goal: "Balance / deep focus",
    channel: "Suṣumnā · both equal",
    tone: "sushumna",
    moves: [
      { method: "Box breathing — in 4 · hold 4 · out 4 · hold 4", onset: "5–10 min" },
      { method: "Discreet alternate-nostril breaths (nāḍī śodhana)", onset: "5–10 min" },
      { method: "Catch the natural switch-over between nostrils", onset: "varies" },
      { method: "Best state to enter before any Gateway tape", onset: "—" },
    ],
  },
];

export const QUICK_INSTANT = {
  title: "Need it in under 2 minutes?",
  rows: [
    { goal: "Instant reset", move: "2× physiological sighs — double inhale, long slow exhale", onset: "~30 sec" },
    { goal: "Calm fast", move: "Extended-exhale breathing (in 4, out 8)", onset: "60–90 sec" },
    { goal: "Quick lift", move: "Right-nostril breaths + tall spine", onset: "1–2 min" },
    { goal: "Flip dominance", move: "Armpit pressure on the opposite side", onset: "1–3 min" },
  ],
  verify:
    "Check it worked: exhale onto the back of a cold hand (or a phone screen) and feel which nostril pushes more air — do it before and after. That before/after check is also how you train the skill, so it gets faster each time.",
  timeline:
    "Realistic timeline: week 1, expect 5–10 min by breath alone; by week 3–4 the armpit/side method drops to ~1–2 min; seasoned practitioners can shift largely by attention.",
};

export type Mechanism = {
  title: string;
  neuro: string; // the science
  yoga: string; // the yogic parallel
  payoff: string; // why combining helps the Gateway work
};

export const MECHANISMS: Mechanism[] = [
  {
    title: "Hemispheric synchronization",
    neuro:
      "Each ear receives a slightly different tone; the brainstem resolves the difference into a binaural beat, nudging the two hemispheres toward a single shared frequency (EEG coherence).",
    yoga:
      "Nāḍī śodhana (alternate-nostril breathing) balances the iḍā and piṅgalā nāḍīs — the left/right energetic channels — producing measurable left–right EEG balancing. OM chanting likewise spreads coherent, low-frequency activity across both hemispheres.",
    payoff:
      "Do nāḍī śodhana before a tape and you arrive already half-synchronized — the binaural beat then has far less work to do, so Focus levels come faster and hold longer.",
  },
  {
    title: "Vagal tone & the parasympathetic shift",
    neuro:
      "The hallmark of Focus 10 — a body that falls asleep while the mind stays awake — is a parasympathetic (rest-and-digest) shift: slower heart rate, higher heart-rate variability, lower muscle tone.",
    yoga:
      "Slow breathing with a long exhale, ujjāyī, and bhrāmarī directly stimulate the vagus nerve. Bhrāmarī's humming also raises nasal nitric oxide, aiding relaxation and circulation.",
    payoff:
      "A few minutes of extended-exhale breathing tips you into the parasympathetic state Focus 10 depends on — the body 'switches off' on cue.",
  },
  {
    title: "Quieting the Default Mode Network",
    neuro:
      "The Default Mode Network (DMN) generates self-referential chatter and the felt sense of a bounded 'me'. Focused attention and deep meditation reduce DMN activity — correlated with ego-dissolution and the 'expansion' of Focus 12–15.",
    yoga:
      "Single-pointed practices — trāṭaka (steady gazing), mantra japa, breath-as-anchor — are dhāraṇā: holding attention on one object until the chatter falls silent.",
    payoff:
      "Anchoring on a mantra or the breath quiets the DMN, so the boundary-softening of expanded awareness arrives more readily and feels less like effort.",
  },
  {
    title: "Neurochemistry of the threshold",
    neuro:
      "Theta-dominant relaxation is associated with rising melatonin and serotonergic tone and increased GABA from slow breathwork — the chemistry of calm, vivid inner states and the hypnagogic doorway.",
    yoga:
      "Yoga nidrā and prāṇāyāma are time-tested ways to hold the body at that theta threshold without tipping into sleep — exactly where Gateway imagery and intuition live.",
    payoff:
      "Yoga nidrā trains you to camp on the edge of sleep with awareness intact — the precise skill Wave I is trying to build.",
  },
  {
    title: "Attention, the pineal, and the 'third eye'",
    neuro:
      "Converging attention to the brow region (and reduced visual load) is linked to shifts in pineal/melatonin signalling and the inner-light phenomena many practitioners report. Sustained concentration strengthens attention-related networks over time.",
    yoga:
      "Śāmbhavī mudrā and ājñā-cakra focus direct awareness to the brow centre — the classical seat of inner vision and the 'third eye'.",
    payoff:
      "Resting attention at the brow during Focus 12+ work sharpens non-physical perception (remote viewing, vectors, imagery) and steadies the inner gaze.",
  },
];

export type YogaTool = {
  id: string;
  sanskrit: string;
  english: string;
  category: "Prāṇāyāma" | "Mantra & Sound" | "Concentration" | "Energy & Locks" | "Deep Rest";
  what: string; // brief
  how: string[]; // steps
  neuro: string; // mechanism in one line
  pairWith: string; // which Gateway work this amplifies
};

export const YOGA_TOOLS: YogaTool[] = [
  {
    id: "nadi-shodhana",
    sanskrit: "Nāḍī Śodhana",
    english: "Alternate-Nostril Breathing",
    category: "Prāṇāyāma",
    what: "Balances the left/right channels and the two hemispheres.",
    how: [
      "Sit tall. Close the right nostril with the thumb; inhale slowly through the left.",
      "Close the left with the ring finger; release the right; exhale right.",
      "Inhale right; close right; exhale left. That is one round.",
      "Continue 5–10 rounds, smooth and unforced.",
    ],
    neuro: "Drives left–right EEG balancing and a calm, centred autonomic state.",
    pairWith:
      "The perfect prelude to any tape, especially Orientation and Introduction to Focus 10 — it pre-synchronizes the brain before the binaural-beat audio begins.",
  },
  {
    id: "bhramari",
    sanskrit: "Bhrāmarī",
    english: "Humming-Bee Breath",
    category: "Prāṇāyāma",
    what: "A long humming exhale that floods the skull with vibration.",
    how: [
      "Inhale fully through the nose.",
      "Exhale with a steady, low hum (like a bee), feeling the vibration in the head.",
      "Optionally rest attention at the brow centre.",
      "Repeat 6–10 rounds.",
    ],
    neuro: "Stimulates the vagus nerve and raises nasal nitric oxide; deeply soothing.",
    pairWith:
      "Resonant Tuning and the REBAL (Wave I). Bhrāmarī is the natural amplifier of the program's own toning practice.",
  },
  {
    id: "ujjayi",
    sanskrit: "Ujjāyī",
    english: "Ocean / Victorious Breath",
    category: "Prāṇāyāma",
    what: "A soft throat constriction makes a steady ocean sound.",
    how: [
      "Slightly narrow the back of the throat so the breath whispers.",
      "Breathe slowly through the nose, audible but relaxed.",
      "Let the exhale run a little longer than the inhale.",
      "Use it quietly under the tape to sustain depth.",
    ],
    neuro: "Lengthens the exhale, lifts vagal tone, and anchors attention to sound.",
    pairWith:
      "Holding Focus 10 and Focus 12 through the long silences — it keeps the body parasympathetic and the mind on a single thread.",
  },
  {
    id: "kumbhaka",
    sanskrit: "Kumbhaka",
    english: "Breath Retention",
    category: "Prāṇāyāma",
    what: "Gentle pauses after the inhale (and later the exhale).",
    how: [
      "After a comfortable inhale, hold softly for a few seconds — never strain.",
      "Release and exhale slowly.",
      "Build retention gradually over weeks, not minutes.",
      "Stop at once if you feel light-headed.",
    ],
    neuro: "Raises CO₂ tolerance and shifts brain chemistry toward altered states.",
    pairWith:
      "Focus 12 and Focus 15 deepening and manifestation work — used sparingly and with care. (Skip if pregnant, or with heart/blood-pressure conditions.)",
  },
  {
    id: "pranava",
    sanskrit: "Praṇava — OM",
    english: "OM / Bīja Mantra Japa",
    category: "Mantra & Sound",
    what: "Repetition of OM or seed-sounds as a vibratory anchor.",
    how: [
      "Settle the breath. Sound OM on each exhale — A-U-M, ending in a long hum.",
      "Feel the vibration rise from belly to crown.",
      "Then continue silently (mānasika japa), letting OM repeat in the mind.",
      "Rest in the silence after the sound.",
    ],
    neuro: "Spreads coherent low-frequency activity and quiets the Default Mode Network.",
    pairWith:
      "Resonant Tuning, the REBAL, and any expansion into Focus 12 — OM is the universal counterpart of the program's toning.",
  },
  {
    id: "bija-chakra",
    sanskrit: "Bīja & Cakra",
    english: "Seed-Sounds + Energy Centres",
    category: "Mantra & Sound",
    what: "Pairing seed-sounds and colours with the body's energy centres.",
    how: [
      "Move attention up the spine: LAM (root), VAM, RAM, YAM (heart), HAM, OM (brow), silence (crown).",
      "Sound or imagine each seed at its centre with its colour.",
      "Feel each centre brighten and balance in turn.",
      "Finish by sealing the whole column in light.",
    ],
    neuro: "Directs attention and breath to map and regulate bodily/energetic tone.",
    pairWith:
      "Wave II energy tools — Color Breathing, Energy Bar, and the Living Body Map — and the ascending Focus levels overall.",
  },
  {
    id: "trataka",
    sanskrit: "Trāṭaka",
    english: "Steady Gazing",
    category: "Concentration",
    what: "Unblinking focus on a candle flame or point, then its after-image.",
    how: [
      "Gaze softly at a candle flame about an arm's length away, without blinking, for 1–3 minutes.",
      "Close the eyes and hold the glowing after-image at the brow centre.",
      "When it fades, reopen and repeat once or twice.",
      "Then begin your tape with the inner gaze already steady.",
    ],
    neuro: "Trains sustained attention (dhāraṇā) and reduces Default Mode chatter.",
    pairWith:
      "Wave III perception work — Remote Viewing, Vectors, and Five Questions — where a steady inner gaze is everything.",
  },
  {
    id: "shambhavi",
    sanskrit: "Śāmbhavī Mudrā",
    english: "Brow-Centre Gaze",
    category: "Concentration",
    what: "Eyes gently turned and focused toward the eyebrow centre.",
    how: [
      "With eyes closed, lift the inner gaze toward the point between the brows.",
      "Hold lightly — no straining the eyes.",
      "Keep the breath slow and the forehead soft.",
      "Maintain during perception or contact exercises.",
    ],
    neuro: "Concentrates attention at the brow (ājñā) — linked to inner-vision phenomena.",
    pairWith:
      "Focus 12+ perception, intuition (Wave V), and meeting non-physical friends/guides (Wave VI).",
  },
  {
    id: "bandhas",
    sanskrit: "Bandhas",
    english: "Energy Locks",
    category: "Energy & Locks",
    what: "Subtle muscular locks (mūla, jālandhara, uḍḍīyāna) that gather energy.",
    how: [
      "Mūla bandha: gently lift the pelvic floor.",
      "Jālandhara bandha: lower the chin slightly toward the chest after an inhale.",
      "Uḍḍīyāna bandha: on empty breath, draw the belly up and in (advanced).",
      "Apply softly with breath retention, then release fully.",
    ],
    neuro: "Modulates pressure and autonomic tone; classically directs prāṇa upward.",
    pairWith:
      "Wave II–III energy work (Energy Bar, Energy Food) and building a strong REBAL. (Learn from a teacher; avoid with relevant medical conditions.)",
  },
  {
    id: "yoga-nidra",
    sanskrit: "Yoga Nidrā",
    english: "Yogic Sleep",
    category: "Deep Rest",
    what: "Guided rotation of awareness through the body at the edge of sleep.",
    how: [
      "Lie down. Set a one-line intention (saṅkalpa).",
      "Rotate awareness part by part through the whole body.",
      "Watch the natural breath; remain the witness as the body sleeps.",
      "Restate the saṅkalpa before returning.",
    ],
    neuro: "Holds you at the theta threshold — literally 'mind awake, body asleep'.",
    pairWith:
      "All of Wave I (it is Focus 10's twin) and any patterning work, where the saṅkalpa mirrors Gateway intention-setting.",
  },
  {
    id: "soham",
    sanskrit: "So-Ham · Sākṣī",
    english: "Witness Breath",
    category: "Deep Rest",
    what: "Riding the natural breath with 'So' (in) and 'Ham' (out) as pure witness.",
    how: [
      "Do nothing to the breath; simply observe it.",
      "Hear 'So' on the inhale, 'Ham' on the exhale.",
      "Rest as the silent witness behind both.",
      "Let even the words dissolve into awareness.",
    ],
    neuro: "Cultivates non-reactive, witnessing awareness; settles the self-network.",
    pairWith:
      "Five Questions, NVC, and the unitive reaches of Waves VI–VIII — the witness stance makes guidance easier to receive.",
  },
];

export type Protocol = {
  name: string;
  goal: string;
  forWaves: string;
  steps: string[];
};

export const PROTOCOLS: Protocol[] = [
  {
    name: "Grounded Entry",
    goal: "Pre-synchronize the brain and drop into the parasympathetic state before any tape.",
    forWaves: "Every Wave · before pressing play",
    steps: [
      "2–3 minutes of nāḍī śodhana to balance the hemispheres.",
      "6 rounds of bhrāmarī to flood the head with vibration and lift vagal tone.",
      "One slow OM, then settle. Now begin the tape — the binaural beat meets you halfway.",
    ],
  },
  {
    name: "Body-Asleep Booster",
    goal: "Reach a deep, stable Focus 10 quickly and stay awake within it.",
    forWaves: "Wave I — Discovery",
    steps: [
      "Five minutes of ujjāyī with a long exhale to switch on rest-and-digest.",
      "A short yoga-nidrā body rotation to settle every part.",
      "Carry quiet ujjāyī into the tape's silences to keep the body asleep and the mind awake.",
    ],
  },
  {
    name: "Perception Sharpener",
    goal: "Steady the inner gaze for clear non-physical seeing.",
    forWaves: "Wave III — Freedom · Wave V intuition",
    steps: [
      "Trāṭaka on a candle for 2 minutes, then hold the after-image at the brow.",
      "Begin the tape holding śāmbhavī mudrā (soft brow-centre gaze).",
      "Record first impressions instantly — the dhāraṇā keeps the signal clean.",
    ],
  },
  {
    name: "Manifestation Amplifier",
    goal: "Charge patterning and Focus 15 creation with focused intention.",
    forWaves: "Wave II/IV patterning · Wave V Focus 15",
    steps: [
      "Form a one-line saṅkalpa — your intention stated in the present, as already true.",
      "Enter the state; at the moment of patterning, add a gentle inhale kumbhaka while feeling it real.",
      "Release the breath and the intention together into the timeless field.",
    ],
  },
  {
    name: "Energy & Locks",
    goal: "Make energy tools and the REBAL vivid and strong.",
    forWaves: "Wave II–III energy work",
    steps: [
      "Run the bīja/cakra column up the spine to light each centre.",
      "On a soft inhale-hold, apply mūla bandha to gather and lift energy.",
      "Shape that charged energy into the REBAL, Energy Bar, or Body Map.",
    ],
  },
  {
    name: "Unitive Surrender",
    goal: "Open to the boundary-dissolving reaches of the deep Waves.",
    forWaves: "Waves VI–VIII",
    steps: [
      "Settle into So-Ham witness breath until the breath nearly disappears.",
      "Adopt the attitude of īśvara-praṇidhāna — surrender, not effort.",
      "Let awareness expand without grasping; whatever arises, simply allow it.",
    ],
  },
];

export const SAFETY: string[] = [
  "These practices are for self-study and wellbeing, not medical or psychological treatment. If you have a diagnosed condition, consult a professional first.",
  "Breath retention (kumbhaka) and the bandhas can be powerful — build slowly, never strain, and skip them in pregnancy or with heart, blood-pressure, or seizure conditions.",
  "Intense energy/kundalini work can unsettle some people. Go gently, keep sessions grounded, and pause if you feel overwhelmed.",
  "Always practise lying or sitting safely, never while driving or in water, and come fully back to ordinary awareness (C1) before getting up.",
];
