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
        <h1 className="text-4xl mb-5">About Me</h1>
        <p className="prose prose-neutral max-w-none mt-8">
          The government calls me Seungjin Oh, my friends call me John Oh, and
          thus this website calls me John Seungjin Oh.
          <br />
          I am a first-year undergraduate student at Carnegie Mellon's School of
          Computer Science. In addition to a B.S. degree in computer science, I
          plan on pursuing an additional major in philosophy. Occasionally, I
          notice my heart whispering into my ear that I should also major in
          math, tempting me with cool topological visualizations and intricate
          connections to philosophy and mind-bending properties of ordinals.
          Unforunately, I can only count to two, so a third degree would result
          in a segfault error.
          <br />
          My biggest focuses within computer science right now are large
          language models (LLMs), learning interesting algorithms, and web
          development. Within philosophy, my biggest interests are personal
          identity, the "later" Nietzsche, philosophy of A.I., and social theory
          (Debord, Baudrillard, Han).
        </p>

        {/* Socials/Contacts */}
        <section className="my-8">
          <h2 className="text-2xl mb-4 text-customRed">Socials & Contacts</h2>
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
              Primary email: johanjohnsjo@gmail.com
              <br />
              School email: seungjio@andrew.cmu.edu
              <br />
              Address:
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
              Note: My shipping address is different since I live on campus.
              Please email me if it is needed.
            </small>
          </div>
        </section>

        {/* Projects */}
        <section className="my-8 mt-8">
          <h2 className="text-2xl mb-4 text-customRed">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <h3 className="text-xl mb-1 text-customBlue">
                Internet Rabbithole App (in early development)
              </h3>
              <hr className="mb-3" width="100%" color="black" />

              <p>
                Full-stack web app built primarily with Next.js and OpenAI API
                which will allow users to store, visualize, explore, and get
                recommendations regarding "internet rabbitholes."
              </p>
              <a
                href="https://github.com/johnyojohn/rabbithole"
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
          <h2 className="text-2xl mb-4 text-customRed">Resume</h2>
          <a href="/resume.pdf" className="text-blue-500">
            Download my resume
          </a>
        </section>
      </div>
    </Layout>
  );
}
