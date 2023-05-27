import { useLayoutEffect } from "react";
import "./App.css";
import ThreeJSArea from "./ThreeJSArea";
import { gsap } from "gsap";
import Header from "./Header";

function App() {
  const tl = new gsap.timeline();

  useLayoutEffect(() => {
    playAnimation();
  }, []);

  const playAnimation = () => {
    tl.to("#test", { opacity: 1, duration: 3, ease: "slow" }, 1);
    tl.fromTo(
      "header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.inOut" },
      2.5
    );
  };

  return (
    <>
      <Header />
      <ThreeJSArea id={"test"} />
      <div className="scroll-area" id="About">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          similique, voluptatem ut soluta quidem cumque omnis et amet odit
          suscipit alias at architecto iusto voluptates eaque quia praesentium
          sint quaerat.
        </p>
      </div>
    </>
  );
}

export default App;
