
-- ============ CRM tables: admin-only ============
DROP POLICY IF EXISTS "Authenticated read on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated write on contacts" ON public.contacts;

CREATE POLICY "Admins can read contacts"
ON public.contacts FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can write contacts"
ON public.contacts FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Authenticated read on interactions" ON public.interactions;
DROP POLICY IF EXISTS "Authenticated write on interactions" ON public.interactions;

CREATE POLICY "Admins can read interactions"
ON public.interactions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can write interactions"
ON public.interactions FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

-- ============ Careers rate limits: service_role only ============
DROP POLICY IF EXISTS "Anyone can read rate limits" ON careers.application_rate_limits;
DROP POLICY IF EXISTS "Anyone can insert rate limits" ON careers.application_rate_limits;

REVOKE ALL ON careers.application_rate_limits FROM anon, authenticated;

-- Also lock applications table from direct anon insert; uploads go through edge function
DROP POLICY IF EXISTS "Anyone can submit applications" ON careers.applications;
REVOKE INSERT, SELECT ON careers.applications FROM anon, authenticated;

-- ============ careers-cvs storage: service-role uploads only ============
DROP POLICY IF EXISTS "Anyone can upload CVs" ON storage.objects;
DROP POLICY IF EXISTS "Anonymous can upload CVs" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can read CVs" ON storage.objects;
-- Keep: "Admins can read CVs"

-- ============ Views: switch to security invoker ============
ALTER VIEW public.companies SET (security_invoker = true);
ALTER VIEW public.cpo_pipeline SET (security_invoker = true);
ALTER VIEW public.dp_pipeline SET (security_invoker = true);
ALTER VIEW public.recent_activity SET (security_invoker = true);

-- ============ Functions: pin search_path ============
ALTER FUNCTION public.update_updated_at() SET search_path = public;
ALTER FUNCTION public.sync_newsletter_to_contacts() SET search_path = public;
ALTER FUNCTION public.refresh_last_contact_date() SET search_path = public;
ALTER FUNCTION public.sync_contact_submission_to_contacts() SET search_path = public;

-- ============ Revoke EXECUTE on admin-only SECURITY DEFINER functions ============
REVOKE EXECUTE ON FUNCTION public.get_contact_submissions() FROM anon;
REVOKE EXECUTE ON FUNCTION public.create_admin_user(text) FROM anon;
