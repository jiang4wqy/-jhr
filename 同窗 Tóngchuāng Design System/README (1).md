# 同窗 Tóngchuāng — Design System

> 同窗 _tóng·chuāng_ — classical Chinese for "classmate; one who studied at the same window."
> A bilingual (中英) marriage & matchmaking platform connecting Chinese university students.

---

## What this product is

**同窗 Tóngchuāng** is a curated matchmaking website for current Chinese university students who are open to long-term, marriage-track relationships. The product takes the seriousness of a 婚介 platform and pairs it with the warmth and lightness of campus life — so it never feels transactional or clinical, the way most 相亲 platforms do.

**The shape of the product:**

- **Marketing site** — explains what 同窗 is to students (and curious parents) who land via 小红书 / 朋友圈 / WeChat referrals.
- **Profile page** — the centerpiece. Each student gets a thoughtful, magazine-style page showing their school, major, hobbies, photos, and a written self-introduction. Profiles are the "showing off" the brief asks for — they should feel like 个人主页 for a real person, not a dating-app card.
- **Browse / discover** — lightly curated recommendations rather than infinite swiping. We surface 3–6 thoughtful matches per day.
- **Chat / messaging** — for after a mutual connection, with a warmer-than-WeChat tone.

**Target audience:** current Chinese university students (本科 + 研究生), with a secondary audience of recent grads / young alumni. Bilingual UI (Chinese primary, English secondary).

## Sources & inputs given by the operator

- **Brief:** "一个婚姻介绍网站，需要给我们的大学生展示自己，让别人来结识"
  ("A marriage-introduction website where our university students can show themselves and meet others.")
- **Tone:** 青春活力 — youthful, playful, like a campus dating app
- **Visual direction:** warm pinks / peaches / creams
- **Match mechanic:** curated recommendations + active outreach (DM)
- **Profile emphasis:** school & major; hobbies & interests; photos
- **Type:** modern Chinese sans (思源黑体 / HarmonyOS Sans family)
- **Logo:** typographic / simple — designed by us
- **Number of directions:** one best take (this system)

> No codebase, Figma, or screenshots were provided. This system is built from the brief and the operator's preferences. **Treat every visual decision below as a v1 to be refined with the operator.**

---

## CONTENT FUNDAMENTALS — how 同窗 talks

The voice is **warm, sincere, slightly literary, and never thirsty.** We are a 婚介 platform — but we sound like a thoughtful friend introducing two people, not a dating app shouting about hot singles nearby.

### Voice principles

- **First person plural for the brand, second person to the user.** "我们" (we) and "你" (you) — not 您 (it's too 长辈), not "用户" (it's too 产品经理). Friendly peer, not a stiff service.
- **Show, don't sell.** Profiles should sound like a person, not a résumé. We coach users to write specifics ("我喜欢在图书馆三楼靠窗的位置看书") instead of clichés ("性格开朗，爱好广泛").
- **Earnest > clever.** No puns, no 网络梗 that will date in six months. A good 同窗 line could be cross-stitched onto a pillow.
- **Bilingual but not balanced.** Chinese leads. English appears as a secondary line — usually smaller, lighter, often italic — for tone color, not translation. Do not parallel-translate every string.

### Casing & punctuation

- Chinese: full-width punctuation (，。：？！) for body, half-width inside UI labels and buttons where compactness matters.
- English: sentence case for headings and buttons (`Get started` not `Get Started`), Title Case only for proper names like 同窗.
- We use the em dash — generously — and the ellipsis sparingly. No exclamation marks unless something is genuinely exclaiming.

### Emoji & symbols

- **No emoji in product chrome.** We don't decorate buttons or section headings with 💕 ✨ 🌸. They date instantly and cheapen the brand.
- **Emoji are okay inside user-generated content** — chat messages, self-introductions, hobby tags written by users. That's the user's voice, not ours.
- Where we want a soft visual mark, we use a hand-drawn ornament glyph (a small peach blossom 〇 or a serif `&`), not an emoji.

### Voice examples

| Where | ❌ Wrong | ✅ Right |
|---|---|---|
| Onboarding header | "找到你的真命天子！💕" | "慢一点，认真一点。Slowly, sincerely." |
| Match suggestion | "为你推荐！附近的优质单身" | "今天的三位同学 — Three classmates we'd like you to meet" |
| Empty state | "暂无消息哦~" | "还没有消息。先去看看今天的推荐？" |
| Profile prompt | "请填写您的个人信息" | "讲讲你自己 — 不用太完美" |
| CTA | "立即注册" | "加入同窗" |
| Send a message | "发送" | "说你好" |
| Like a profile | "心动" or "Like" | "想认识" |

