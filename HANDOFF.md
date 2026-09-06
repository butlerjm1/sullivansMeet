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

- **15 Sullivans** in `js/data.js`. Three are Reserve (premium): Chudwick, KnobSlauch, Thrustworth. One is in Cork (O'Sullivan, id 14, 4,600 mi); the distance filter's "Anywhere" value of 99 is treated as unlimited so he shows.
- **Sullivan Reserve** paywall: locked Sullivans are blurred with scrambled surnames until Hope buys a plan at `#/premium`. Mock checkout, nothing is charged. Membership is in-memory; refresh re-locks. A matched Reserve Sullivan stays unlocked after cancelling.
- **Hope** is the single logged-in user. Her avatar is blue (`--hope` tokens). Copy on the Reserve page is member-neutral, not Hope-exclusive.
- **Sullivan Sullivan** (id 11) holds the only 100% score. Grimsby's "record" copy is scoped to non-Sullivan surnames. Keep it that way if adding high scorers.
- **Card density toggle** on the Discover toolbar: comfortable (default on desktop) or compact (default on phones, two cards per row). The only thing persisted across refreshes, via `localStorage` key `sullivans-meet:density`. Compact applies to the Reserve page previews too.
- All other state is front-end and resets on refresh by design.

## Adding a Sullivan (checklist)

1. Copy the photo to `assets/sullivan-N.png`.
2. Add an entry to `SULLIVANS` in `js/data.js` (next id, `premium: true` only for Reserve). Odd ids auto like-back a few seconds after Hope likes them; even ids only match if `likedYou: true` or `likesBack: true`.
3. Add `MATCH_COPY[N]`, `PERSONA_REPLIES[N]` in `js/data.js` and `QUICK_REPLIES[N]` in `js/app.js`.
4. Optionally add a Recent Activity line in `matchesHTML()` in `js/app.js`.
5. Bump the count in three places: the splash line in `runSplash()` (`js/app.js`), the header comment in `js/data.js`, and the **README** (three mentions: the `js/data.js` line, the `assets/` line, and the Reserve paragraph). The Discover hero count is automatic but the number-words array in `discoverHTML()` must extend past `SULLIVANS.length`.
6. Run `node --check js/app.js js/data.js`, eyeball it locally, commit, push, update this file.

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
| `HEAD` | Fix double-width gap in the "N% match" pill introduced by the compact-card word wrapper. |

## Working conventions

- Update this handoff and the README Sullivan count on every commit that adds a Sullivan.
- Commit identity is Jake Butler with the GitHub noreply address, set in the repo's local git config.
- No build step, no dependencies, no framework. Keep it that way unless asked.
