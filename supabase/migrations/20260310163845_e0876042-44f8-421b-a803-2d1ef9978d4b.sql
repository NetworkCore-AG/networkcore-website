
-- Blog SEO metadata table for social sharing
CREATE TABLE public.blog_seo (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL DEFAULT '/images/og-image.jpg',
  page_type text NOT NULL DEFAULT 'blog',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_seo ENABLE ROW LEVEL SECURITY;

-- Public read (edge function + crawlers need this)
CREATE POLICY "Anyone can read blog SEO data"
  ON public.blog_seo
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Admin write
CREATE POLICY "Admins can manage blog SEO data"
  ON public.blog_seo
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
