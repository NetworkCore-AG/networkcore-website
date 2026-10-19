-- Drop and recreate the RLS policy for contact submissions
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

-- Create a proper INSERT policy that allows anonymous submissions
CREATE POLICY "Allow anonymous contact form submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Ensure the admin policy exists for SELECT
DROP POLICY IF EXISTS "Admins can view all contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view all contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));