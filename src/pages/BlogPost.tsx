import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogPostCta from "@/components/blog/BlogPostCta";
import DOMPurify from "isomorphic-dompurify";

import { getPostBySlug, getRelatedPosts, calculateReadingTime, getBlogCtaAudience } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation("blog");
  const navigate = useNavigate();
  const currentLang = i18n.language;
  const blogPath = currentLang === "en" ? "/blog" : `/${currentLang}/blog`;

  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Redirect to blog page if post not found
  useEffect(() => {
    if (slug && !post) {
      navigate(blogPath);
    }
  }, [slug, post, navigate, blogPath]);

  if (!post) {
    return null;
  }

  const readingTime = calculateReadingTime(post.content);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(currentLang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // JSON-LD structured data for SEO
  const absoluteImage = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `https://networkcore.org${post.featuredImage}`;
  const canonicalUrl = `https://networkcore.org/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteImage,
    datePublished: post.publishedAt,
    dateModified: (post as { updatedAt?: string }).updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "NetworkCore",
      logo: {
        "@type": "ImageObject",
        url: "https://networkcore.org/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.featuredImage.startsWith('http') ? post.featuredImage : `https://networkcore.org${post.featuredImage}`} />
        <meta property="og:url" content={`https://networkcore.org/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.featuredImage.startsWith('http') ? post.featuredImage : `https://networkcore.org${post.featuredImage}`} />
        <link rel="canonical" href={`https://networkcore.org/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Article Header */}
        <article>
          <header className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <Link to={blogPath}>
                <Button variant="ghost" size="sm" className="mb-6 -ml-2 gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {t("backToBlog")}
                </Button>
              </Link>

              <div className="max-w-4xl mx-auto">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {post.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {readingTime} {t("minRead")}
                  </span>
                </div>
                <div className="mt-6">
                  <ShareButtons slug={post.slug} title={post.title} />
                </div>
              </div>
            </div>
          </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-muted/20 aspect-[16/9]">
              <img
                src={post.featuredImage}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto text-left">
            <div
              className="
                [&>p]:text-foreground/80 [&>p]:text-lg [&>p]:leading-[1.75] [&>p]:mb-5
                
                [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-foreground 
                [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:pt-6 [&>h2]:border-t [&>h2]:border-border/50
                first:[&>h2]:mt-0 first:[&>h2]:pt-0 first:[&>h2]:border-t-0
                
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground 
                [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:pl-4 [&>h3]:border-l-4 [&>h3]:border-primary
                
                [&>ul]:my-5 [&>ul]:pl-0 [&>ul]:list-none [&>ul]:space-y-2
                [&>ul>li]:text-foreground/80 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed
                [&>ul>li]:pl-6 [&>ul>li]:relative
                [&>ul>li]:before:content-['—'] [&>ul>li]:before:absolute 
                [&>ul>li]:before:left-0 [&>ul>li]:before:text-primary [&>ul>li]:before:font-bold
                
                [&>ol]:my-5 [&>ol]:pl-0 [&>ol]:list-none [&>ol]:space-y-2
                [&>ol>li]:text-foreground/80 [&>ol>li]:text-lg [&>ol>li]:leading-relaxed
                
                [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:no-underline
                
                [&_strong]:text-primary [&_strong]:font-semibold
              "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content, {
                  ALLOWED_TAGS: ['p','h1','h2','h3','h4','h5','h6','strong','em','b','i','u','a','ul','ol','li','blockquote','br','hr','code','pre','img','figure','figcaption','table','thead','tbody','tr','th','td','span','div'],
                  ALLOWED_ATTR: ['href','target','rel','class','src','alt','title','id'],
                }),
              }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t("relatedPosts")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        <BlogPostCta audience={getBlogCtaAudience(post)} slug={post.slug} />

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
