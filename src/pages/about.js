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
          I'm John Seungjin Oh.
          <br />
          I am a third-year undergraduate student at Carnegie Mellon's School
          of Computer Science, graduating in May 2027. I am also pursuing an
          additional major in philosophy, with a particular interest in logic.
          Occasionally, I notice my heart whispering into my ear that I should
          take on a major in math as well, tempting me with nLab and cool
          topological visualizations and the intricate connections math has with
          philosophy. But I can only count to two.
          <br />
          My biggest focuses within computer science right now are ML, education technology, and AR. Within
          philosophy, my biggest interests are epistemology, causality, the "later" Nietzsche, Baudrillard, and
          philosophy of A.I.
          <br />
          I believe that every single person in the world is entitled to a life worth living.
          So, I want to give everyone what they deserve. This is my justice.
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
                3D Pen in VR
              </h3>
              <hr className="mb-3" width="100%" color="black" />
              <p>
                Group project from CMU's Extended Reality course. Developed for Meta Quest 2/3 using Unity.
                We built a 3D "pen" that you can use in VR to draw 3D lines and manifolds.
                We also implemented a coordinate system that the user can extend, translate,
                rotate, scale, and place 3D objects in. 
                <br />
                I was inspired by how when we solve geometry problems, we often use graph paper to
                draw out the problem and solve it. When faced with a 3D problem, we have no choice but to 
                settle with 2D projections, since we're limited by 2D pen and paper. With VR, this limitation
                is gone! Many ordinary 3D shapes can be drawn using only a 3D pen and a boundary-filling algorithm.
              </p>
              <a
                href="https://github.com/syh379/IXR-final-project"
                className="text-blue-500"
              >
                Github Repo
              </a>
              <a
                href="/videos/FinalProjectWalkthrough.mp4"
                className="text-blue-500 ml-2"
              >
                Walkthrough 
              </a>
            </div>
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
