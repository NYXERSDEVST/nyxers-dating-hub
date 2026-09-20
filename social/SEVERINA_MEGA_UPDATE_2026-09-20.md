# SEVERINA MEGA UPDATE — 2026-09-20

**Build:** `nyxlink-build` **v7-mega**  
**Scope:** Dating hub social shell (Pulse · Gram · Clips · Wire · Calls)  
**Gates:** 21+ fiction only · first-name aliases · Wire ≠ WhatsApp · no real FB/IG/WA/TikTok · no real porn stars · age-gate + SIMULATED SOCIAL banner · staging / no auto-canon

## Synced paths
1. `Wales/artifacts/dating_hub_v2/social/`
2. `/workspace/dating_hub_velvet/social/`
3. `Wales/artifacts/dating_hub_velvet/social/`

## Counts
| Metric | Value |
|--------|------:|
| NPC total | 38 |
| Fiction women (non-Maat) | 37 |
| New women added (this mega) | 16 |
| Photosets (≥3 slots) | 38 |
| People with status | 38 |
| People with graph links | 38 |
| live_feed items | 26 |
| live_feed people | 39 |
| i18n languages | 10 |
| emoji reactions | 10 |

### New women (DE/NL first names)
Noa, Fenja, Jule, Britta, Imke, Nora, Freya, Sanne, Eva, Isa, Femke, Yara, Nadja, Pia, Caro, Lieke

Roles mixed: vriendin · familie · collega · werk · ex · affaire-hint (consensual adult fiction).

## Features shipped
1. **Photosets** — 3–6 slots per core/eurotik/new woman; velvet/eurotik stills where available; else FICTION 21+ SVG/gradient placeholders (no porn binaries). Profile sheet opens photoset grid + lightbox.
2. **Relationship / work graph** — `status: single|relatie|geopend|affaire_hint|werk|ex` + `links: [{to,type}]`. Drama engine prefers linked NPCs; new drama types: `ex_spicy`, `werk_note`, `affaire_hint`.
3. **Richer reactions** — ❤️😂😮😢😡🔥👏💯🤢🙈 + floating reaction picker. Role-styled NPC reactions (familie worried, vriendin jealous, collega professional, ex spicy, affaire-hint hush).
4. **Simulated calls** — Audio + video call modal from Wire thread or profile. Video: photoset still + fake LIVE pulse + timer. Audio: avatar + waveform. Mute / cam / end. Post-call Wire: “Gemiste call” / “Call beëindigd · m:ss”. Banner: **SIMULATED CALL · geen echte telefonie**.
5. **i18n** — `data/i18n.json`: nl, en, de, fr, es, it, pl, pt, tr, ar. Language picker in Me/settings; `localStorage` persist; default **nl**.
6. **Polish** — cache meta `nyxlink-build=v7-mega`; feed seed key `nyxlink_feed_v4`; live_feed kept 23+ items (now 26) with new authors merged.

## Explicit non-goals / keep
- No real social OAuth or external messengers
- Wire is **not** WhatsApp
- Staging only — no auto-canon into Severina lore
- Website-only telephony simulation

## Local verify
```
http://127.0.0.1:8765/social/
```
Serve from dating hub root so `../assets/...` resolves.

---
Generated Europe/Amsterdam · staging note · fiction cast
