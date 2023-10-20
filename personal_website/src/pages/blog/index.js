import Layout from "../../components/Layout";
import { getPosts } from "../../getPosts";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <div className="">
        <h1 className="text-4xl font-mono mb-10">blog</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border p-4 rounded-md">
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg font-semibold"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
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
