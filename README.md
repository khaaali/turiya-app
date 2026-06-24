# Turīya

A calm, professional web app for working through the eight-Wave binaural-beat
consciousness program — bridging the neuroscience of altered states with
classical Indian yoga. Browse all 46 exercises, read the
technique, tips, and **takeaway readings** for each tape, log every session,
and watch your progress unfold through the Focus levels.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. All your data
is stored **locally in your browser** — no account, no server, fully private.

## Features

- **The Library** — all eight Waves and 46 exercises, each with its Focus
  level, step-by-step technique, practice tips, and gold "takeaway readings"
  (the key things to remember).
- **Neuroscience × Yoga (Synthesis)** — how the Gateway brain states map onto
  brainwave physiology and classical yogic stages, the shared mechanisms, a
  toolkit of prāṇāyāma / mantra / concentration practices, and ready-made
  "practice stacks" that pair a short yogic sequence with each Wave.
- **Session logging** — rate body relaxation, focus level reached, vividness,
  and mood; tag what happened (vibrations, imagery, contact, separation…);
  journal freely and record your own takeaways.
- **Progress tracking** — sessions, tapes explored, practice hours, a daily
  streak, and per-Wave completion bars.
- **Profiles** — one per practitioner, each with its own journey and intention.
- **Your data, yours** — export/import your full history as JSON; nothing
  leaves your device.
- **Optional audio** — drop your own tape files in to play them in-app (see below).

## Run locally

```bash
cd gateway-app
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this `gateway-app` folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In [Vercel](https://vercel.com/new), import the repo.
   - If the app is in a subfolder, set **Root Directory** to `gateway-app`.
3. Framework preset auto-detects **Next.js**. Click **Deploy**. Done.

No environment variables are required.

## Audio & streaming links

The Gateway audio files are large and are **not** bundled with this app. Each
tape has a built-in player, and you configure where the audio comes from on the
in-app **Audio** page (`/audio`) — no code changes needed. A tape's playable URL
resolves in this order:

1. **Per-tape link** — paste a unique streaming/signed URL for any single tape
   (always wins). Great for hosts that give each file its own link.
2. **Base URL** — set one base (e.g. `https://cdn.example.com/gateway`) and it's
   joined with each tape's original file path.
3. **Env base** — a build-time `NEXT_PUBLIC_AUDIO_BASE` (see `.env.example`).
4. **Local files** — anything dropped into `gateway-app/public/audio/` preserving
   the folder names, e.g. `public/audio/Wave I - Discovery/CD1 - 1 - Orientation.flac`.

Links are stored in your browser and can be **exported/imported** from the Audio
page (handy when you've pasted many). The `public/audio` folder is git-ignored,
so you never commit large media.

> Notes: `.flac` plays in Chrome/Firefox/Edge but not Safari — convert to `.mp3`
> for the broadest support. Streaming hosts must allow cross-origin playback
> (CORS) and HTTPS range requests for smooth seeking.

## Project structure

```
gateway-app/
├── app/
│   ├── page.tsx            # Dashboard (progress overview)
│   ├── waves/page.tsx      # Library — all Waves & tapes
│   ├── synthesis/page.tsx  # Neuroscience × Yoga synthesis
│   ├── tape/[id]/page.tsx  # Tape detail: technique, tips, takeaways
│   ├── log/[tapeId]/page.tsx  # Session logging form
│   ├── journal/page.tsx    # Full session journal
│   ├── audio/page.tsx      # Audio / streaming-link settings
│   └── profile/page.tsx    # Profiles + data export/import
├── components/             # Nav, UI primitives, AudioPlayer
└── lib/
    ├── tapes.ts            # The full catalog (Waves, exercises, takeaways)
    ├── synthesis.ts        # Neuroscience × Yoga content
    ├── audio.ts            # Audio source config + resolution
    ├── types.ts            # Session/Profile types
    └── store.tsx           # localStorage-backed state + progress math
```

## A note on the content

The exercise descriptions, techniques, and takeaways are distilled from
publicly shared materials (the Wave manuals and the declassified
*Gateway Process* analysis) for personal study. This is a journaling aid,
not medical or psychological advice. Practice responsibly.

## Upgrading to cloud sync (later)

The data layer is isolated in `lib/store.tsx`. To add accounts and cross-device
sync, swap the localStorage calls for a backend (e.g. Vercel Postgres, Supabase,
or Vercel KV) behind the same `useStore()` API — the UI won't need to change.
