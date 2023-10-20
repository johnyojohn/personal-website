import Layout from "../../components/Layout";
import { getPosts } from "../../getPosts";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <div className="">
        <h1 className="text-4xl font-mono mb-8">blog</h1>
        <p className="prose prose-neutral max-w-none mb-4">
          Welcome to my blog. I try to upload new posts around once a week. Some
          of my topics include philosophy, computer science, math, books,
          literature, education, and even my own opinions.
        </p>

        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border px-4 pt-3 pb-3 rounded-md">
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl font-semibold font-mono text-customRed"
              >
                {post.title}
              </Link>
              <p className="prose prose-neutral text-sm mb-8 text-gray-500 mt-1">
                {post.summary}
              </p>
              <p className="text-sm text-customBlue">{post.publishedDate}</p>
            </li>
          ))}
        </ul>
      </div>
      <p>
        {/*placeholder just to have the scrollbar load and make the UI consistent*/}
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
