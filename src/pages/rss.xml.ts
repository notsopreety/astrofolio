import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );

  return rss({
    title: "samirb.com.np",
    description: "A blog about backend development, automation, and tech stacks.",
    site: context.site || "https://samirb.com.np",
    items: sortedPosts.map((post) => ({
      link: `/posts/${post.id}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDatetime),
    })),
  });
}
