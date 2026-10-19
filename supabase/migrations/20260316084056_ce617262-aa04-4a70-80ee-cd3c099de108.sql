INSERT INTO public.blog_seo (slug, title, description, image_url, page_type)
VALUES (
  'ev-charging-margins',
  'EV Charging Margins: Transparency & Market Forces | NetworkCore',
  'EV charging margins should be driven by market forces, not opaque pricing. Learn how transparent transaction infrastructure enables dynamic pricing and fair revenue distribution.',
  '/images/blog/ev-charging-margins.jpg',
  'blog'
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  updated_at = now();