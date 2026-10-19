import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { getPublishedPosts } from "@/data/blogPosts";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";

interface RecentPostsProps {
  limit?: number;
}

const RecentPosts = ({ limit = 3 }: RecentPostsProps) => {
  const { t, i18n } = useTranslation("blog");
  const posts = getPublishedPosts().slice(0, limit);
  const currentLang = i18n.language;
  const blogPath = currentLang === "en" ? "/blog" : `/${currentLang}/blog`;

  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("recentPosts")}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t("recentPostsDescription")}
            </p>
          </div>
          <Link to={blogPath} className="mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              {t("viewAllPosts")} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
