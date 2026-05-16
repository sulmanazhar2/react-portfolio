// Auto-discovers all MDX files under src/content/blog/
// Each MDX file exports its component as default and frontmatter as named export.

const modules = import.meta.glob("../content/blog/*.mdx", { eager: true });

const slugFromPath = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.mdx$/, "");

const estimateReadingTime = (text = "") => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
};

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const fm = mod.frontmatter || {};
    return {
      slug: fm.slug || slugFromPath(path),
      title: fm.title || "Untitled",
      date: fm.date || "",
      summary: fm.summary || "",
      tags: fm.tags || [],
      published: fm.published !== false,
      readingTime: estimateReadingTime(fm._raw || fm.summary || ""),
      Component: mod.default,
    };
  })
  .filter((p) => p.published || import.meta.env.DEV)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug);
