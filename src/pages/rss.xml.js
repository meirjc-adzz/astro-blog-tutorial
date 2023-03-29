import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Meir J Cohen | Blog",
    description: "My first blog built with Astro",
    site: "https://astro-blog-tutorial-mjc.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
