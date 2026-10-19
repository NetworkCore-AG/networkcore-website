-- Update create_admin_user function to add authentication check and sanitize error messages
CREATE OR REPLACE FUNCTION public.create_admin_user(_user_email text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _user_id uuid;
  _result json;
BEGIN
  -- Only allow authenticated admins to create other admins
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RETURN json_build_object('success', false, 'message', 'Access denied');
  END IF;

  -- Get user ID from auth.users table
  SELECT id INTO _user_id
  FROM auth.users
  WHERE email = _user_email;
  
  IF _user_id IS NULL THEN
    -- Don't expose whether email exists or not
    RETURN json_build_object('success', false, 'message', 'User not found');
  END IF;
  
  -- Insert admin role (will be ignored if already exists due to unique constraint)
  INSERT INTO public.user_roles (user_id, role)
  VALUES (_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RETURN json_build_object(
    'success', true, 
    'message', 'Admin role granted successfully',
    'user_id', _user_id
  );
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object('success', false, 'message', 'An error occurred');
END;
$function$;