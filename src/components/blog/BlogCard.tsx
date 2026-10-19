import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost, calculateReadingTime, getDisplayTitle } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const { t, i18n } = useTranslation("blog");
  const readingTime = calculateReadingTime(post.content);
  const displayTitle = getDisplayTitle(post);
  const currentLang = i18n.language;
  const defaultPath = currentLang === "en" ? `/blog/${post.slug}` : `/${currentLang}/blog/${post.slug}`;
  const blogPath = post.canonicalPath ?? defaultPath;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(currentLang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (featured) {
    return (
      <Link to={blogPath} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">
                {post.category}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {displayTitle}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {readingTime} {t("minRead")}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                {t("readMore")} <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={blogPath} className="group block h-full">
      <article className="h-full flex flex-col overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
        </div>
        <div className="flex-1 p-5 flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {displayTitle}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readingTime} {t("minRead")}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
