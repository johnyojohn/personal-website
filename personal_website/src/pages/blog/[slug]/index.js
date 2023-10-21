import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { getPosts } from "../../../getPosts";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ source, frontMatter }) {
  return (
    <Layout title={frontMatter.title}>
      <article className="">
        <h1 className="text-4xl font-mono mb-2  tracking-[-0.05em]">
          {frontMatter.title}
        </h1>
        <h1 className="text-sm text-customBlue mb-12">
          Published on {frontMatter.publishedDate}
        </h1>
        <div className="prose prose-neutral max-w-none">
          <MDXRemote {...source} />
        </div>
      </article>
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
        publishedDate: selectedPost.publishedDate,
      },
    },
  };
}
