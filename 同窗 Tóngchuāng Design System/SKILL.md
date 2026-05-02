---
name: tongchuang-design
description: Use this skill to generate well-branded interfaces and assets for 同窗 Tóngchuāng — a warm, sincere, campus-marriage matchmaking website for Chinese university students. Bilingual (CN-primary, EN-secondary). Contains design tokens, voice & content rules, fonts, brand assets, and reusable React components for the website (marketing, browse, profile, chat).
user-invocable: true
---

# 同窗 Tóngchuāng design system

Read **`README.md`** first — it's the source of truth for voice, color, type, layout, and motion. Then explore:

- `colors_and_type.css` — all design tokens (CSS variables: `--tc-peach-*`, `--tc-cream-*`, `--tc-ink-*`, type scale, spacing, radii, shadows, motion).
- `assets/logo/` — wordmark + 同 app mark in light and dark variants.
- `assets/ornament-blossom.svg` — peach-blossom section-break ornament.
- `assets/placeholders/` — warm-toned procedural portrait + scene placeholders.
- `preview/` — small specimen cards for every part of the system.
- `ui_kits/website/` — interactive click-thru with React components for marketing landing, browse/discover grid, magazine-style profile page, and chat. `App.jsx` is the entrypoint; `components/*.jsx` are modular and copy-pasteable.

## When making throwaway artifacts (slides, mocks, prototypes)

Copy what you need out of `assets/` and write static HTML files referencing `colors_and_type.css`. Keep imagery warm, type generous, copy bilingual with CN leading. Use peach (#F4754A) sparingly and only for primary actions; rose (#E03E5F) only for the heart / 想认识 toggle.

## When making production code

Read the rules in `README.md` carefully. Lift CSS variables from `colors_and_type.css` directly. Match the voice — earnest, slightly literary, never thirsty. Specific lexicon: 「想认识」 (not 喜欢/like), 「同窗」 as the success state for a mutual match, 「自我介绍」 (not 资料), 「说你好」 (not 发送).

## If invoked without context

Ask the user what they want to build (a slide? a marketing page? a feature? a flow?), then act as an expert designer rooted in this system, outputting HTML artifacts or production-ready code as appropriate.
