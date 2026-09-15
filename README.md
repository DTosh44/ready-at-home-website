# Ready at Home website

Static multi-region sales site for `getreadyathome.com`.

## Page structure

- `/` — brand homepage and UK/US edition selector
- `/uk/` — UK Edition sales page with live £14.99 Payhip checkout
- `/us/` — US Edition sales page advertising $19.99 with a live Payhip checkout

Each regional product is one paid bundle containing two separate PDFs: the main guide and its printable household-planning workbook.

## Current status

- Live GitHub Pages preview: https://dtosh44.github.io/ready-at-home-website/
- Changes pushed to the `main` branch are published automatically by GitHub Pages.
- The homepage promotes both regional editions and provides direct purchase links.
- UK Payhip product key: `gGZ7k`
- US Payhip product key: `0wjXV`
- Customer contact: `hello@getreadyathome.com`
- Reciprocal UK, US and default `hreflang` references are present.
- Current combined guide-and-workbook artwork is stored in `assets/ready-at-home-uk-guide-workbook.png` and `assets/ready-at-home-us-guide-workbook.png`.
- The unfinished free-readiness form remains hidden. Its artwork and styling are retained for later use.

## US currency note

The website presents the US bundle as **$19.99**. The current Payhip store remains GBP-only, so its US product should be maintained at the GBP equivalent—initially **£14.82**. If the exchange rate changes materially, update the Payhip GBP price while keeping the website’s customer-facing price at $19.99.

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
6. Run separate customer-style test orders for the UK and US products and confirm payment, receipt and delivery of the correct files.

## Working on the site

The site has no build step. Edit the files in GitHub or push changes to `main`; GitHub Pages handles deployment.
