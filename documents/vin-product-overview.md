# Vin Product Overview

Vin is a focused place for Gunpla builders to share builds and find work by kit, style, and technique.

This overview separates confirmed direction from proposals and unanswered questions. The research references at the end came from chatbot-assisted research in `documents/research.md`. They are leads, not independently verified findings.

## Product direction

### Confirmed choices

- Launch in Indonesia first, with the option to enter other markets later. This records the chosen launch scope, not a claim about market size or demand.
- Keep the first release focused on Gunpla and small enough to build and learn from.
- Make sharing builds and discovering builds the core product loop.
- Include structured build posts, search and filters, and builder profiles in the first release.
- Use a gallery-first hybrid homepage: briefly explain Vin, then let visitors search and browse builds. Keep the full product story on a separate About page.
- Let visitors browse without an account; require an account to publish or save builds.
- Shape Vin's data model so it can support other model-kit types, grades, styles, and techniques later.
- When users select bootleg/knock-off for a post, show a warning that the item is counterfeit and clearly label the published post. Users may still share it. Vin does not endorse counterfeit goods.

### Why Vin should exist

The original problem statement describes several points of friction in the hobby:

- Social posts can be hard to find when creators do not use consistent tags. Plain-text search also makes it difficult to locate a particular style or technique.
- A person who likes an unfamiliar model may not know its name, grade, or source series, making it hard to find more information.
- Finding a builder whose work matches a desired style can require repeated searching and explaining over direct messages.
- Build information, creator portfolios, kit references, shopping, and community discussion are spread across different services.
- Running out of materials or finding a tool needs maintenance can interrupt a build.

The first release addresses the discovery and sharing problems directly. It will not solve every part of the hobby in one launch.

## Audience and launch

Vin starts with Gunpla hobbyists in Indonesia. The initial audience includes builders who want to document their work, people looking for builds by kit or style, and builders who want a profile that gathers their work in one place.

Indonesia-first is a confirmed launch choice. The specific launch communities, language support, moderation approach, and local operating needs remain to be decided. Research notes mention Indonesian social groups and local buying context, but Vin should validate those observations before relying on them as market facts.

## MVP: a searchable Gunpla showcase

### Core capabilities

1. **Builder profiles** gather a builder's identity and published build posts. The exact profile fields are still open.
2. **Structured build posts** pair photos and a description with searchable information about the build.
3. **Search and filters** help visitors find posts by text and selected structured fields.
4. **Build viewing** gives each post a stable page that can be shared and opened from search results or a builder profile.

### First-visit homepage

The homepage should show Vin through the activity it supports, not make first-time visitors read a long pitch before they can use it. A concise introduction explains that Vin helps people in Indonesia find Gunpla builds and builders. Search and a small set of filters lead into a gallery of real build posts, with paths to each build and its creator profile. The full explanation of Vin's wider vision belongs on a separate About page.

Visitors can browse without signing in. They need an account to publish or save a build. Social posts can link directly to a build or profile on Vin so visitors arrive at the work they were interested in.

The gallery needs real builds that creators have agreed to share. If there is not enough content for a useful gallery at launch, use a temporary introduction page to invite builders to contribute. Do not fill the gallery with invented or unapproved work.

The field examples below are candidates for a first taxonomy, not a final schema. A small initial set is preferable to a long list that builders cannot apply consistently.

| Field | Example or purpose |
| --- | --- |
| Base kit | Which kit the build started from |
| Grade | A Gunpla grade, when known |
| Build type | For example, straight build or custom build |
| Style | A visual description, such as weathered or clean |
| Techniques | Methods used, such as airbrushing or scribing |
| Product status | Distinguish official products, third-party products, and bootleg/knock-off products |
| Photos and description | Show the result and provide context |

For example, a builder could publish a post with a base kit, grade, a weathered style tag, and the techniques they used. Another hobbyist could search for that kit or filter for weathered builds. The example illustrates the intended structure, not a promise that every listed field or filter is finalized.

### Core flows

**Share a build**

1. A builder creates or updates a profile.
2. They add photos and a description to a build post.
3. They select the available kit and build tags, then publish.
4. The post appears on their profile and in relevant search results.

**Find a build**

1. A visitor searches by a known kit name or browses available filters.
2. They open a result to view its photos, description, and structured details.
3. They can visit the builder's profile to see other published work.

### Why sharing and search start together

Search needs useful posts with consistent details. Builders need a reason to post, and a place where their work can be found. Starting with both creates a small loop: builders publish structured examples, and visitors use those examples to discover builders and other builds. Vin should test whether people contribute and find relevant work before adding transaction-heavy features.

## Taxonomy that can grow

Vin should begin with a limited Gunpla vocabulary and treat categories as structured data rather than relying only on free-form hashtags. This can make posts easier to find while leaving room to add fields and values as real use cases emerge.

Later, Vin could extend the taxonomy to more kit types, grades, build styles, and techniques. New categories should be added when builders need them and the terms can be explained clearly. The first release does not need a complete catalog of model kits or an exhaustive taxonomy.

## Longer-term vision and boundaries

### Possible future expansion

The broader direction is a connected hobby platform in which a model kit can link to community builds, builder profiles, reference information, and eventually other hobby activities. Vin should expand in response to needs that appear as people use the searchable build gallery. The following are possible directions, not commitments or launch promises.

#### Broader kit discovery

Vin could extend beyond Gunpla to other types of model kits, with searchable information about makers, series, grades or scales, and compatibility. The catalog could distinguish official products, legitimate third-party products, and bootleg or knock-off products. New categories should be added as people need them, rather than building an exhaustive catalog before launch.

