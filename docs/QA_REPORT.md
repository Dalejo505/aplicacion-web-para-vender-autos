# QA Review Report

| | |
|---|---|
| **Verdict** | ⚠️ APPROVED WITH WARNINGS |
| **Score** | 72/100 |
| **Files reviewed** | 14 |
| **Blockers** | 0 |
| **Warnings** | 4 |
| **Suggestions** | 4 |

## Summary

The MVP is a well-structured, visually polished Next.js 14 marketing/landing page for a car marketplace. It is static data only with no backend, authentication, or real transaction capability, which is acceptable for an MVP scope but several issues around font loading, missing routes, accessibility, and bundle concerns should be addressed before deployment.


## ⚠️ Warnings

#### 🟡 app/layout.tsx
**Issue:** Double font loading: Google Fonts are imported via @import in globals.css AND via next/font/google (Inter). This causes two separate font requests, potential FOIT, and redundant payload.

**Fix:** Remove the @import url(...) line for Inter from globals.css. Keep only the next/font/google import. For Syne, add it via next/font/google as well and pass className to body or a wrapper.

#### 🟡 components/Navbar.tsx
**Issue:** Navigation links point to /listings, /sellers, /pricing, /dashboard, etc. which do not exist as routes in the app directory. Clicking them will result in 404 errors, breaking perceived product quality.

**Fix:** Either create stub pages for each route (app/listings/page.tsx, etc.) with a 'Coming Soon' placeholder, or convert the links to anchor href='#section-id' pointing to page sections, or add href='/' with scroll behavior.

#### 🟡 app/globals.css
**Issue:** CSS reset sets margin:0 and padding:0 globally on * which can conflict with Tailwind's Preflight base styles, causing double-reset and potential specificity issues.

**Fix:** Remove the manual * { margin:0; padding:0 } block since Tailwind Preflight already handles this via @tailwind base.

#### 🟡 lib/data.ts
**Issue:** All data is hardcoded static mock data with no real CRUD, no database, and no API routes. The dashboard stats, seller profiles, and transactions are fabricated. This is fine for MVP but must be clearly scoped.

**Fix:** Document clearly in README that this is static mock data. Add TODO comments in data.ts marking each export as needing API/DB replacement. Consider adding /api route stubs for future integration.

## 💡 Suggestions

#### 🔵 components/CarCard.tsx
**Issue:** Car cards use gradient background colors (imageColor field like 'from-blue-600 to-blue-900') as placeholders instead of real images. No alt text strategy exists for when images are added.

**Fix:** Add an explicit aria-label on the gradient div describing the car. When migrating to real images, use next/image with required alt prop. Consider adding a data-testid for QA purposes.

#### 🔵 components/Navbar.tsx
**Issue:** Mobile menu does not trap focus or handle Escape key, creating accessibility issues for keyboard and screen reader users.

**Fix:** Add onKeyDown handler for Escape to close menu, add aria-expanded on the toggle button, and add aria-label='Mobile navigation' on the mobile menu container.

#### 🔵 package.json
**Issue:** lucide-react ^0.400.0 is a wide version range. The lucide-react package has had breaking icon name changes between minor versions which can cause build failures after npm install.

**Fix:** Pin to an exact version: '"lucide-react": "0.400.0"' to prevent unexpected breakage on fresh installs.

#### 🔵 tailwind.config.js
**Issue:** The slideIn keyframe is defined in the animation config but its @keyframes definition is missing from the keyframes object, meaning the animation will silently fail.

**Fix:** Add the slideIn keyframes definition: slideIn: { '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } }


## Security Notes

- No user input, forms, or authentication exist in this MVP, so XSS and CSRF surface is minimal. When adding contact/listing forms, sanitize all inputs server-side.
- Phone numbers and email addresses in lib/data.ts are mock data, but when real seller data is introduced, ensure PII is not exposed in client-side bundles — move sensitive fields to server components or API routes.
- No rate limiting or bot protection on any future API routes. When /api endpoints are added for listings or contact, implement rate limiting (e.g., via Upstash or middleware).
- Content Security Policy headers are not configured. Add next.config.js headers() for CSP, X-Frame-Options, and X-Content-Type-Options before production deployment.
- Google Fonts loaded via @import in CSS sends referrer headers to Google for all visitors. If privacy compliance (GDPR) is required, self-host fonts or use next/font which proxies through Vercel.

## Pre-Production Checklist

- [ ] Fix the double font loading issue (globals.css @import vs next/font) to avoid layout shift and extra network requests
- [ ] Add stub pages or anchor redirects for all broken navigation links (/listings, /sellers, /pricing, /dashboard) before going live
- [ ] Add security headers to next.config.js: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and a basic CSP
- [ ] Create a .env.example file documenting any future environment variables (database URLs, API keys) even if unused now
- [ ] Run 'next build' and verify zero TypeScript errors and no missing module warnings before deploying
- [ ] Add a robots.txt and sitemap.xml (Next.js 14 supports app/sitemap.ts) for basic SEO readiness
- [ ] Configure a 404 page (app/not-found.tsx) to handle the broken route links gracefully
- [ ] Test on mobile viewport (375px) to verify the hamburger menu and card grid render correctly
- [ ] Set up Vercel or hosting provider with proper Node.js 18+ runtime and confirm build passes in CI before merging to main

---

*QA review by SprintPilot · 2026-05-11*
