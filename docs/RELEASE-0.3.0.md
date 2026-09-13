# TRACE v0.3.0-beta

A monochrome visual update to the existing investigation workbench.

## Presentation

- White torii gate identity replaces the eye/network mark in the app, favicon, empty states, and reports.
- Black surfaces, white primary controls, grayscale metadata, restrained borders, and sharper corners.
- Open overview sections and a compact statistics strip replace the previous boxed dashboard treatment.
- Consistent styling for records, the inspector, editors, graph, timeline, map, tools, settings, and reports.
- Graph categories use distinct shapes and grayscale tones. Status labels remain explicit; uncertain states retain dashed outlines.
- Header layout accommodates the desktop inspector without crowding Capture.

## Compatibility

The database remains schema v2. No tables, migrations, record fields, relationship semantics, or backup formats have changed. Existing browser data stays available when the app is updated at the same origin. Data entered on a different host or in a different browser profile is separate; use the existing export/import controls to transfer it.

No dependencies were added or upgraded. Local startup remains `npm ci` followed by `npm run dev`.

## Validation

- Production build and TypeScript check pass.
- All 41 existing unit tests pass, including database migrations, backup/import boundaries, graph filtering, and inspector history.
- ESLint and formatting checks pass.
- Desktop browser checks cover sidebar collapse/expand, evidence inspection, graph search/type filtering/layouts/node inspection, timeline gaps, offline map layers, tool category filtering, and report generation.

The original application behavior is retained. This is a visual release, not completion of the longer-term analytical roadmap.
