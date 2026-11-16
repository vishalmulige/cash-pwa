CASH — STAGE 1 (PWA UI STARTER)
================================

WHAT IS INCLUDED
- Premium dark dashboard and responsive iPhone layout
- Navigation: Overview, Borrowers, Loans, Activity, Settings
- PWA manifest and app icons
- Service worker for offline app-shell caching
- No external libraries, trackers, fonts or remote assets
- No real financial data or borrower records in Stage 1

IMPORTANT PRIVACY NOTE
The app shell is a set of web files. If you host these files on GitHub Pages,
the files are publicly accessible. Stage 1 does not send borrower data anywhere
because borrower/loan data entry and storage have not been built yet.
Stage 2/3 will add on-device IndexedDB storage and export/backup controls.

RUN LOCALLY ON WINDOWS
1. Extract Cash_PWA_Stage1.zip.
2. Open the extracted folder in Visual Studio Code.
3. Install the "Live Server" extension by Ritwick Dey.
4. Right-click index.html and choose "Open with Live Server".
5. The app opens in your desktop browser, usually at http://127.0.0.1:5500.
6. Test navigation and responsive layout using browser developer tools.

INSTALL ON IPHONE
For a PWA install, Safari needs a secure HTTPS origin (or localhost).
A practical first deployment is GitHub Pages:
1. Create a GitHub repository, for example cash-personal-app.
2. Upload the CONTENTS of this folder (index.html, styles.css, app.js,
   manifest.json, sw.js, icons folder) to the repository root.
3. In repository Settings > Pages, choose Deploy from a branch.
4. Select branch main and folder / (root), then Save.
5. Wait for GitHub Pages to publish the HTTPS site.
6. On iPhone, open the HTTPS site in Safari.
7. Tap Share > Add to Home Screen.
8. If shown, enable "Open as Web App", then tap Add.
9. Open Cash once while online so its app shell can be cached.
10. Turn on Airplane Mode and reopen Cash to test offline launch.

GITHUB PAGES PRIVACY
GitHub Pages hosts the app's static code publicly. It does not mean your
future borrower records must be uploaded. Stage 2/3 will store records locally
in IndexedDB. Do not put private borrower information in source files or GitHub.

UPDATES
When code changes, upload the updated files to the same GitHub repository.
For service-worker updates, increment CACHE_NAME in sw.js (for example
cash-stage1-v2) so the browser replaces the old app shell.

LIMITATIONS
- This is a PWA, not a native IPA app.
- iOS may manage/evict website caches under storage pressure; offline storage
  should be designed with export/backup in later stages.
- Stage 1 buttons for adding borrowers/loans show a coming-soon message.
- No actual loan calculations, reminders, notifications, or record storage yet.
