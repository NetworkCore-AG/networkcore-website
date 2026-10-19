-- Create a rate limiting table for contact form submissions
CREATE TABLE public.contact_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  submission_count INT NOT NULL DEFAULT 1,
  last_submission_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- Create index for efficient lookups
CREATE INDEX idx_contact_rate_limits_ip_address ON public.contact_rate_limits(ip_address);
CREATE INDEX idx_contact_rate_limits_last_submission ON public.contact_rate_limits(last_submission_at);

-- Create policies to allow edge functions to manage rate limiting
CREATE POLICY "Edge functions can manage rate limits" 
ON public.contact_rate_limits 
FOR ALL 
USING (true);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_contact_rate_limits_updated_at
BEFORE UPDATE ON public.contact_rate_limits
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();