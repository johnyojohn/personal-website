import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { getPosts } from "../../../getPosts";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ source, frontMatter }) {
  return (
    <Layout title={frontMatter.title}>
      <article className="blog-post">
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} />
      </article>
      <style jsx>{`
        .blog-post {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getPosts();
  const postIndex = posts.findIndex((post) => post.slug === slug);
  const selectedPost = posts[postIndex];

  return {
    props: {
      source: selectedPost.mdxSource,
      frontMatter: {
        title: selectedPost.title,
      },
    },
  };
}
