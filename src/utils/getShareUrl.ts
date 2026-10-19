const SUPABASE_PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;

/**
 * Generate a shareable URL for a blog post that serves correct OG meta tags.
 * Use this URL when sharing on LinkedIn, Twitter/X, WhatsApp, etc.
 */
export const getBlogShareUrl = (slug: string): string => {
  return `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/og-proxy?slug=${encodeURIComponent(slug)}`;
};

/**
 * Generate a shareable URL for a static page that serves correct OG meta tags.
 */
export const getPageShareUrl = (path: string): string => {
  const cleanPath = path.replace(/^\//, "").replace(/\/$/, "");
  return `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/og-proxy?path=${encodeURIComponent(cleanPath)}`;
};
