# Dating Hub v2 — MANIFEST_REALISM

**Written:** 2026-09-20 03:24 CEST (Europe/Amsterdam)  
**Hub drop:** `Wales/artifacts/dating_hub_v2/assets/generated/`  
**Hard gates:** everyone 21+, fictional only, no real porn stars/models  
**Canon gate:** **AI_SYNTHETIC staging — NOT auto-canon until René OK**

## Generator note
- Requested path `cursor.GenerateImage` (CallDynamicTool / namespace cursor) was **unavailable** this session (cursor MCP not reachable).
- Stills produced via fallbacks: OpenRouter `google/gemini-2.5-flash-image` (look-lock with refs where credits allowed) + Hugging Face `FLUX.1-Krea-dev` (9:16).
- **No MP4s fabricated.** I2V entries are prompt stubs only.

## Still files (16)

| File | Role | Notes |
|------|------|-------|
| sabine_discover.png | Discover card | Gemini+refs → look-lock; vertical |
| sabine_chat_bg.png | Chat bg | Gemini+refs; softer mood |
| sabine_gallery_1.png | Gallery NSFW lingerie couch | FLUX Krea 9:16 |
| sabine_gallery_2.png | Gallery NSFW robe/bedroom | FLUX Krea 9:16 |
| sabine_gallery_3.png | Gallery NSFW hoodie/lingerie | FLUX Krea 9:16 |
| fatima_discover.png | Discover card | FLUX Krea 9:16; floral sleeve |
| fatima_chat_bg.png | Chat bg | FLUX Krea softer |
| fatima_gallery_1.png | Gallery NSFW lingerie | FLUX Krea; sleeve readable |
| fatima_gallery_2.png | Gallery NSFW car tease | FLUX Krea |
| fatima_gallery_3.png | Gallery NSFW bedroom | FLUX Krea |
| lianne_discover.png | Discover card | FLUX Krea 9:16; tattoos |
| lianne_chat_bg.png | Chat bg | Gemini soft + 9:16 crop fix |
| lianne_gallery_1.png | Gallery lingerie | Gemini (late); AI_SYNTHETIC |
| lianne_gallery_2.png | Gallery hoodie tease | Gemini (late); AI_SYNTHETIC |
| lianne_gallery_3.png | Gallery bedroom tease | Derived soft variant of gallery_1 after credits exhausted — **re-gen recommended** |
| kayla_hub_cast.png | Optional hub-cast | Invented fiction Kayla 21+; not a real model |

## I2V (prompt-only)

| File | Source still | Video |
|------|--------------|-------|
| sabine_i2v_01.md | sabine_discover.png | **stub only — no MP4** |
| fatima_i2v_01.md | fatima_discover.png | **stub only — no MP4** |
| lianne_i2v_01.md | lianne_discover.png | **stub only — no MP4** |

## Also copied to character galleries
- `characters/Sabine/07_AI_GALLERY/generated/` — sabine_*.png (5)
- `characters/Fatima/07_AI_GALLERY/generated/` — fatima_*.png (5)
- `characters/lianne_Visser/07_AI_GALLERY/generated/` — lianne_*.png (5)

## Failures / limits this run
- cursor.GenerateImage: unavailable
- OpenRouter credits largely exhausted mid-batch (402)
- Gemini native free-tier quota 429
- HF ZeroGPU quota exhausted after ~8 Krea gens
- Pollinations / xAI image: unavailable or out of credits
- Lianne gallery_3: credits died mid-gen → soft derivative of gallery_1 (flagged)

## Success checklist
- [x] Sabine discover + chat_bg + gallery_1..3
- [x] Fatima discover + chat_bg + gallery_1..3
- [x] Lianne discover + chat_bg + gallery_1..3
- [x] kayla_hub_cast.png
- [x] 3 I2V stub .md files
- [x] MANIFEST_REALISM.md
- [x] No fabricated videos
