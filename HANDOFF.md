# Sullivans Meet — Handoff

Updated with every commit. Read this first if you're picking the project up cold. The newest commit-log row is labeled `HEAD`; the following commit replaces that with the real hash.

## Where things live

| Thing | Location |
|---|---|
| Live site | https://sullivans-meet.vercel.app |
| GitHub | https://github.com/butlerjm1/sullivansMeet (private, branch `main`) |
| Vercel project | `sullivans-meet` on the Butler team (`butler4`), framework preset "Other" |
| Local dev | `npx serve .` from the repo root, or open `index.html` directly |

Deploys are automatic: every push to `main` goes to production, other branches get preview URLs. Deployment-specific `*-butler4.vercel.app` URLs sit behind Vercel's login by default; the public alias above does not.

## Current state

- **16 Sullivans** in `js/data.js`. Four are Reserve (premium): Chudwick, KnobSlauch, Thrustworth, Tenderloin (id 16, even id with `likesBack: true` so he matches when Hope likes him). One is in Cork (O'Sullivan, id 14, 4,600 mi); the distance filter's "Anywhere" value of 99 is treated as unlimited so he shows.
- **Sullivan Reserve** paywall: locked Sullivans are blurred with scrambled surnames until Hope buys a plan at `#/premium`. Mock checkout, nothing is charged. Membership is in-memory; refresh re-locks. A matched Reserve Sullivan stays unlocked after cancelling.
- **Hope** is the single logged-in user. Her avatar is blue (`--hope` tokens). Copy on the Reserve page is member-neutral, not Hope-exclusive.
- **Sullivan Sullivan** (id 11) holds the only 100% score. Grimsby's "record" copy is scoped to non-Sullivan surnames. Keep it that way if adding high scorers.
- **Removed from the Registry** (banned men): a separate `BANNED` array in `js/data.js` (ids 17 Bramblewick "Sully", 18 Todd Sullivan "Todd", 19 Pratt "Dave" a Sullivan since Tuesday, 20 Tran who spelled it Sulivan once). Rendered by `bannedHTML()` at the bottom of Discover, permanently blurred with a red Banned ribbon, a case pill, and a `<details>` "Read the file" disclosure. They are not in `SULLIVANS`, so they never count, rank, filter, match, or unlock. Photos are `assets/sullivan-17.png` through `-20.png`; ids continue the Sullivan sequence so photo numbering stays unique.
- **The Sullivan Code** (`SULLIVAN_CODE` in `js/data.js`): seven sections, § 4 redacted on purpose. Opened by `openCodeModal()` from the Registry section, the report modal, and the case outcome. Banned `code` fields and report `cite` fields refer to it; keep them consistent when adding sections.
- **Report a Sullivan**: `reportLinkHTML()` under the profile photo on unlocked profiles. `REPORT_REASONS` in `js/data.js` holds the five reasons and outcomes. `state.reports` maps Sullivan id to `{ caseNo, reason, filed }`; case numbers start at SC-0613 and count up. Cases render into Recent Activity via `reportTimelineItems()`. Sullivan Sullivan (id 11) has a special outcome in `reportOutcomeText()`.
- **Reserve count is data-driven** almost everywhere (`premiumSullivans().length`, `RESERVE.count`). The Reserve hero card fan and the Discover banner avatar pile size themselves from CSS vars (`--mid`, `--n`) set inline in `js/app.js`, so adding a fifth Reserve Sullivan needs no CSS change.
- **Card density toggle** on the Discover toolbar: comfortable (default on desktop) or compact (default on phones, two cards per row). The only thing persisted across refreshes, via `localStorage` key `sullivans-meet:density`. Compact applies to the Reserve page previews too. Toggling flips the `grid--compact` class on every `.grid` in the DOM (Discover deck, Removed from the Registry, Reserve previews) rather than re-rendering, so all grids always agree.
- **Card top row**: a `.ribbon` sits on the same row as the score pill; the left-hand badge slot gets `margin-top: var(--ribbon-h) + 6px` so it drops under the ribbon (27px comfortable, 21px compact, 18px compact on phones). Words wrapped in `.compact-word` ("Sullivan" in ribbons, "Case " in the case pill) are hidden in the compact grid under 600px. Separator dots in `.pcard-meta` and `.profile-sub` are drawn as `::before` in the column gap and clipped at the line start, so never edit the `.dot` spans expecting them to render.
- All other state is front-end and resets on refresh by design.

## Adding a Sullivan (checklist)

1. Copy the photo to `assets/sullivan-N.png`.
2. Add an entry to `SULLIVANS` in `js/data.js` (next id, `premium: true` only for Reserve). Odd ids auto like-back a few seconds after Hope likes them; even ids only match if `likedYou: true` or `likesBack: true`.
3. Add `MATCH_COPY[N]`, `PERSONA_REPLIES[N]` in `js/data.js` and `QUICK_REPLIES[N]` in `js/app.js`.
4. Optionally add a Recent Activity line in `matchesHTML()` in `js/app.js`.
5. Bump the count in three places: the splash line in `runSplash()` (`js/app.js`), the header comment in `js/data.js`, and the **README** (three mentions: the `js/data.js` line, the `assets/` line, and the Reserve paragraph). The Discover hero count is automatic but the number-words array in `discoverHTML()` must extend past `SULLIVANS.length`.
6. If the new Sullivan is **Reserve**, also bump the hardcoded Reserve count: `RESERVE.count` and the first plan's "Full access to all N Reserve Sullivans" feature in `js/data.js`; the premium hero lede ("N verified Sullivans"), the locked-profile CTA ("And N more Reserve Sullivans"), and the splash line in `js/app.js`; the README Reserve mentions; and the header comment in `js/data.js`. Give him a `teaser` (shown while locked).
7. Run `node --check js/app.js js/data.js`, eyeball it locally, commit, push, update this file.

## Adding a banned man (checklist)

1. Photo to `assets/sullivan-N.png` using the next id after the last Sullivan or banned entry.
2. Add to `BANNED` in `js/data.js`: `name`, `alias`, `age`, `city`, `img`, `caseNo`, `code` (Sullivan Code section), `infraction` (short pill), `since`, `file` (the paragraph), `verdict`. Optional `strike: "first" | "last"` picks which part of the name is struck through; the default strikes a non-Sullivan first name, else the surname.
3. Nothing else is required. Optionally adjust the Recent Activity line in `matchesHTML()` ("Two men were removed"), the splash line, and the README count of banned men.
4. Run `node --check js/app.js js/data.js`, eyeball it locally, commit, push, update this file.

## Commit log

| Commit | What |
|---|---|
| `fd978dd` | Initial import: static site, Reserve tier, plans page, mock checkout, 11 Sullivans |
| `10c0d73` | Ignore Vercel local files (`.vercel`, `.env*`) |
| `8f3a315` | Add Sullivan Vandersmooth (id 12), realtor and podcast host, Scottsdale |
| `2383836` | Add Sullivan Yeehawthorne (id 13), rancher and rodeo announcer, Amarillo. Add this handoff. |
| `039116f` | Fix handoff commit-log convention: newest row is `HEAD`, its hash is filled in by the next commit. |
| `ffd97b3` | Add Sullivan O'Sullivan (id 14), Cork publican, the Irish Sullivan. "Anywhere" distance now unlimited; `likesBack` flag for even ids. |
| `09b6502` | Card density toggle (comfortable / compact) on Discover, remembered per browser, compact by default on phones. |
| `d666893` | Add Sullivan Throttlebottom (id 15), serious biker, aspiring reader, Sturgis. |
| `e39cd32` | Fix double-width gap in the "N% match" pill introduced by the compact-card word wrapper. |
| `be54b7e` | Add Sullivan Tenderloin (id 16), Reserve, late-night jazz radio host, Chicago. Reserve count 3 → 4 everywhere; hero fan and banner avatar pile now size from the count. |
| `24e0a7c` | Add "Removed from the Registry": two banned men (17 Sully, 18 Todd) in a separate `BANNED` array, blurred cards with case files at the bottom of Discover. |
| `370615b` | Rename the banned man and every other Greg on the site to Todd (the splash line and Grimsby's prompt included). Banned-card blur eased from 14px to 7px. |
| `3120ec1` | Two more banned men: Pratt (19), a Sullivan since Tuesday, and Tran (20), who spelled it Sulivan once in 2019. Optional `strike` field on banned entries. |
| `575c38b` | The Sullivan Code (modal, § 4 redacted) and Report a Sullivan (reason picker, case number, outcome, Recent Activity row). Reserve Obsidian plan card restyled as black glass with a gold edge, "By invitation" flag, ivory button; Reserve stays white, Gold stays the dark-brown popular card. |
| `HEAD` | Mobile/desktop wrap fixes: card ribbons no longer push the score pill down (only left-hand badges drop below a ribbon, via `--ribbon-h`); compact phone cards shorten ribbon/case-pill words (`.compact-word`); age + verified badge wrap together; separator dots never start or end a line; count pills stop wrapping internally; Hope's plan pill lost its collision with the `.plan` pricing class; density toggle now flips every grid on the page (banned registry included). |

## Working conventions

- Update this handoff and the README Sullivan count on every commit that adds a Sullivan.
- Commit identity is Jake Butler with the GitHub noreply address, set in the repo's local git config.
- No build step, no dependencies, no framework. Keep it that way unless asked.
- **Never use the name Greg anywhere on the site.** It's the name of Jake's real-life boss, who may be shown the site. The generic-non-Sullivan punchline name is Todd.
