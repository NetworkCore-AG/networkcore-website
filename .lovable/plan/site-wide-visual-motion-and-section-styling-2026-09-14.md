# Site-wide visual motion and section styling

## Goal
Carry the homepage’s polished rhythm across the rest of the website without changing page wording, information order, forms, navigation, or footer.

## What will change
- Give non-landing sections an alternating treatment: a very light green-to-blue wash or a restrained neutral grey.
- Fade and lift headings, supporting text, and section content into view as visitors scroll.
- Give existing boxes and repeated content items the homepage’s subtle lift, border emphasis, shadow, and icon response on hover.
- Keep landing media sections, forms, navigation, footer, articles, the network globe, and legal copy visually stable.
- Respect reduced-motion settings and disable hover movement on touch devices.

## Technical approach
- Add one route-aware presentation layer that identifies eligible page sections and repeated boxes after navigation.
- Apply semantic CSS classes backed by the existing green, blue, neutral, border, and shadow tokens.
- Use one shared Intersection Observer for efficient entrance motion rather than editing dozens of pages independently.
- Validate representative commercial, product, pricing, informational, desktop, and mobile views for readability, spacing, and interaction.