ALTER TABLE public.newsletter_signups
ADD COLUMN IF NOT EXISTS consent boolean NOT NULL DEFAULT false;

ALTER TABLE careers.applications
ADD COLUMN IF NOT EXISTS consent boolean NOT NULL DEFAULT false;
