import Layout from "../../components/Layout";
import { getPosts } from "../../getPosts";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <div className="text-center">
        <h1 className="text-5xl mb-5">Blog Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border p-4 rounded-md">
              <Link href={`/blog/${post.slug}`} className="text-lg font-semibold">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

// ... existing getStaticProps code

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
