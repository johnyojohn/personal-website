import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function getPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), "src/posts");

    // Check if the directory exists
    if (!fs.existsSync(postsDirectory)) {
      throw new Error("Posts directory does not exist.");
    }

    const fileNames = fs.readdirSync(postsDirectory);

    // Check if there are any files in the directory
    if (fileNames.length === 0) {
      throw new Error("No posts found in the directory.");
    }

    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);
        const mdxSource = await serialize(content);

        // Explicitly parse the published date
        const publishedDate = new Date(data.publishedDate);

        if (isNaN(publishedDate)) {
          throw new Error(`Invalid published date in post: ${slug}`);
        }

        return {
          slug,
          mdxSource,
          publishedDate,
          ...data,
        };
      })
    );

    // Don't change sorting logic
    allPostsData.sort((a, b) => {
      if (b.publishedDate > a.publishedDate) return 1;
      if (b.publishedDate < a.publishedDate) return -1;
      return 0;
    });

    return allPostsData;
  } catch (error) {
    console.error("An error occurred while fetching posts:", error);
    return [];
  }
}
