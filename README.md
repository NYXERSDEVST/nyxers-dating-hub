# NYXERS Dating Hub (v2)

**MEET. CHAT. CONNECT** — Realistic AI dating / AI-girlfriend hub voor René / NYXERS · OPENAIPLATFORM.

> **Explicit 21+** · Alleen fictie · Geen echte dating · Geen content van minderjarigen.

## Openen (geen build-stap)

1. Open dit bestand direct in de browser:
   - `index.html` (file://) **of**
   - serve de map lokaal, bijv. `python3 -m http.server 8765` vanuit deze directory en ga naar `http://localhost:8765/`
2. Bevestig de **21+** age-gate.
3. Optioneel: **Install PWA** via browser (Add to Home Screen / Install) — `manifest.webmanifest` + `sw.js`.

Pad op disk:

`/home/box/agent-data/nyxers-ai-drive/Wales/artifacts/dating_hub_v2/`

## Schermen

| Scherm | Inhoud |
|--------|--------|
| **Home** | Hero *MEET. CHAT. CONNECT* + CTA’s: Find character / Create character / AI photo and video |
| **Discover** | AI GIRLFRIENDS grid · filters All / Popular / New / Naughty |
| **Profile** | Grote foto · Online · Chat / Like / Gallery / Skip |
| **Chat** | Dark bubbles · “Send me a photo” · voice stub · floating video preview · NL/EN flirty 21+ |
| **Studio** | Create AI Photo / Video — prompts → `localStorage` queue voor SuperAgent later |
| **Likes / Profile** | Bottom nav · lokale likes/matches |

## Personages (fictie, curvy/plussize default)

| Naam | Asset |
|------|--------|
| Sabine | `assets/sabine_ref_01_robe_bedroom.jpg` |
| Fatima | `assets/fatima_ref_01_squat_dark_car.png` |
| Lianne | `assets/lianne_ref_marktplaats_aerox.jpg` |
| Romy, Kassandra, Kimberley | Placeholder tot nieuwe assets |

Gallery-slots zijn gemarkeerd **NSFW**; chat kan foto/video *requesten* (stub / bestaande ref-foto).

## Data (localStorage)

- `nyxers_dh_age21` — age-gate
- `nyxers_dh_likes` / `nyxers_dh_matches`
- `nyxers_dh_chats` — berichten per character
- `nyxers_dh_studio_queue` — photo/video prompt-requests

## Generatie (nog niet in deze PWA)

Echte AI photo/video vereist later **REALISM / SuperAgent / xAI**.  
Deze hub slaat alleen queue-items op; er wordt niets gegenereerd in de browser.

## Merk

Origineel: **NYXERS Dating Hub** / OPENAIPLATFORM. Geen concurrent-logo’s of -namen.

## Bestanden

- `index.html` — SPA (mobile-first, dark, rood/oranje accents)
- `manifest.webmanifest` — PWA
- `sw.js` — offline shell cache
- `icons/icon-192.png`, `icons/icon-512.png`
- `assets/` — referentiebeelden
- `BUILD_NOTES.md` — korte build-notities
