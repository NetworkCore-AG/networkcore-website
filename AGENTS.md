# Architecture rules

- Keep the global Footer shared on every page with join, social, navigation and legal areas; the join area spans three desktop columns and social links one, without a newsletter capture.
- Keep the shared ContactForm submission path intact; compact enquiry variants must supply a non-empty contextual message when the optional field is blank because the submission endpoint requires one.
- Keep optional-message disclosure within ContactForm's compact variant so other forms retain their required, visible message fields.
- Classify blog calls to action centrally from article metadata; all email captures use the shared server submission path so CRM tagging stays consistent.
- Keep product identity treatments shared between Navigation and Footer through global semantic identity tokens and classes, so colour mappings stay consistent.
- Reuse ProcessDiagram for host flows with an optional first-node label, so depot wording can vary without duplicating animation or layout.
- Reuse ChargingPartnerPricing across CPO, Private Hosts, Fleet Hosts and Network Access so tariff comparisons remain consistent while common inclusions stay in each page's cost table.
- Reuse DistributionPartnerPricing for distribution product pricing, using its public-only variant where required, so tariff wording and party-flow presentation remain consistent without exposing unsupported buying models.
- Keep Charging Links product metadata and enquiry validation together in its data module; menu, footer and form consume it so audience classification and pricing cannot drift.
- Keep ApiPreviewSection journey renders shared with optional title and description overrides so page-specific copy does not duplicate the screens.
