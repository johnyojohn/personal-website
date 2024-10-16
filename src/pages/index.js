import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="text-center">
        <h1 className="text-5xl mb-3 mt-12 font-mono tracking-[-0.05em]">
          hello, I'm John Seungjin Oh
        </h1>
        <p className="text-xl text-customRed">
          this is my personal website and blog
        </p>
      </div>
      <p className="prose prose-neutral max-w-none mt-16">
        Go to the "about me" page to view my socials & contacts, projects,
        resume, and other relevant information about me.
        <br />
        <br />
        Go to the "blog" page to view my blog. I might write about philosophy,
        computer science, math, books, literature, education, and sometimes even
        my own opinions. Although the blog is pretty empty for now, I'm in the
        process of migrating some of my past writing. It will also get new
        content with some time.
        <br />
        <br />
        This website was more or less created from scratch while I was learning
        Next.js and Tailwind CSS; here is the{" "}
        <a
          href="https://github.com/johnyojohn/personal-website"
          className="text-blue-500"
        >
          Github repo
        </a>
        . The website's main logo was produced by DALL-E 3 during an unsuccesful
        attempt to replicate the distinct feel of Rothko paintings. Then, I used
        Adobe Illustrator to make a favicon version of the logo.
        <br />
        <br />
        Lastly, here is a picture of my cat, to make the minimalist design
        slightly less obnoxious:
      </p>
      <Image
        className="mt-2"
        src="/cat2.jpg"
        alt="Cutest cat in the world"
        width={450}
        height={450 * (986 / 628)}
      />
      <p className="font-serif prose prose-neutral max-w-none mt-2">
        What a distinguished gentleman.
      </p>
    </Layout>
  );
}
