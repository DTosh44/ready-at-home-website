# Ready at Home — project status

Last reviewed: 1 October 2026

## Purpose

Sell the Ready at Home UK and US guide + printable workbook bundles through a simple, trustworthy regional sales site.

## Current state

The static multi-region website is built and published as a GitHub Pages preview. UK and US pages have Payhip purchase links and the core legal pages are present in the repository.

The custom-domain/public-launch checklist is not yet evidenced as complete.

## What works

- Brand homepage and UK/US selector.
- UK Edition sales page at £14.99.
- US Edition customer-facing price at $19.99.
- Live Payhip checkout links.
- UK/US/default hreflang setup.
- Product artwork.
- Privacy, terms and refunds pages.
- GitHub Pages publication from `main`.

## Live / deployment status

Preview: `https://dtosh44.github.io/ready-at-home-website/`

The intended production domain is `getreadyathome.com`.

## Current milestone

**Launch the custom domain and verify real UK and US purchases and delivery.**

## Key decisions

- One paid bundle per region containing the guide and workbook.
- UK price: £14.99.
- US customer-facing price: $19.99.
- Payhip remains GBP-based; the US Payhip price may need periodic GBP-equivalent adjustment while the website continues to show $19.99.

## Current blockers / dependencies

- Confirm `hello@getreadyathome.com` works.
- Complete/verify the production-domain DNS and HTTPS setup.
- Confirm legal/disclaimer coverage is sufficient.
- Run real customer-style UK and US purchases and verify receipt/delivery.

## Next actions

1. Verify the contact email.
2. Confirm required legal/disclaimer pages.
3. Configure `getreadyathome.com` on GitHub Pages and DNS.
4. Enable HTTPS after DNS validation.
5. Forward `getreadyathome.co.uk` to the UK page.
6. Run separate UK and US test orders.
7. Confirm the correct bundle is delivered for each order.

## Deferred / out of scope for this milestone

- free-readiness form;
- major new product lines;
- membership/subscription features;
- complex ecommerce platform changes.

## Handoff notes

The site is close to launch. Prioritise domain, legal/contact and purchase-delivery verification over additional features.
