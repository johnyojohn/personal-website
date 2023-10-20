import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="text-center">
        <h1 className="text-5xl mb-3 mt-5 font-mono tracking-[-0.05em]">
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
        Go to the "blog" page to view my blog. I write regularly (hopefully
        around once a week) about philosophy, computer science, math, books,
        literature, and sometimes even my own opinions. Although the blog is
        pretty empty for now, I'm in the process of migrating some of my past
        writing. It will also get new content with some time.
        <br />
        <br />
        This website was more or less created from scratch while I was learning
        Next.js and Tailwind CSS. Here is the{" "}
        <a
          href="https://github.com/johnyojohn/personal-website"
          className="text-blue-500"
        >
          Github repo
        </a>
        . The website's main logo was produced by DALL-E 3 during an unsuccesful
        attempt to emulate Rothko paintings. I then used Adobe Illustrator to
        make a favicon version of the logo.
        <br />
        <br />
        Lastly, here is a picture of my cat:
      </p>
      <Image
        className="mt-2"
        src="/cat.jpg"
        alt="Cutest cat in the world"
        width={400}
        height={400 * (1897 / 1170)}
      />
      <p className="font-serif prose prose-neutral max-w-none mt-2 text-customBlue">
        <i>what a distinguished gentleman</i>
      </p>
    </Layout>
  );
}
