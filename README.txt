CASH STAGE 2 — WINDOWS SETUP

1. Extract this ZIP on Windows.
2. Upload the CONTENTS of Cash_Stage2 to the ROOT of your existing GitHub Pages repository, replacing the app files. Include the icons folder.
3. Commit changes and wait for GitHub Pages to publish.
4. Open your Cash website in iPhone Safari and refresh. The service worker cache name changed for this release.

FEATURES
- Add, edit, search and delete borrowers.
- Multiple separate loans per borrower.
- Daily/monthly simple interest; percentage or fixed rupees per ₹1,000 per period.
- Partial/full payments, interest-first allocation, payment ledger.
- Dashboard, collection reports, JSON backup export/import.
- Offline app-shell caching and IndexedDB local storage.

IMPORTANT — STAGE 1 DATA
This build uses a new IndexedDB database named cash-stage2. It does NOT automatically migrate Stage 1 records. If you already entered real borrower records in Stage 1, do not replace the live app until you have a verified backup or a migration build. Keep your Stage 1 files/ZIP safe.

INTEREST RULES
Simple (not compound) interest. Daily rate accrues per elapsed day. Monthly is prorated using 30 days per month. Percentage is applied to remaining principal; fixed rate is the rupee amount per ₹1,000 of remaining principal per period. Payments settle accrued interest first, then principal. Overpayments are rejected. Principal cannot be edited after loan creation; add another loan for additional lending.

PRIVACY & BACKUP
Records stay in this browser on this device. GitHub Pages hosts app files only; it does not receive IndexedDB records. No cloud or multi-device sync. Export JSON backups regularly. Clearing Safari website data may erase records.

NOT INCLUDED
Automatic reminders, PIN/Face ID lock, WhatsApp, cloud sync, and automatic Stage 1 migration.
