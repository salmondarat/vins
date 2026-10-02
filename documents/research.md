# Reasearch Ressults from three pillars AI chatbot with same questions

The questions

```
Do some research, I am a gundam model kit hobby enthusiast, I collecting a model kit, I built a model kit, I buy a model kit brand new in box or pre-built custom, I also sell my built kit. I can buy the model kit at store offline or just go to marketplace to buy online, new or built, it is already there, I also can open a store my self to sell mine.  Now, the problem, When I want to buy a custom model kit or ask someone to custom a model kit or my model kit, it is almost impossible to go to a marketplace, I can go to social media and look for my type, but the creator of a custom model kit sometimes not include the tags of what they do, also on social media it is hard to search something just by typing plain text, or the style is not what i actually looking for, so take more time to explain again. And sometime I see a model kit that I am not familiar about but like its design and do not knowing what its name, grade or from which movies/ anime it is actually from. When I building/ assembling the model kit I ran out of masking tape, sanding paper, thinner, paint, or nipper rust. I need a platform that can handle my problems. So I want to built a web app that can help me, and maybe other people too. The main concept  is for a focused market, tools and sharing. I want to named it "Vin". How about that, did you get my points here?
```

- Gemini
### Core Pain Points & System Solutions

-   **Discovery and Identification Friction:**

    -   *Problem:* Finding an unfamiliar kit, grade, or anime origin through traditional text search or social feeds is difficult.

    -   *Solution:* Visual search or tagged database directory. Users can upload an image of a suit or select specific visual styles, scales (1/144, 1/100, 1/60), grades (HG, RG, MG, PG), and timelines (UC, AU) to identify kits instantly.

-   **Custom Builders & Commission Marketplace Deficit:**

    -   *Problem:* Buying custom kits or finding commission artists on social media suffers from poor tagging, unoptimized search, and long back-and-forth communication regarding style preferences.

    -   *Solution:* Dedicated Builder Profiles & Commission Portfolios. Builders list specific techniques (airbrushing, scribing, weathering, kitbashing, custom LEDs), accept commission requests with structured spec sheets, and showcase past work with exact tags.

-   **Consumables & Tool Tracking Disruption:**

    -   *Problem:* Mid-build delays caused by suddenly running out of supplies (sanding paper, masking tape, thinners, specific paint codes) or tool maintenance issues (rusty nippers, worn blades).

    -   *Solution:* Workshop Inventory & Tool Tracking System. A digital workbench feature where users log their paints, abrasives, and chemical levels, setting auto-alerts or quick-reorder triggers before supplies run out mid-build.

-   **Fragmented Commerce:**

    -   *Problem:* Buying and selling retail, pre-built, or custom kits is currently split across disparate e-commerce platforms and informal social media channels.

    -   *Solution:* Unified Niche Marketplace. A tailored buying and selling platform built specifically for model kits, with distinct categorization for New in Box (NIB), Backlog, Pre-built (OOB), and Custom Finished builds.

### Key Features for the "Vin" Web App Concept

1.  **Workbench & Supply Tracker:** Keep track of current builds, active paint inventories, consumable thresholds, and maintenance logs for tools like nippers and airbrushes.

2.  **Commission & Custom Hub:** A specialized marketplace connecting collectors with custom builders, featuring standardized build request forms, portfolio tagging, and style filtering.

3.  **Kit & Lore Database:** A catalog where users can look up mobile suits, identify unknown designs via visual/attribute filtering, and view build lists or community showcases linked to that specific model.

4.  **Targeted Marketplace:** Direct C2C and B2C sales built exclusively around model kits, spare parts, runner parts, and custom-finished work.

The concept directly targets real operational gaps in the current hobbyist workflow.

- OpenAI ChatGPT
Yes. And after looking at the current Gunpla ecosystem, I think your idea is much clearer than simply “a website for Gunpla.”

What you are describing is a **specialized hobby ecosystem** built around the things a Gunpla enthusiast actually does throughout the life of a model kit.

The important insight is that your problems are not isolated.

You buy a kit → you collect it → you build it → you customize it → you need tools/materials → you may want someone else to customize it → you may sell it → someone else may buy it → and throughout all of that, you need information and other people.

That gives Vin a much stronger foundation.

### What I found in the current ecosystem

There are already good solutions for individual pieces of the problem.

