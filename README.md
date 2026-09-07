# Sullivans Meet

*The right man. The right name.*

A fully static mock dating platform for exactly one user (Hope) and exactly one kind of man (named Sullivan).

## Run it

No build step, no dependencies. Either:

- Double-click `index.html`, or
- Serve the folder (for example `npx serve .` or `python -m http.server`) and open the printed URL.

## What's inside

```
index.html      shell: header, nav, mobile tab bar, footer
css/styles.css  design system (tokens, components, responsive rules)
js/data.js      the sixteen Sullivans (four Reserve), four banned men, plans, FAQ, seeded conversations, match copy
js/app.js       hash-routed single-page app, all state kept in memory
assets/         the sixteen profile photos, plus four banned men (17–20)
```

Screens: Discover (`#/discover`), full profile (`#/profile/:id`), Matches (`#/matches`), Messages (`#/messages/:id`), Sullivan Reserve plans and mock checkout (`#/premium`), Hope's profile and settings (`#/hope`).

Everything is front-end state. Refreshing the page resets Hope's day. The one exception is the card-size toggle on Discover (comfortable or compact), which is remembered per browser; phones default to compact.

## Removed from the Registry

Four men appear at the bottom of Discover, permanently blurred, with a red Banned ribbon and a case file explaining their violation of the Sullivan Code (one answers to "Sully," one is a Todd, one has been a Sullivan since Tuesday, one spelled it with one L in 2019). They live in a separate `BANNED` array in `js/data.js`, so they're never counted, ranked, matched, or unlockable. Each card has a "Read the file" disclosure with the infraction and the Bureau's verdict. A "Read the Sullivan Code" link opens the full Code (`SULLIVAN_CODE` in `js/data.js`, seven sections, § 4 redacted).

## Report a Sullivan

Every unlocked profile has a "Report to the Bureau" link. Hope picks a reason (`REPORT_REASONS`), the Bureau opens a case with a number and a deadpan outcome, and the case shows up in Recent Activity on Matches. Cases never close. Reporting Sullivan Sullivan has its own outcome. Reports live in memory like everything else.

## Sullivan Reserve

Four of the sixteen Sullivans are premium. Until Hope buys a Reserve plan they appear blurred, with surnames withheld, on Discover, Matches, and their profile pages. The `#/premium` page lists the plans (Reserve, Reserve Gold, Reserve Obsidian, monthly or annual) and runs a mock checkout. Any card-shaped number is accepted and nothing is charged. Membership lives in memory like everything else, so a refresh re-locks them. A Reserve Sullivan Hope has already matched with stays unlocked if she cancels.