#### Kit knowledge and learning

Kit pages could connect builds to related kits, reviews, tutorials, materials, and techniques. A community request feature could help identify an unfamiliar kit before Vin considers automated image identification. Image-based identification would depend on having reliable reference data and a clear way to show uncertain matches.

#### Builder services

Builder profiles could grow to include specialties, availability, portfolios, and commission information. Vin might later add structured commission requests. Payments, order management, and dispute handling should come only after Vin has a plan for trust, responsibilities, and support.

#### Buying and selling

Vin could support listings for new, unbuilt, built, or custom kits, along with parts, tools, and supplies. Sharing a post about a bootleg build does not automatically permit selling counterfeit goods. Any future marketplace would need its own rules for product status, prohibited listings, shipping, damage, and disputes.

#### Personal workshop

Users might track their collection and kit lifecycle, such as owned, backlog, building, completed, or for sale. Vin could also support build progress, materials, supply levels, and tool maintenance. These features should be considered only if hobbyists want Vin to help manage their personal workbench as well as discover community builds.

#### Expansion beyond Indonesia

If Vin later serves other markets, it may need additional languages, local kit data, currencies, payment options, and shipping support. Expanding to another region should be treated as more than translation: local community practices and operating needs need to be understood too.

#### How to choose what comes next

Vin should prioritize an expansion when users show a repeated need, the underlying data can be maintained, and the team can support the trust, moderation, and operational work it creates. The showcase remains the first product. Later features should connect back to builds, kits, and builders instead of turning Vin into a collection of unrelated tools.

### Explicitly out of the MVP

The first release does not include:

- A complete marketplace or checkout.
- Commission requests, payments, escrow, or order management.
- Image recognition or automatic kit identification.
- Collection tracking or workshop inventory.
- A full model-kit encyclopedia, supply store, or all-hobby social network.

Some of these may be considered later. None should be presented as available until designed and built.

## Current implementation and framework

Vin currently lives in a Bun-managed Turborepo monorepo. The web app is `apps/web`, which uses Next.js with the App Router. The app's current homepage is still the generated starter page, so the gallery-first experience described here is approved product direction, not an implemented feature.

This records the current implementation, not a permanent product requirement. The MVP needs public build and profile pages, search and filter state, and page metadata for sharing and indexing. Next.js documents App Router routing, metadata, sitemaps, and support for local workspace packages. No concrete mismatch with the MVP has surfaced, so there is no current reason to replace it. Revisit the framework if deployment constraints, runtime needs, operational complexity, or measured product demands show a material advantage elsewhere. A need for more specialized search may call for a search service without requiring a framework change.

## Risks and open questions

The following risks appear in the source research or follow directly from the confirmed scope. They remain unresolved.

| Topic | Open question |
| --- | --- |
| Community cold start | How will Vin attract enough builders and useful posts for search to help visitors? Which launch communities should be approached first? |
| Post quality | Which fields can builders fill in reliably without making posting tedious? Which filters help visitors find relevant work? |
| Kit and taxonomy data | Will builders enter kit details themselves, or will Vin need a maintained catalog? Who will define and update categories? |
| Indonesia launch | Which language or languages should the first release support? What local community, moderation, and support needs should shape the launch? |
| Bootleg visibility and sales | Sharing bootleg/knock-off builds is allowed with a clear label and warning. Should those posts receive reduced visibility in recommendation surfaces if Vin adds them later? How should separate marketplace rules handle counterfeit goods if Vin adds sales? |
| Later commissions | If commissions are added, how will Vin handle trust, scope, disputes, payment, and expectations between builders and customers? |
| Later sales | If built kits are sold, how will Vin address fragile shipping, damage, and disputes? |
| Product boundary | What evidence from the showcase would justify adding identification, collection tools, commissions, or commerce? |

Research also describes possible competition and existing services. Those comparisons are not treated here as verified market analysis; links are retained below for follow-up.

## Research references

These links were collected in `documents/research.md` and have not been independently verified for this overview.

- [MobileSuit.dev Gunpla database](https://www.mobilesuit.dev/gunpla)
- [Tsumina collection manager on Google Play](https://play.google.com/store/apps/details?hl=id&id=com.skt.tsumipla_manager)
- [Gundam Place on the App Store](https://apps.apple.com/us/app/gundam-place/id6479946774)
- [PlaMo//HQ](https://plamohq.com/)
- [GunplaDB](https://gunpladb.com/)
- [GunplaDB.net database](https://gunpladb.net/database.html)
- [Gunpla Gallery](https://gunplagallery.com/kits)
- [Etsy Gunpla build commissions](https://www.etsy.com/market/gunpla_build_commission)
- [Fiverr Gunpla commission example](https://www.fiverr.com/gunpla_art/build-paint-and-customize-your-gunpla-or-gundam)
- [HRZ Gundam Works](https://hrzgundamworks.com/)
- [Gundam Tricks buying guide](https://www.mygundamtricks.com/tempat-membeli-gundam-terlengkap-online/)
- [Mind Genesis article on bootleg Gunpla in Indonesia](https://mygoldmachine.wordpress.com/2024/12/31/fenomena-perkembangan-gunpla-bootleg-di-indonesia-berkat-dukungan-komunitas/)
- [MEDIAINI article on the Gundam plastic-model business](https://mediaini.com/bisnis/2020/12/24/36514/intip-bisnis-mainan-gundam-plastik-yang-banyak-dicari/)

### Framework documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js metadata and `generateMetadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js sitemap files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Next.js workspace package transpilation](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
