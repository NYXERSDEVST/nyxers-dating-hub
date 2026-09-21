# GitHub Pages push — toppers wire (2026-09-21)

**Ready tree:** `/tmp/nyxers-dating-hub` (git · `origin` → `NYXERSDEVST/nyxers-dating-hub`)  
**Staging only · AI_SYNTHETIC · not auto-canon · 21+ fiction**

## Counts
| Slug | Toppers |
|------|--------:|
| lianne | 6 |
| rene | 6 |
| kim | 6 |
| romy | 6 |
| mila | 6 |
| **total / hub** | **30** |

Mirrored into:
- `/workspace/dating_hub_velvet/assets/generated/velvet/toppers/`
- `Wales/artifacts/dating_hub_v2/assets/generated/velvet/toppers/`
- `Wales/artifacts/dating_hub_velvet/assets/generated/velvet/toppers/`
- `/tmp/nyxers-dating-hub/assets/generated/velvet/toppers/` (+ `social/assets/toppers/` mirror)

## Wired
- `index.html` — Lianne/Romy preferred → toppers; Kim + Mila cards added
- `social/data/social_npc.json` — photosets (Lianne/Romy/Kim/Mila) + René profile
- `social/data/live_feed.json` — people + items → relative toppers URLs
- `MEDIA_SLOTS.md` — toppers section
- Drive note: `Wales/artifacts/SEVERINA_TOPPERS_WIRE_2026-09-21.md`
- `cast_seed.json` v0.3.2 — velvet_hub toppers for lianne/kimberley/romy/mila (+ rene_toppers)

## Parent `gh` push
```bash
cd /tmp/nyxers-dating-hub
git add \
  assets/generated/velvet/toppers \
  social/assets/toppers \
  index.html \
  social/data/social_npc.json \
  social/data/live_feed.json \
  MEDIA_SLOTS.md \
  PAGES_PUSH_INSTRUCTIONS.md
git status
git commit -m "$(cat <<'MSG'
Wire VELVET/NYXLINK gallery toppers (Lianne René Kim Romy Mila)

Staging AI_SYNTHETIC stills from Drive 07_AI_GALLERY into velvet/toppers
and NYXLINK social photosets. Not auto-canon. 21+ fiction.
MSG
)"
git push origin main   # or: gh auth + push — parent owns push
```

Pages-safe relative paths:
- Hub cast: `assets/generated/velvet/toppers/<file>.png`
- Social (from `social/data/`): `../assets/generated/velvet/toppers/<file>.png`
