# Ready at Home landing page

Static sales page for `getreadyathome.com`.

## Current status

- Live GitHub Pages preview: https://dtosh44.github.io/ready-at-home-website/
- Changes pushed to the `main` branch are published automatically by GitHub Pages.
- The UK guide button opens the confirmed £14.99 Payhip checkout.
- The unfinished free-readiness form is hidden. Its artwork and styling remain in the repository for later use.
- The US edition remains marked as coming soon.

## Before launching on the custom domain

1. Add the Ready at Home support email and publish Privacy, Terms, Refund and Disclaimer pages.
2. In GitHub, open **Settings → Pages**, enter `getreadyathome.com` under **Custom domain**, then save.
3. In GoDaddy DNS, replace the parking records with these GitHub Pages records:
   - `A` record for `@` → `185.199.108.153`
   - `A` record for `@` → `185.199.109.153`
   - `A` record for `@` → `185.199.110.153`
   - `A` record for `@` → `185.199.111.153`
   - `CNAME` record for `www` → `DTosh44.github.io`
4. After GitHub's DNS check passes, enable **Enforce HTTPS** in the Pages settings.
5. Run a customer-style test order and confirm checkout, payment, confirmation email and PDF delivery.
6. Forward `getreadyathome.co.uk` to `https://getreadyathome.com/`.
7. Add the finished US product only after it has been quality checked.

## Working on the site

The site has no build step. Edit the files in GitHub or push changes to `main`; GitHub Pages handles deployment.
