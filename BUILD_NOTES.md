# BUILD_NOTES — dating_hub_v2

**Datum:** 2026-09-20 (Europe/Amsterdam)  
**Doelpad:** `/home/box/agent-data/nyxers-ai-drive/Wales/artifacts/dating_hub_v2/`

## Aangemaakt / vervangen

| Pad | Rol |
|-----|-----|
| `index.html` | Mobile-first SPA (hash + bottom nav), age-gate 21+, alle schermen |
| `manifest.webmanifest` | PWA manifest (standalone, dark theme) |
| `sw.js` | Service worker — cache shell + assets |
| `README.md` | NL uitleg openen + SuperAgent-disclaimer |
| `BUILD_NOTES.md` | Dit bestand |
| `icons/icon-192.png` | PWA icon |
| `icons/icon-512.png` | PWA icon |

## Bestaande assets (ongewijzigd)

- `assets/sabine_ref_01_robe_bedroom.jpg`
- `assets/fatima_ref_01_squat_dark_car.png`
- `assets/lianne_ref_marktplaats_aerox.jpg`

## Gates / constraints

- Explicit 21+ badge + age-gate (localStorage)
- Fiction-only characters: Sabine, Fatima, Lianne, Romy, Kassandra, Kimberley
- Geen Candy.ai / concurrent branding
- NSFW gallery slots + chat photo request (geen minors)
- Studio queue → localStorage voor latere SuperAgent/xAI/REALISM

## Verificatie

Open `index.html` zonder build. SW registreert bij http(s); file:// werkt voor UI, SW optioneel.

## REALISM integrate (2026-09-20 ~03:25 CEST)

- Wired `assets/generated/*` discover / chatBg / gallery stills for Sabine, Fatima, Lianne.
- Added optional Kayla hub-cast (`kayla_hub_cast.png`).
- I2V `*_i2v_01.md` kept as prompt stubs only — **no MP4s**.
- SW cache bumped to `nyxers-dating-hub-v2-realism1` (discover + chat_bg precache; galleries runtime-cached).
- Gate: AI_SYNTHETIC staging; all cast ages ≥21; fiction only.
- Note: `lianne_gallery_3.png` soft derivative — re-gen later.