### Specific lexicon

- The action of expressing interest is **「想认识」** ("would like to know"), not 喜欢 / 心动 / Like.
- A successful mutual match is **「同窗」** itself — "你们成为同窗了" — leaning into the brand name as a verb.
- A user's profile is their **「自我介绍」**, not 资料 or 个人信息.
- Photos are **「照片」**, not 头像 (avatar) — these are real photographs of the person, framed as such.

---

## VISUAL FOUNDATIONS

### Mood

Warm, sunlit, lightly literary. Think: a café table in Wudaokou (五道口) at 4pm in late spring — paper menus, a pot of hojicha, peach blossoms outside the window. The product should feel **handmade and considered**, never algorithmic.

### Color

A warm-only palette. **No cool blues or greys anywhere structural.** The page background is a cream (`#FDFAF6`) — never pure white. Text is a warm-tinted ink (`#2A1D14`) — never pure black. Borders are tinted creams, never neutral grey.

- **Primary** — peach (`#F4754A`). Used for primary buttons and brand surfaces. Sparingly.
- **Accent** — rose (`#E03E5F`). Used only for the heart / "want to know" action. Never as a brand color.
- **Neutrals** — a cream-to-ink scale, all warm-tinted.
- **Soft accents** — sage / sky / plum / honey for hobby-tag categorization. Muted, never saturated.

See `colors_and_type.css` for the full token list.

### Type

- **Sans (default UI)** — Noto Sans SC for Chinese, DM Sans for Latin. Both round, friendly, contemporary.
- **Display / accent** — Fraunces (Latin) and Noto Serif SC (Chinese). Used for the wordmark and large quote moments.
- **Hierarchy is established by weight + size, not color.** Heading colors should match body text most of the time.
- **Line-height generous** — 1.5 for body, 1.7 for long-form self-introductions. Reading is part of the experience.
- **Italics matter.** Fraunces italic appears in pull-quotes, in the wordmark, and in accent lines. It carries the literary voice.

### Backgrounds & textures

- **Cream paper backgrounds** as the default canvas. Optional very subtle grain texture (≈3–4% noise) on hero sections; never on UI surfaces.
- **No gradients** as primary backgrounds. The one allowed gradient: a soft peach-to-cream radial wash behind the wordmark on the marketing hero.
- **Photos lead, not decorations.** When we use imagery, it is real student photos, treated warm — slight warm tint, soft contrast, never desaturated, never duotone.
- No stock-illustrated couples, no cartoon hearts, no blob shapes.

### Layout

- Generous whitespace. Long-form content uses a 640–880px column.
- Browse / profile cards use a magazine-style grid — varied card heights, intentional rhythm, not a rigid 3×N grid.
- Profile page uses an editorial single-column layout: large name + age + school as a "title block," then photos, then sections (about, interests, looking for) flowing like a long-form article.

### Cards

- Background: pure white (`--tc-bg-2`) on the cream page.
- Border-radius: `--tc-r-lg` (20px) for content cards, `--tc-r-xl` (28px) for hero / profile cards.
- Border: 1px hairline `--tc-border-1`. **No drop shadow by default** — we use the border to define the card.
- On hover: gain `--tc-shadow-2` and lift 2px. The shadow is warm-tinted (peach-brown alpha), never grey.

### Buttons

- Primary: solid peach with white text, radius `--tc-r-full` (pill). On hover, darken to `--tc-peach-400`. On press, darken to `--tc-peach-600` and shrink 1% (transform: scale(0.99)).
- Secondary: cream background `--tc-bg-3`, ink text. Same pill radius.
- Ghost: transparent, ink text, hairline border.
- Heart / "想认识": rose-bordered ghost in default state, rose-filled when active. Never outlined-then-filled with a different color — same hue throughout.

### Borders

- Hairlines (`rgba(42, 29, 20, 0.08)`) for most divisions.
- Visible cream borders (`--tc-cream-200`) when the divider is decorative or content needs more separation.
- Never grey borders. Never dashed borders unless indicating a drop zone or "add another" state.

### Shadows

- All shadows use a warm peach-brown alpha (`rgba(122, 64, 32, …)`), never neutral black.
- 4 elevation levels: hairline / card-hover / floating / modal.
- Inner shadows are not used.

### Hover states

