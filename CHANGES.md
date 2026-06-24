# Turīya — Development Log

## Current Stack
- **Framework:** Next.js 14.2.35 (App Router, TypeScript)
- **Styling:** Tailwind CSS (custom dark theme — ink/aura/gold palette)
- **Storage:** localStorage (local) + Cloudflare Workers KV (cloud sync)
- **Audio:** Cloudflare R2 (`pub-48e126480aac4d3f8fa1658d5c3cfa66.r2.dev`)
- **Deploy target:** Vercel

---

## Pages

| Route | Description |
|---|---|
| `/` | Dashboard — stats, progress bars, recent sessions |
| `/waves` | Library — 8 Waves, 46 tape cards with sticky wave jump nav |
| `/tape/[id]` | Tape detail — techniques, tips, audio player, session history |
| `/log/[tapeId]` | Session logger — ratings, tags, journal, duration |
| `/journal` | Full session history with wave filter |
| `/profile` | Profiles, cloud sync, data export/import |
| `/synthesis` | Neuroscience × Yoga — desktop sidebar + mobile pill nav |
| `/audio` | Audio config (hidden from nav, accessible directly) |

---

## Infrastructure

### Cloudflare R2 — Audio
- Bucket: `turiyaapp`
- Public base URL: `https://pub-48e126480aac4d3f8fa1658d5c3cfa66.r2.dev`
- 46 MP3 files across 8 Wave folders
- Configured statically in `lib/config.ts`
- URL resolution order: per-tape override → user base URL → config base → local `/audio/`

### Cloudflare Worker — Cloud Sync
- Worker name: `turiya-sync`
- URL: `https://turiya-sync.vnvnsairam.workers.dev`
- KV namespace: `TURIYA_KV` (id: `d8911117d29c49efab83449ed5306407`)
- Endpoints: `GET /sync/:key`, `PUT /sync/:key`, `DELETE /sync/:key`
- Worker code lives in `worker/` — deploy with `cd worker && wrangler deploy`

### Cloud Sync Flow
1. App opens → pulls latest data from KV (if sync key set)
2. Any data change → auto-pushes to KV
3. Works across unlimited devices with the same sync key

---

## Key Files

| File | Purpose |
|---|---|
| `lib/config.ts` | Static app config (R2 base URL) |
| `lib/tapes.ts` | 46 tape catalog with audioFile paths (.mp3) |
| `lib/store.tsx` | Data store — localStorage + cloud sync on every change |
| `lib/sync.ts` | Cloud sync helpers — push/pull to Cloudflare Worker |
| `lib/audio.ts` | Audio URL resolution logic |
| `lib/synthesis.ts` | Neuroscience × Yoga content data |
| `components/AudioPlayer.tsx` | Custom audio player (play/pause, scrub, mute) |
| `components/SynthesisTOC.tsx` | Sticky TOC nav for Synthesis page |
| `components/Nav.tsx` | Top nav (Audio page hidden) |
| `worker/src/index.js` | Cloudflare Worker sync API |
| `worker/wrangler.toml` | Worker + KV config |

---

## Changelog

### 2026-06-24
- Fixed audio player event listeners not attaching (showPlayer timing bug)
- Changed all audio file extensions from `.flac` to `.mp3`
- Added `lucide-react` icons to audio player (Play/Pause/Volume)
- Built custom audio player UI (scrub bar, time display, mute toggle)
- Added static R2 audio config in `lib/config.ts`
- Integrated Cloudflare R2 as audio source (all 46 files verified 200 OK)
- Added sticky Wave jump strip to Library page (I–VIII pills with IntersectionObserver)
- Hidden Audio page from nav (still accessible at `/audio`)
- Added Cloudflare Workers + KV cloud sync for cross-device profiles
- Auto-pull from cloud on app load; auto-push on every data change
- Added cloud sync UI to Profile page (enable, copy key, connect, push now)
- Moved worker code into `worker/` inside repo
- Fixed git credentials for khaaali account pushes

---

## Known Gaps / Ideas for Future

- [ ] Pull-to-refresh button on Dashboard to force cloud sync
- [ ] Conflict resolution if two devices write simultaneously
- [ ] Push notifications / reminders to practice
- [ ] Streak freeze / grace period setting
- [ ] Audio playback speed control (0.75×, 1×, 1.25×)
- [ ] Offline indicator when cloud sync unavailable
- [ ] Vercel deployment docs
