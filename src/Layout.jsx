import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
Footer;
import { useScrollContext } from "./hooks/useScrollContext";

const Layout = () => {
  const top = useRef();
  const about = useRef();
  const contact = useRef();
  const project = useRef();
  const { state } = useScrollContext();
  useEffect(() => {
    if (state.value === "top") {
      top.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (state.value === "about") {
      about.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (state.value === "contact") {
      contact.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (state.value === "project") {
      project.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [state]);
  return (
    <div className="overflow-x-hidden selection:bg-text-orange">
      <div className="" ref={top}>
        <Home />
      </div>
      <div className="" ref={about}>
        <About />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="" ref={project}>
        <Project />
      </div>
      <div className="" ref={contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
