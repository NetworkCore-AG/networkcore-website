import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SECTION_CLASS = "site-content-section";
const REVEAL_CLASS = "site-section-reveal";
const CARD_CLASS = "site-interactive-card";
const BLOG_PATH = /^\/(?:[a-z]{2}\/)?blog(?:\/|$)/;
const PLAIN_PATH = /^\/(?:[a-z]{2}\/)?privacy\/?$/;

const SiteSectionMotion = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" || /^\/(?:[a-z]{2})?$/.test(pathname) || BLOG_PATH.test(pathname) || PLAIN_PATH.test(pathname)) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("#root section"));
      const eligibleSections = sections.filter((section) => {
        if (section.closest("article, footer")) return false;
        if (section.querySelector("h1, .mapboxgl-map")) return false;
        if (section.id === "home") return false;
        return true;
      });

      eligibleSections.forEach((section, index) => {
        section.classList.add(SECTION_CLASS);
        section.classList.add(index % 2 === 0 ? "site-section-network" : "site-section-neutral");

        const content = Array.from(section.children).find((child) => {
          if (!(child instanceof HTMLElement)) return false;
          return !child.classList.contains("absolute") && child.tagName !== "VIDEO" && child.tagName !== "IMG";
        });

        if (content instanceof HTMLElement) {
          content.classList.add(REVEAL_CLASS);
        }

        section.querySelectorAll<HTMLElement>("[class*='rounded'][class*='border']").forEach((candidate) => {
          if (candidate.matches("button, input, textarea, select") || candidate.closest("form, nav, footer, article")) return;
          if (candidate.querySelector("form")) return;
          candidate.classList.add(CARD_CLASS);
        });
      });

      const revealItems = document.querySelectorAll<HTMLElement>(`.${REVEAL_CLASS}`);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.08 },
      );

      revealItems.forEach((item) => observer.observe(item));
      cleanupObserver = observer;
    });

    let cleanupObserver: IntersectionObserver | undefined;

    return () => {
      window.cancelAnimationFrame(frame);
      cleanupObserver?.disconnect();
      document.querySelectorAll(`.${SECTION_CLASS}`).forEach((section) => {
        section.classList.remove(SECTION_CLASS, "site-section-network", "site-section-neutral");
      });
      document.querySelectorAll(`.${REVEAL_CLASS}`).forEach((item) => item.classList.remove(REVEAL_CLASS, "is-visible"));
      document.querySelectorAll(`.${CARD_CLASS}`).forEach((card) => card.classList.remove(CARD_CLASS));
    };
  }, [pathname]);

  return null;
};

export default SiteSectionMotion;