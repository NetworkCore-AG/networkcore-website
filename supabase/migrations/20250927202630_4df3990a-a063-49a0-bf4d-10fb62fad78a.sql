-- Create a function to safely add admin users
CREATE OR REPLACE FUNCTION public.create_admin_user(_user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _user_id uuid;
  _result json;
BEGIN
  -- Get user ID from auth.users table
  SELECT id INTO _user_id
  FROM auth.users
  WHERE email = _user_email;
  
  IF _user_id IS NULL THEN
    RETURN json_build_object('success', false, 'message', 'User not found with email: ' || _user_email);
  END IF;
  
  -- Insert admin role (will be ignored if already exists due to unique constraint)
  INSERT INTO public.user_roles (user_id, role)
  VALUES (_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RETURN json_build_object(
    'success', true, 
    'message', 'Admin role granted to user: ' || _user_email,
    'user_id', _user_id
  );
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object('success', false, 'message', 'Error: ' || SQLERRM);
END;
$$;

-- Create a function to view contact submissions (for admins only)
CREATE OR REPLACE FUNCTION public.get_contact_submissions()
RETURNS TABLE (
  id uuid,
  name text,
  company text,
  email text,
  audience_type text,
  message text,
  consent boolean,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if the current user is an admin
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Access denied: Admin role required';
  END IF;
  
  -- Return contact submissions for admins
  RETURN QUERY
  SELECT 
    cs.id,
    cs.name,
    cs.company,
    cs.email,
    cs.audience_type,
    cs.message,
    cs.consent,
    cs.created_at,
    cs.updated_at
  FROM public.contact_submissions cs
  ORDER BY cs.created_at DESC;
END;
$$;