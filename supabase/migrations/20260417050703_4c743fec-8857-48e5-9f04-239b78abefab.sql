CREATE TABLE public.newsletter_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for the newsletter"
ON public.newsletter_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view signups"
ON public.newsletter_signups
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));