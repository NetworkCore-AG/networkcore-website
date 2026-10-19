-- Fix rate limits table to restrict access to service role only
DROP POLICY IF EXISTS "Edge functions can manage rate limits" ON public.contact_rate_limits;

CREATE POLICY "Service role can manage rate limits" 
ON public.contact_rate_limits 
FOR ALL 
TO service_role
USING (true);