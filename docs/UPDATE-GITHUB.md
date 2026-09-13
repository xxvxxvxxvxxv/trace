# Update TRACE on GitHub

This release is v0.3.0-beta. The `trace-v0.3.0-beta-update.zip` package contains replacement files for the existing repository. The separate source ZIP is a complete local project.

## Browser upload

1. Download and unzip `trace-v0.3.0-beta-update.zip` on your Mac.
2. Open the existing [TRACE repository](https://github.com/xxvxxvxxvxxv/trace-investigation-workbench).
3. Select **Add file → Upload files**.
4. Drag every file and folder from **inside** the extracted update folder into the upload area. Upload the contents, not the ZIP or its enclosing folder. Keep the nested `src`, `public`, `screenshots`, and `docs` folders intact.
5. Confirm that GitHub shows replacements at the original paths, such as `src/styles/identity.css` and `public/trace-mark.svg`.
6. Use the commit message `Update TRACE to v0.3.0-beta — monochrome torii identity` and commit to `main`.
7. Open **Actions** and wait for the existing Pages deployment to finish successfully.
8. Open the existing demo and refresh with **Cmd + Shift + R**. The footer should read `v0.3.0-beta · Local-first`, with a white torii gate in the sidebar.

The update package does not replace your working deployment workflow. There is no need to change Pages settings, authentication, or the demo URL. The README keeps its ordinary demo link and has no deployment badges.

## Local use

Unzip the complete source package. Open Terminal, type `cd ` (including the space), drag the extracted project folder into Terminal, and press Return. Then run:

```bash
npm ci
npm run dev
```

Open the local URL printed in Terminal. Keep that terminal running while using TRACE locally.

## Existing investigation data

Before updating, use **Settings → Export entire database** to keep a backup outside the repository. Updating code at the same GitHub Pages address does not clear browser IndexedDB. Keep using the same browser profile. A new host, profile, or local server origin has separate storage; import the backup there if needed. Do not upload investigation backups to GitHub.
