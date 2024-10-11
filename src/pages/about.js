import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <Layout title="About Me">
      <div className="">
        <h1 className="text-4xl font-mono mb-8">about me</h1>
        <p className="prose prose-neutral max-w-none">
          My legal name is John Seungjin Oh. I also go by John Oh, Seungjin Oh,
          Johnyojohn, and (with acute awareness that a public pseudoynm is
          cringe) Anti-Dionysus.
          <br />
          I am a second-year undergraduate student at Carnegie Mellon's School
          of Computer Science hoping to graduate in 2026. I am also pursuing an
          additional major in philosophy, with a particular interest in logic.
          Occasionally, I notice my heart whispering into my ear that I should
          take on a major in math as well, tempting me with nLab and cool
          topological visualizations and the intricate connections math has with
          philosophy. But I can only count to two.
          <br />
          My biggest focuses within computer science right now are large
          language models (LLMs), algorithms, and web development. Within
          philosophy, my biggest interests are causality, the "later" Nietzsche,
          philosophy of A.I., and social theory (Debord, Baudrillard, Han).
        </p>

        {/* Socials/Contacts */}
        <section className="my-8">
          <h2 className="text-2xl mb-4 text-customRed font-mono">
            socials & contacts
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/johnyojohn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/johnseungjin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://x.com/johnseungjinoh?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
          <div className="">
            <p>
              primary email: johanjohnsjo@gmail.com
              <br />
              school email: seungjio@andrew.cmu.edu
              <br />
              address:
            </p>
            <p className="text-gray-500">
              Residence On Fifth
              <br />
              4700 Fifth Ave
              <br />
              Pittsburgh, PA 15213
              <br />
            </p>
            <small>
              note: my shipping address is different since I live on campus;
              please email me if it is needed.
            </small>
          </div>
        </section>

        {/* Projects */}
        <section className="my-8 mt-8">
          <h2 className="text-2xl mb-4 text-customRed font-mono">projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <h3 className="text-xl mb-1 text-customBlue">
                TextualLearner: Convert Educational Videos Into Articles (in
                progress)
              </h3>
              <hr className="mb-3" width="100%" color="black" />

              <p>
                Full-stack web app built with Next.js, Go, GCP, Vertex AI, and
                GraphQL that does exactly what the above heading says. Still
                working on performance issues and supporting more text formats
                (especially LaTeX).
              </p>
              <a
                href="https://github.com/johnyojohn/video-to-article"
                className="text-blue-500"
              >
                Github Repo
              </a>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl mb-1 text-customBlue">
                Personal Website and Blog
              </h3>
              <hr className="mb-3" width="100%" color="black" />
              <p>You're using it right now!</p>
              <a
                href="https://github.com/johnyojohn/personal-website"
                className="text-blue-500"
              >
                Github Repo
              </a>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>

        {/* Resume */}
        <section className="my-8 mt-8">
          <h2 className="text-2xl mb-4 text-customRed font-mono">resume</h2>
          <a href="/resume.pdf" className="text-blue-500">
            Download my resume
          </a>
        </section>
      </div>
    </Layout>
  );
}
