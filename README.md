# Ready at Home website

Static multi-region sales site for `getreadyathome.com`.

## Page structure

- `/` — brand homepage and UK/US edition selector
- `/uk/` — complete UK Edition sales page with live £14.99 Payhip checkout
- `/us/` — US Edition preview page; checkout intentionally held back until the product is finished

Each regional product is one paid bundle containing two separate PDFs: the main guide and its printable household-planning workbook.

## Current status

- Live GitHub Pages preview: https://dtosh44.github.io/ready-at-home-website/
- Changes pushed to the `main` branch are published automatically by GitHub Pages.
- The homepage promotes both regional editions.
- The UK checkout uses the confirmed Payhip product link.
- The US page is ready for its final cover, price and Payhip link.
- Customer contact is set to `hello@getreadyathome.com`.
- The unfinished free-readiness form remains hidden. Its artwork and styling are retained for later use.

## US Edition launch checklist

1. Finish and quality-check the US guide.
2. Finish the separate US Letter workbook.
3. Export and upload both PDFs to one US Payhip product.
4. Confirm the USD price and direct checkout link.
5. Replace the placeholder cover and coming-soon checkout on `/us/`.
6. Add reciprocal `hreflang` references to the UK and US pages.
7. Run a customer-style test order and confirm payment, receipt and delivery of the correct files.

## Custom-domain launch checklist

1. Confirm `hello@getreadyathome.com` can receive messages, then publish Privacy, Terms, Refund and Disclaimer pages.
2. In GitHub, open **Settings → Pages**, enter `getreadyathome.com` under **Custom domain**, then save.
3. In GoDaddy DNS, replace the parking records with these GitHub Pages records:
   - `A` record for `@` → `185.199.108.153`
   - `A` record for `@` → `185.199.109.153`
   - `A` record for `@` → `185.199.110.153`
   - `A` record for `@` → `185.199.111.153`
   - `CNAME` record for `www` → `DTosh44.github.io`
4. After GitHub's DNS check passes, enable **Enforce HTTPS** in the Pages settings.
5. Forward `getreadyathome.co.uk` to `https://getreadyathome.com/uk/`.

## Working on the site

The site has no build step. Edit the files in GitHub or push changes to `main`; GitHub Pages handles deployment.
