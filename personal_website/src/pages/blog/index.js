import Layout from "../../components/Layout";
import { getPosts } from "../../getPosts";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <h1>Blog Posts</h1>
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .blog-list {
          list-style: none;
        }
        .blog-list li {
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .blog-list li:hover {
          background-color: #eee;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
