import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="text-center">
        <h1 className="text-5xl mb-5 mt-8">Hello, I'm John Seungjin Oh</h1>
        <p className="text-lg text-[#e43a46]">
          This is my personal website and blog.
        </p>
      </div>
      <p className="prose prose-neutral max-w-none mt-20">
        Go to the "About Me" page to view my socials/contacts, projects, resume,
        and other miscellaneous information about me.
        <br />
        <br />
        Go to the "Blog" page to view my blog. I write regularly (hopefully
        around once a week) about philosophy, computer science, math, books, and
        sometimes even my own opinions. Although the blog is pretty empty for
        now, I'm in the process of migrating some of my past writing. It will
        also get new content with some time.
        <br />
        <br />
        This website was created pretty much from scratch (a pedantic would say
        that no developer creates anything from scratch since everyone, and
        especially developers, and <i>especially</i> web developers, all stand
        on the shoulders of giants; I would not disagree) while I was learning
        Next.js and Tailwind CSS. The website's icon was produced by DALL-E 3
        during an unsuccesful attempt to emulate Rothko paintings.
      </p>
    </Layout>
  );
}
