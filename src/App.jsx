import { useLayoutEffect } from "react";
import "./App.css";
import ThreeJSArea from "./ThreeJSArea";
import { gsap } from "gsap";
import Header from "./Header";
import MoreButton from "./Morebutton";

function App() {
  const tl = new gsap.timeline();

  useLayoutEffect(() => {
    introAnimation();
    AboutAnimation();
    ProjectAnimation();
    ContactAnimation();
    ThanksAnimation();
  }, []);

  const introAnimation = () => {
    tl.to("#test", { opacity: 1, duration: 3, ease: "slow" }, 1);
    tl.fromTo(
      "header",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" },
      2
    );
  };

  const AboutAnimation = () => {
    const aboutTl = gsap.timeline({ paused: true });
    aboutTl.fromTo(
      "#About",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    const aboutAnimation = (entry) => {
      if (entry[0].isIntersecting) aboutTl.play();
      if (!entry[0].isIntersecting && aboutTl.progress() !== 0)
        aboutTl.reverse();
    };

    const options = {
      rootMargin: "0px",
      threshold: 0.0,
    };
    const observer = new IntersectionObserver(aboutAnimation, options);
    const aboutSection = document.querySelector("#AboutScrollTrigger");
    observer.observe(aboutSection);
  };

  const ProjectAnimation = () => {
    const projectsTl = gsap.timeline({ paused: true });
    projectsTl.fromTo(
      "#Projects",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    const projectAnimation = (entry) => {
      if (entry[0].isIntersecting) projectsTl.play();
      if (!entry[0].isIntersecting && projectsTl.progress() !== 0)
        projectsTl.reverse();
    };

    const options = {
      rootMargin: "0px",
      threshold: 0.0,
    };
    const observer = new IntersectionObserver(projectAnimation, options);
    const projectSection = document.querySelector("#ProjectScrollTrigger");
    observer.observe(projectSection);
  };

  const ContactAnimation = () => {
    const contactTl = new gsap.timeline({ paused: true });
    contactTl.fromTo(
      "#Contact",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    const contactAnimation = (entry) => {
      if (entry[0].isIntersecting) contactTl.play();
      if (!entry[0].isIntersecting && contactTl.progress() !== 0)
        contactTl.reverse();
    };

    const options = {
      rootMargin: "0px",
      threshold: 0.0,
    };
    const observer = new IntersectionObserver(contactAnimation, options);
    const contactSection = document.querySelector("#ContactScrollTrigger");
    observer.observe(contactSection);
  };

  const ThanksAnimation = () => {
    const thanksTl = new gsap.timeline({ paused: true });
    thanksTl.fromTo(
      "#Thanks",
      { opacity: 0 },
      { opacity: 1, duration: 3, ease: "power2.inOut" }
    );

    const thanksAnimation = (entry) => {
      if (entry[0].isIntersecting) thanksTl.play();
      if (!entry[0].isIntersecting && thanksTl.progress() !== 0)
        thanksTl.reverse();
    };

    const options = {
      rootMargin: "0px",
      threshold: 0.0,
    };
    const observer = new IntersectionObserver(thanksAnimation, options);
    const thanksSection = document.querySelector("#Thanks");
    observer.observe(thanksSection);
  };

  return (
    <>
      <Header />
      <ThreeJSArea id={"test"} />
      <div className="spacer" />
      <section id="About">
        <h2 className="outlined">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h2>
        <p id="AboutScrollTrigger">
          I’m Michael Pope, an aspiring junior developer with a passion for
          finding elegant solutions to complex problems.
          <br /> Fueled by the desire to constantly improve and become the best
          version of myself I can be, I'm not afraid to make mistakes if it
          means I can learn from them.
        </p>
        <h3>Some more information:</h3>
        <div id="More">
          <MoreButton title="Front-end">
            <p> My current list of front-end skills include:</p>
            <ul className="skillsList">
              <li>React</li>
              <li>JavaScript</li>
              <li>ThreeJS</li>
              <li>Gsap</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </MoreButton>
          <MoreButton title="Back-end">
            <p>Current Backend skills:</p>
            <ul className="skillsList">
              <li>Firebase</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </MoreButton>
          <MoreButton title="Teamwork">
            <p>
              I have gained experience working in an agile Scrum environment
              during my training at Boolean UK and lead teams through both front
              and back-end projects.
            </p>
            <br />
            <p>
              Part of my responsibility was to manage the Kanban Board, taking
              user epics and turning them into tickets and assigning them to
              team members, reviewing code and requesting changes and reviews as
              I saw fit and working together with team members, other scrum
              masters and project leads to achieve our tasks.
            </p>
          </MoreButton>
          <MoreButton title="Learning">
            <p>
              A big part of the way I work and learn is based on the idea of
              'Win or Learn' rather than 'Win or Lose'.
              <br /> I believe that failing is a great opportunity to learn and
              grow as a person and as long as you are willing to learn from your
              shortcomings you will never truly fail.
            </p>
          </MoreButton>
        </div>
      </section>
      <div className="spacer" />
      <section id="Projects">
        <div id="ProjectScrollTrigger">
          <h2 className="outlined">
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
          </h2>
          <div className="project">
            <h2>
              Clip Castle{" "}
              <a
                target="_blank"
                href="https://github.com/MaybeFreak/Clip-Castle"
                rel="noreferrer"
              >
                Github Repo
              </a>
            </h2>
            <p>
              Clip Castle is a video sharing platform focused on making it
              easier to share gaming clips within my friend group.
              <br /> We previously used other sites to upload and share our
              clips with one another but limitations like filesize, length and
              resolution made it quite frustrating at times. All of this paired
              with auto deletion making it almost impossible to look back at
              older clips and made me take things into my own hands.
            </p>
          </div>
          <div className="project">
            <h2>
              ASCII React Component{" "}
              <a
                target="_blank"
                href="https://github.com/MaybeFreak/Clip-Castle"
                rel="noreferrer"
              >
                Github Repo
              </a>
            </h2>
            <p>
              Ever wanted to recreate the retro feel of the late 90s and early
              2000s or are you looking for a little something to spice up that
              boring page? <br />
              This 'simple' react component combines the{" "}
              <a
                href="https://www.npmjs.com/package/figlet"
                alt="Link to figlet npm package"
                target="_blank"
                rel="noreferrer"
              >
                figlet package
              </a>{" "}
              together with a text fader script from{" "}
              <a
                href="https://patorjk.com/text-color-fader/"
                alt="Link to patorjk.com"
                target="_blank"
                rel="noreferrer"
              >
                patorjk
              </a>{" "}
              to achieve impressive looking result in a slim and easy to use
              package.
              <br />
            </p>
          </div>
        </div>
      </section>
      <div className="spacer" />
      <section id="Contact">
        <h2 className="outlined" id="ContactScrollTrigger">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </h2>
        <div>
          <h3 id="ContactSub">
            Want to work together, feel free to reach out.
          </h3>
          <div className="contactInfo">
            <a
              className="contactBox"
              target="_blank"
              href="https://github.com/MaybeFreak"
              rel="noreferrer"
            >
              <div>
                <h3>GitHub</h3>
                <p>MaybeFreak</p>
              </div>
            </a>
            <a
              className="contactBox"
              target="_blank"
              href="https://www.linkedin.com/in/michael-pope-dev/"
              rel="noreferrer"
            >
              <div>
                <h3>LinkedIn</h3>
                <p>Michael Pope</p>
              </div>
            </a>
            <a
              className="contactBox"
              target="_blank"
              href="mailto: michaelpope97@gmail.com"
              rel="noreferrer"
            >
              <div>
                <h3>Email</h3>
                <p>michaelpope97@gmail.com</p>
              </div>
            </a>
            <a className="contactBox">
              <div>
                <h3>Phone</h3>
                <p>+49 157 71752969</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="Thanks">
        <h2 className="outlined">
          <span>T</span>
          <span>H</span>
          <span>A</span>
          <span>N</span>
          <span>K</span>
          <span>S</span>
        </h2>
        <p>for taking the time to look at my page.</p>
      </section>
    </>
  );
}

export default App;
