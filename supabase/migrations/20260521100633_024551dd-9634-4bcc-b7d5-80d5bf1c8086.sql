-- Careers schema
CREATE SCHEMA IF NOT EXISTS careers;

-- Applications table
CREATE TABLE IF NOT EXISTS careers.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  location text NOT NULL,
  area_of_interest text NOT NULL,
  cv_storage_path text NOT NULL,
  linkedin_url text,
  about text NOT NULL,
  ip_address inet,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE careers.applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous insert (form submission)
CREATE POLICY "Anyone can submit applications"
ON careers.applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can read
CREATE POLICY "Admins can view applications"
ON careers.applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Rate limits table
CREATE TABLE IF NOT EXISTS careers.application_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address inet NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS application_rate_limits_ip_created_idx
  ON careers.application_rate_limits (ip_address, created_at DESC);

ALTER TABLE careers.application_rate_limits ENABLE ROW LEVEL SECURITY;

-- Anon can insert and select (needed for client-side rate limit check)
CREATE POLICY "Anyone can read rate limits"
ON careers.application_rate_limits
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can insert rate limits"
ON careers.application_rate_limits
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Grant usage on schema to anon/authenticated so PostgREST exposes it
GRANT USAGE ON SCHEMA careers TO anon, authenticated, service_role;
GRANT SELECT, INSERT ON careers.applications TO anon, authenticated;
GRANT SELECT, INSERT ON careers.application_rate_limits TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA careers TO service_role;

-- Storage policies for careers-cvs bucket (bucket already exists, private)
CREATE POLICY "Anyone can upload CVs"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'careers-cvs');

CREATE POLICY "Admins can read CVs"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'careers-cvs' AND public.has_role(auth.uid(), 'admin'::public.app_role));