- Buttons: lighter background tint (~10% lighter for primary).
- Cards: lift + shadow.
- Photos: very gentle scale (1.02) over 400ms with `--tc-ease-out`. Never larger than 1.04.
- Links: underline color goes from peach-100 to peach-500.

### Press states

- Subtle scale-down to 0.99 with the `--tc-ease-spring` curve, ~140ms.
- Color darkens by ~one step in the scale.

### Animation

- **Easing** — `--tc-ease-out` for entrances, `--tc-ease-spring` for delightful microinteractions (heart toggle, match reveal).
- **Durations** — fast (140ms), base (220ms), slow (400ms).
- **No bounces in chrome.** Springs are reserved for the heart action and the match-success moment.
- **Entrance animations** are short fades + 6–8px translate-up. No card flips, no carousel autoplay, no scrolling parallax.

### Transparency & blur

- Used sparingly. The only systemic blur is on a bottom navigation bar in the mobile flow, with a `backdrop-filter: blur(20px)` over the cream background.
- Photo overlays for text legibility use a soft peach-tinted vertical gradient (transparent → `rgba(42, 29, 20, 0.5)`).

### Imagery

- Real student photos, warm-toned, slight grain acceptable.
- For placeholder / generic imagery: warm interiors, hands holding tea, blurred bokeh of campus trees, paper textures. Never abstract gradients or 3D renders.
- Photos are clipped to `--tc-r-lg` (20px) corners; never circular profile photos in feeds — circular only for tiny avatars (≤32px).

### Iconography

See **ICONOGRAPHY** below.

---

## ICONOGRAPHY

We use **Lucide** (https://lucide.dev) as the system icon set, loaded from CDN. Lucide is free, open-source, has a consistent 1.5px stroke that pairs well with our soft type, and is widely available.

- **Stroke width: 1.5px** everywhere. Default Lucide is 2px — we override with `stroke-width="1.5"`.
- **Icon size: 20px** in dense UI (buttons, list rows), **24px** for navigation, **32px+** only in empty states and hero sections.
- **Color: inherit `currentColor`.** Never colored icons in chrome — they pick up text color.
- **No filled icons in chrome.** The single exception is the heart / 想认识 toggle, which fills with rose when active.

### Custom marks

- The brand has one custom glyph — the **同窗 wordmark** in `assets/logo/`.
- A peach-blossom **ornament** (single, hand-drawn-feel SVG) is used as a section-break decoration on the marketing site — see `assets/ornament-blossom.svg`.

### What we don't use

- No emoji in product chrome (only in user-generated content).
- No flag / country emoji.
- No animated icons.
- No multi-color icons (Iconify multi-color sets, etc).

> ⚠️ **Substitution flag:** No icon system was provided by the operator. Lucide was chosen as a sensible default. If 同窗's design team standardizes on a different set (e.g. Tabler, Phosphor), swap the CDN reference in the UI kit's `index.html`.

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← Agent Skill manifest (also works in Claude Code)
colors_and_type.css        ← all design tokens (CSS variables)

assets/                    ← brand assets — copy these into any new project
  logo/                    ← 同窗 wordmark in light + dark variants
  ornament-blossom.svg     ← peach-blossom section-break ornament
  placeholders/            ← stand-in profile photos and hero images

preview/                   ← cards rendered in the Design System tab
  type-display.html
  type-scale.html
  colors-primary.html
  colors-neutral.html
  colors-semantic.html
  spacing.html
  radii.html
  shadows.html
  buttons.html
  inputs.html
  cards-profile.html
  cards-suggestion.html
  badges-tags.html
  logo.html

ui_kits/
  website/                 ← marketing + profile + browse + chat
    README.md
    index.html             ← interactive click-thru
    components/            ← Header, ProfileCard, BrowseGrid, ChatPanel, etc.
```

---

## Caveats & open questions

- **Project name 同窗 was chosen by us** — happy to rename to anything you prefer (好窗, 同学社, 半亩塘, etc).
- **Fonts use Google Fonts (Noto Sans SC + Fraunces)** because no font files were provided. If you have brand fonts (思源黑体 / HarmonyOS Sans / a custom face), drop them into `assets/fonts/` and I'll wire them in.
- **Logo is a v1 typographic mark** — not a finished brand mark. Send any logo work you already have and I'll integrate it.
- **No codebase or Figma was attached**, so the UI kit is a from-scratch interpretation, not a recreation. If you have any existing screens, share them and the kit can be made to match.
