-- Fix mutable search_path on notify_new_signup
CREATE OR REPLACE FUNCTION public.notify_new_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  payload jsonb;
BEGIN
  payload := jsonb_build_object(
    'source', TG_TABLE_NAME,
    'record', to_jsonb(NEW)
  );

  PERFORM net.http_post(
    url := 'https://butkrxxamuwzdgyguqxj.supabase.co/functions/v1/notify-new-signup',
    body := payload,
    headers := jsonb_build_object('Content-Type', 'application/json')
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'notify_new_signup failed: %', SQLERRM;
  RETURN NEW;
END;
$function$;

-- Restrict careers-cvs bucket: deny anon/authenticated direct uploads.
-- Uploads happen via the submit-application edge function using the service role,
-- which bypasses RLS. Add explicit deny-by-omission policies (no INSERT/UPDATE/DELETE
-- policies for anon/authenticated means those operations are blocked under RLS).
-- We add an explicit restrictive policy for clarity.
DROP POLICY IF EXISTS "Block direct uploads to careers-cvs" ON storage.objects;
CREATE POLICY "Block direct uploads to careers-cvs"
ON storage.objects
AS RESTRICTIVE
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id <> 'careers-cvs');

DROP POLICY IF EXISTS "Block direct updates to careers-cvs" ON storage.objects;
CREATE POLICY "Block direct updates to careers-cvs"
ON storage.objects
AS RESTRICTIVE
FOR UPDATE
TO anon, authenticated
USING (bucket_id <> 'careers-cvs');

DROP POLICY IF EXISTS "Block direct deletes to careers-cvs" ON storage.objects;
CREATE POLICY "Block direct deletes to careers-cvs"
ON storage.objects
AS RESTRICTIVE
FOR DELETE
TO anon, authenticated
USING (bucket_id <> 'careers-cvs');