import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);
      const mdxSource = await serialize(content);

      // Explicitly parse the published date
      const publishedDate = new Date(data.publishedDate);

      console.log(`Published Date for ${slug}:`, publishedDate); // Debugging line

      return {
        slug,
        mdxSource,
        publishedDate,
        ...data,
      };
    })
  );

  allPostsData.sort((a, b) => {
    if (b.publishedDate > a.publishedDate) return 1;
    if (b.publishedDate < a.publishedDate) return -1;
    return 0;
  });

  return allPostsData;
}