For example, there are dedicated Gunpla databases with thousands of kits, including grade, scale, release information and box art. ([www.mobilesuit.dev](https://www.mobilesuit.dev/gunpla?utm_source=chatgpt.com))

There are also collection-management apps such as Tsumina that focus on tracking kits through stages like stock, building, completed and wishlist, including barcode scanning. ([Google Play](https://play.google.com/store/apps/details?hl=id&id=com.skt.tsumipla_manager&utm_source=chatgpt.com))

There are dedicated Gunpla stores that combine kits, tools and paints in one shopping experience. ([App Store](https://apps.apple.com/us/app/gundam-place/id6479946774?utm_source=chatgpt.com))

And the custom/commission market already exists through fragmented places such as Fiverr, Etsy, individual builder websites and social media. For example, Indonesian Gunpla builders are already offering custom painting, modification and commission services through Fiverr. ([Fiverr.com](https://www.fiverr.com/gunpla_art?utm_source=chatgpt.com))

There is even a newer platform, Plamo//HQ, specifically attempting to create builder profiles, portfolios, commission availability and completed-build listings. ([PlaMoHQ](https://plamohq.com/?utm_source=chatgpt.com))

So your idea isn't trying to solve a nonexistent problem.

The interesting part is that **these solutions are fragmented**.

And that is where Vin becomes interesting.

* * *

## I think your actual problem is this

Imagine you see this on Instagram:

> \[beautiful custom Gundam photo\]

You think:

> “Holy shit, I want something like this.”

But then you have to figure out:

Who made it?

What kit is this?

What grade?

What scale?

What modification was done?

What painting technique?

What style?

Can the creator take commissions?

How much?

Do they work on customer-provided kits?

Can they recreate something similar?

Where are they located?

How long is the queue?

Can I buy this exact one?

And if you don't know the name of the Gundam in the first place, you're already screwed by conventional search.

That's the gap.

Social media is optimized for **content discovery**, not structured hobby discovery.

Marketplace platforms are optimized for **products**, not custom creative work.

Databases are optimized for **information**, not transactions.

Commission platforms are optimized for **services**, not the entire Gunpla lifecycle.

Vin could connect those pieces.

* * *

# The core idea of Vin

I would describe Vin as:

> **A focused digital ecosystem for Gunpla discovery, building, collecting, customization, commerce, and community.**

Or even more simply:

> **Vin helps Gunpla enthusiasts find, build, customize, collect, buy, sell, and commission model kits — all in one place.**

And I think your three concepts you previously had — **VinPedia, VinSocial, and VinStudio** — actually fit this extremely well.

But I would expand the architecture slightly.

### 1\. VinPedia — Know

This solves:

> “What the hell is this Gundam?”

A structured Gunpla knowledge database.

A kit page could contain:

**RX-78-2 Gundam**

-   Series: Mobile Suit Gundam

-   Mobile Suit: RX-78-2

-   Manufacturer: Bandai

-   Grade: MG

-   Scale: 1/100

-   Release year

-   Version

-   Price history

-   Box art

-   Official images

-   Manual

-   Compatible accessories

-   Related kits

-   Other grades of the same mobile suit

-   Community builds

-   Reviews

-   Tutorials

-   Marketplace listings

-   Custom commissions

And this is where Vin can become much more powerful than a normal wiki.

The **model kit itself becomes the central object**.

For example:

**RX-78-2 Gundam**

→ HG
→ RG
→ MG
→ PG
→ EG
→ Ver.Ka
→ custom builds
→ completed builds
→ listings
→ reviews
→ tutorials
→ photos

That creates a connected knowledge graph.

The fact that the same mobile suit can exist across multiple grades is already a natural relationship in Gunpla. ([Wikipedia](https://en.wikipedia.org/wiki/Gunpla?utm_source=chatgpt.com))

* * *

# 2\. VinSocial — See

This solves:

> “Show me what other builders are doing.”

But I would **not** make VinSocial simply another Instagram.

That's important.

Instead of:

> photo → likes → comments → scroll forever

Vin should make the content **structured**.

A build post could contain:

**MG Barbatos**

Style:

`Realistic / Weathering / Military`

Techniques:

`Scribing`
`Airbrush`
`Chipping`
`Metallic`
`Battle Damage`

Materials:

`Mr. Color`
`Tamiya`
`Gaia`
`Mr. Hobby`

Tools:

`BMC Chisel`
`GodHand Nipper`
`DSPIAE`
`Airbrush`

Difficulty:

`Advanced`

Builder:

`@username`

And suddenly the post becomes searchable.

Instead of searching:

> "cool Gundam custom"

someone could search:

> **MG + Weathering + Realistic + Military + Airbrush**

or:

> **HG + Cel Shading + Blue + Clean Build**

or:

> **Zaku + Battle Damage + Diorama**

This directly attacks the problem you described.

* * *

# 3\. VinStudio — Create & Commission

This might actually become one of Vin's most distinctive components.

Imagine a builder creates a profile:

**RX Studio**

Specialties:

`Custom Painting`
`Weathering`
`Scribing`
`Scratch Building`
`Battle Damage`

Supported:

`HG / RG / MG / PG`

Style:

`Realistic`
`Military`
`Anime Accurate`
`Heavy Weathering`
`Cel Shading`

Commission status:

**OPEN**

Queue:

**3 projects**

Estimated starting price:

**Rp X**

Location:

**Jakarta**

Portfolio:

\[builds\]

Then a customer doesn't have to write:

> “Bro bisa custom Gundam nggak? Mau yang keren tapi nggak terlalu…”

Instead, Vin can turn the commission into a **structured brief**.

For example:

**I want to customize:**

MG Barbatos

**Style:**

Realistic

**Paint:**

Black / Red / Metallic

**Weathering:**

Heavy

**Modification:**

Scribing

**Decals:**

Yes

**Topcoat:**

Matte

**Budget:**

Rp X–Y

**Deadline:**

Flexible

**Kit provided by:**

Customer

That is a huge improvement over DM-based commission hunting.

Existing commission providers often already ask clients for exactly these kinds of variables — model, scale, paintwork, weathering, decals, battle damage, deadline, etc. ([Gundamaker](https://gundamaker.com/products/werk-by-gunplabuilder_dan?utm_source=chatgpt.com))

Vin would simply make that process **structured instead of conversational chaos**.

* * *

# 4\. VinMarket — Buy & Sell

This is another important distinction.

You don't just want:

> “Buy Gunpla.”

You want:

> **Buy anything relevant to the hobby.**

Potential categories:

**Model Kits**

-   New in box

-   Open box

-   Unbuilt

-   Partially built

-   Built

-   Custom built

**Tools**

-   Nippers

-   Sanding sticks

-   Files

-   Scribing tools

-   Airbrush

-   Compressor

-   Cutting tools

**Materials**

-   Paint

-   Primer

-   Thinner

-   Topcoat

-   Masking tape

-   Decals

-   Putty

**Parts**

-   Resin

-   Conversion kits

-   Weapons

-   Hands

-   Effects

-   LEDs

-   Custom parts

**Display**

-   Bases

-   Dioramas

-   Cases

-   Lighting

And critically:

### Built/custom models become first-class products.

That's different from a normal marketplace.

A listing might be:

> **MGEX Strike Freedom — Fully Custom**

Not:

> MGEX Strike Freedom

Metadata:

`MGEX`
`1/100`
`Custom`
`Airbrush`
`Metallic`
`Scribing`
`LED`
`Custom Decals`
`Matte Topcoat`

Now someone searching specifically for:

> “MG custom metallic”

can actually find it.

* * *

# 5\. VinSupply — “I ran out of shit.”

This is a smaller feature but surprisingly important.

Your example is exactly the kind of thing that makes a hobby platform useful.

You're building at 11 PM.

You realize:

> “Fuck. I'm out of 1000 grit.”

Vin could know that you're building:

**MG Zeta Ver.Ka**

and your workshop inventory says:

-   Sandpaper 400 — 2 sheets

-   Sandpaper 600 — 0

-   Sandpaper 1000 — 0

-   Masking tape — 20%

-   Mr. Surfacer — 10%

-   Thinner — 5%

Then:

> **You're running low on 3 supplies.**

And show:

**Find nearby**

or

**Buy online**

or

**Add to shopping list**

This could eventually connect to stores rather than trying to replace Tokopedia/Shopee/etc.

That distinction matters.

Vin doesn't necessarily need to become the Amazon of Gunpla.

It could become the **intelligence layer for Gunpla shopping**.

* * *

# 6\. VinCollection — “My Gunpla life”

This is where your personal collection becomes important.

Your account could have:

**My Collection**

```
Owned             47
Backlog           23
Building           2
Completed         19
For Sale           3
Wishlist           12
Commissioned       1
```

And every kit has a lifecycle.

For example:

**MG RX-78-2 Ver. 3.0**

`Purchased → Backlog → Building → Completed → Display`

Or:

**MG Barbatos**

`Purchased → Customized → Completed → For Sale → Sold`

That makes Vin more than a marketplace.

It becomes the **record of your hobby**.

* * *

# And here's the really interesting part

All of these things can connect to the same object.

Take:

## MG Barbatos

That single entity can connect to:

**Knowledge**

What is it?

**Collection**

Who owns it?

**Builds**

How have people built it?

**Styles**

What customization styles exist?

**Builders**

Who specializes in it?

**Commissions**

Who can customize it?

**Marketplace**

Who is selling it?

**Supplies**

What tools/materials are commonly used?

**Tutorials**

How do I build/customize it?

**Reviews**

What do people think?

**History**

When was it released?

That's the architecture I think is hiding inside your idea.

* * *

# Your biggest differentiator: structured visual search

This is probably the feature I'd pay the most attention to.

You described something very real:

> “I saw a cool custom Gunpla but don't know what it is.”

Instead of typing:

> “red cool Gundam with giant sword”

you could upload the image.

Vin could attempt to identify:

**Possible kit**

`MG Gundam Barbatos`

**Grade**

`MG`

**Scale**

`1/100`

**Original design**

`Mobile Suit Gundam: Iron-Blooded Orphans`

**Likely modifications**

`Custom paint`
`Scribing`
`Weapon modification`
`Weathering`

Then:

**Find similar builds**

and

**Find builders who offer this style**

and

**Find the original kit**

That is much closer to the actual way enthusiasts discover things.

* * *

# I would also make style a first-class data structure

This is where your complaint about social media becomes especially important.

Don't make:

> `#gunpla #customgunpla #gundam`

your primary taxonomy.

That's too primitive.

Instead, Vin could have a controlled vocabulary.

For example:

**Build Type**

`Straight Build`
`Panel Line`
`Custom Paint`
`Full Custom`
`Scratch Build`
`Kitbash`
`Conversion`

**Visual Style**

`Anime Accurate`
`Realistic`
`Military`
`Weathered`
`Battle Damaged`
`Cel Shading`
`Metallic`
`Gloss`
`Matte`
`Stealth`
`Industrial`
`Cyberpunk`

**Techniques**

`Scribing`
`Airbrush`
`Hand Paint`
`Masking`
`Decals`
`Chipping`
`Weathering`
`Preshading`
`Color Separation`
`LED`
`Scratch Building`

**Complexity**

`Beginner`
`Intermediate`
`Advanced`
`Professional`

Now your search becomes semantic.

* * *

# And there is already evidence that this market wants structure

The existing Plamo//HQ concept is particularly interesting because it has independently moved toward builder profiles, specialty tags, commission status, portfolios, completed builds and marketplace listings. ([PlaMoHQ](https://plamohq.com/?utm_source=chatgpt.com))

That validates one part of your hypothesis.

But I don't think Vin should simply become **“Plamo//HQ but with a different UI.”**

That's the trap I'd avoid.

The opportunity is broader:

**Plamo//HQ**
→ builder / commission / completed-build marketplace

**Tsumina**
→ collection management

**GunplaDB / MobileSuit.dev**
→ catalog / database

**Gundam Place**
→ retail shopping

**Instagram / Facebook / Reddit / Discord**
→ community/content

**Fiverr / Etsy**
→ generic commissions/marketplace

Vin's opportunity is to connect those **around the Gunpla hobby lifecycle**.

* * *

# So I would define Vin like this

![Image](https://images.openai.com/static-rsc-4/C8Jt6xBScMbAL7JLClUzB1awyKp3MgYfkg6wapL5ji8y3e7oXBS01seciLppGhMQaItWvYuRM4a0SOJg1gAnvSV2dxcBTq42UWfnQuV00MJJpypcx90UoEXmnUk5NHeEsW9OylXBH-IYiqqxetBYAaOJQddd1qVVBICTD9wiqEZj5cYo3taVgRHpJtzgDP4U?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/xS9jeXc4cOPO-BlSecL_29jEJZzvngZ75PeyB-Fx8ufcp2t210rvwsUpauSQ1Chq1A4ixR8KD3Jm6B45UifkaRJQLTPumF9UgcKpDvcBJY6NAOtKf5voCaFMFhRoXexev7q8doQ39_-NE_5HQofdl7HcggajwcmNfAx_UETSgRmsOXTC8aDti504VHRm7Nut?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/wUt9WtV3WgExOkWvCND27CCF1gzytwvr_Jpy7mgv1qtq-SIljb6ChJpeCDC2gBmJvJ-6Pw8H1GslQtIRKcDgtAVNpkioQfFO-lQzPWXiC2MNXSRjN1NwQL7iFS4Kxj-HD9BlfUkGhp6C9OoWQ7zAaj7TqNaejuvCr6ZPqCTmXrUZQZbpCbzGDFFiqwMq29VH?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/0Zixl4b_YpbWHKALELRgpZZsJqh2NXszPhL0U7BQ9eGzY9I17brCP7jUFkCbinRD2C4cGEG8kgXbA60uCjHzLrYQNrRoHQVg1xQYElcU5JYqx-IVSE5GpG3uEYqY50mUAhssMeMvYEoeSqv2tNllkWkl4XjyjPJ_QejtlcPc0zXdfcvpOBdp2vIAcejHA78A?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/I69O6b4H3no-OZ0Mgeni6rlwGj8df7ni6C5xOTLT4STWDr2BJCXfQz8o76njZ8V_tzE3bEsh4zqDn20EldGoVxgl2fjcUnKk3YjVgfbZdbua-WK6zIoS35BqdCOuEDWYO2S_eb9Np8M06QixibKEqsP6Ei8Dt-izkDv3LDjFvNj6caaZG4sBOLIiMjW8cLru?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/u2srGoOU1rgaBpO32ysr_t9E0JkO--zkPNfdZhsaVq60QzyvYHDSIGC2qtLNEBvkXDdOEw2yuG-7ptxbFVM5nRa2d_PCLFloARy20N3uUeLZQp46dQi0ku2x3gTr-_iiH-i21i2dTVJKSlUzMq7U-zKS9tIKPQLJhRH7KxrLsFuEpGd_cW0xTc2vxdfoZs4S?purpose=fullsize)

## VIN

**The operating system for Gunpla enthusiasts.**

Not literally an operating system, of course — but conceptually.

Vin is where a Gunpla enthusiast can:

**DISCOVER**

Find kits, builds, styles, creators and inspiration.

**IDENTIFY**

Find out what a mysterious model kit is from a photo or description.

**LEARN**

Understand grades, scales, series, techniques, tools and materials.

**COLLECT**

Track everything they own, want, are building, completed, or want to sell.

**BUILD**

Track projects, progress, tools, materials and build history.

**CUSTOMIZE**

Document techniques, styles, paints and modifications.

**COMMISSION**

Find the right builder based on style, skill, grade, location, budget and availability.

**BUY**

Buy new, used, built, custom kits, parts, tools and supplies.

**SELL**

Sell kits, built models and custom work.

**SHARE**

Publish structured builds instead of just throwing photographs into an algorithmic feed.

* * *

## The one-sentence version

If someone asks you:

> “What is Vin?”

I'd say:

> **Vin is a dedicated platform for Gunpla enthusiasts to discover, identify, collect, build, customize, buy, sell, and commission Gunpla — combining a structured model database, visual community, marketplace, and builder platform in one ecosystem.**

And honestly, **“focused market, tools and sharing”** is exactly the right direction.

The key is that Vin shouldn't feel like a generic social network that happens to contain Gundam pictures.

It should feel like:

> **“This website understands how I actually live with this hobby.”**

That is the strongest part of the idea.

And I think the next step isn't UI yet. The next step should be to turn this into a proper **Vin product architecture**: define the users, their jobs-to-be-done, core entities/data model, modules, marketplace/commission flows, and then determine what the **actual MVP** should contain versus what belongs in later versions. That will prevent Vin from becoming a giant “everything app” before you've validated its most valuable loop.

- Claude
Yes, I got your points. I'll run some research on the existing Gunpla marketplaces and tools to see where "Vin" could fit, then come back with my read on it.Yes, I got it. You're describing three separate problems that all come from the same root: the Gunpla hobby has no dedicated home online.

1. **Custom builds are hard to find or commission.** General marketplaces don't fit, and on social media creators often don't tag their work, text search is weak, and style is hard to describe.
2. **You can't identify a kit.** You see a design you like but don't know its name, grade, or which anime it comes from.
3. **Supplies run out mid-build.** Tape, sandpaper, thinner, paint, nippers.

"Vin" would be a focused marketplace, a toolbox, and a sharing community in one place.

## What already exists

**Commissions.** These are scattered across general platforms. Etsy has over a thousand Gunpla commission listings, mixed in with unrelated items like dolls and plush toys. On Fiverr, builders offer build, paint and customization services and send progress updates. Some builders there offer airbrushing, extra panel lines and scratchbuilding. There are also standalone builder sites, such as one based in Yogyakarta. Nothing lets you search by style, grade, technique or budget, which is your core problem.

**Kit databases.** These are solid. GunplaDB lets you search hundreds of kits by grade, scale, series and price. GunplaDB.net adds collections, wishlists and ratings. There is also an open dataset of HG, RG, MG and PG kits with release dates, first appearances and retail prices. The data for problem 2 mostly exists already. What's missing is identifying a kit from a photo, and this is especially true for custom builds, which look different from the box art.

**Collection trackers.** A 2026 comparison says most builders still track their collection in a spreadsheet and post work-in-progress on Instagram or Reddit. Gunpla Gallery is a build showcase organized by kit line.

**Indonesia specifically.** The community runs on Facebook groups. One is a dedicated Gundam buy/sell group covering kits, kitbash parts and barter. Local hobby shops and community recommendations are how people find cheaper kits and detailing supplies. Gunpla is also rarely sold online in some parts of the country. That fragmentation is the opening for Vin.

## Where Vin could fit

- **Custom-build discovery** is the strongest gap. Structured listings with grade, base kit, technique (panel lining, repaint, weathering, kitbash), style tags and price range would fix the "creators don't tag" problem by making tags required.
- **Kit identification from a photo** is a useful feature. Even a rough match to grade and series saves a lot of time. It would be harder to build well, so it could come later.
- **Supplies** is the weakest fit as a product. Shopee and Tokopedia already sell these, so the value would be linking supplies to a specific build (for example, "this build needs panel liner, matte top coat and 400-grit sandpaper") rather than stocking anything.
- **Sharing** matters because it supplies the content and trust that make the marketplace work.

## Risks

- **Two-sided cold start.** A marketplace with no builders has no buyers, and vice versa. Start with the sharing and showcase side to attract builders, then add commissions.
- **Payments and trust.** Custom work is high-risk. You need clear commission terms, milestone photos and ideally escrow, or buyers will go back to DMs.
- **Shipping built kits.** They are fragile and costly to ship, so dispute handling matters.
- **Bootleg kits.** Cheaper bootleg kits are popular in Indonesia and are a touchy topic in the community. Decide early how Vin handles them, because it affects listings and moderation.

## Suggested MVP

Builder profiles and build posts with required structured tags, plus a search and filter page by grade, series, technique and style. Add a "what kit is this?" request board where the community identifies kits, before you invest in image recognition. Commissions, payments and supplies come after that.

One question would shape the plan: is Vin Indonesia-first or global? Indonesian-first means Bahasa, local payments and shipping, and the Facebook groups as your launch audience.

Sources:
- [Gunpla Build Commission - Etsy](https://www.etsy.com/market/gunpla_build_commission)
- [Fiverr: Hrzworks gunpla commission](https://www.fiverr.com/hrzworks/build-paint-and-customize-your-gundam-model-kit-gunpla)
- [Fiverr: Gunpla_art](https://www.fiverr.com/gunpla_art/build-paint-and-customize-your-gunpla-or-gundam)
- [HRZ Gundam Works](https://hrzgundamworks.com/)
- [GunplaDB](https://gunpladb.com/)
- [GunplaDB.net](https://gunpladb.net/database.html)
- [Gunpla Dataset (Kaggle)](https://www.kaggle.com/datasets/marzho/gunpla-dataset)
- [Best Gunpla Tracking Tools in 2026 | Costumary](https://www.costumary.com/blog/gunpla-tracking-tools-2026)
- [Gunpla Gallery](https://gunplagallery.com/kits)
- [Gundam Tricks: where to buy Gundam](https://www.mygundamtricks.com/tempat-membeli-gundam-terlengkap-online/)
- [Mind Genesis: Gunpla bootleg in Indonesia](https://mygoldmachine.wordpress.com/2024/12/31/fenomena-perkembangan-gunpla-bootleg-di-indonesia-berkat-dukungan-komunitas/)
- [MEDIAINI: Gundam plastic model business](https://mediaini.com/bisnis/2020/12/24/36514/intip-bisnis-mainan-gundam-plastik-yang-banyak-dicari/)
