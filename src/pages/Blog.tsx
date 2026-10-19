import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getPublishedPosts, getCategories } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { t } = useTranslation("blog");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const posts = getPublishedPosts();
  const categories = getCategories();

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>EV Charging Blog | NetworkCore Insights & Guides</title>
        <meta name="description" content="Expert insights on EV charging, roaming, payments, and financial infrastructure. Stay updated with the latest trends and guides from the NetworkCore blog." />
        <meta property="og:title" content="EV Charging Blog | NetworkCore Insights & Guides" />
        <meta property="og:description" content="Expert insights on EV charging, roaming, payments, and financial infrastructure. Stay updated with the latest trends and guides from the NetworkCore blog." />
        <meta property="og:image" content="https://networkcore.org/blog/blog-og.jpg" />
        <meta property="og:image:alt" content="Blog of NetworkCore" />
        <meta property="og:url" content="https://networkcore.org/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Charging Blog | NetworkCore Insights & Guides" />
        <meta name="twitter:description" content="Expert insights on EV charging, roaming, payments, and financial infrastructure." />
        <meta name="twitter:image" content="https://networkcore.org/blog/blog-og.jpg" />
        <meta name="twitter:image:alt" content="Blog of NetworkCore" />
        <link rel="canonical" href="https://networkcore.org/blog" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://networkcore.org/blog"}]})}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t("heroTitle")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Stay updated with the latest trends, guides, and news from the world of energy and finance.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                {t("allCategories")}
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">{t("noPosts")}</p>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Featured Post */}
                {featuredPost && (
                  <BlogCard post={featuredPost} featured />
                )}

                {/* Remaining Posts Grid */}
                {remainingPosts.length > 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {remainingPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
