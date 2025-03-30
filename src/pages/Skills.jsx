import Icon from "@mdi/react";
import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiReact,
  mdiNodejs,
  mdiTailwind,
} from "@mdi/js";

import { useState } from "react";

const Skills = () => {
  const [skill, setSkill] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className=" w-screen lg:flex">
      <div
        className="lg:w-[60%] bg-secondary p-20 bg-[url('/images/web-dev-simple-img.jpg')] bg-fixed bg-center bg-no-repeat bg-cover
 w-full h-full"
      >
        <h1 className="text-4xl mb-1 text-primary">What I Do...</h1>
        <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
        <div className="grid max-sm:grid-cols-1 grid-cols-2 grid-rows-2 gap-8 h-fit">
          <div className=" bg-secondary hover:bg-card-bg hover:scale-105 transition-all rounded-lg p-4 min-h-[220px] pb-6">
            <h2 className="text-[18px] font-bold text-primary mb-4">
              WEB DEVELOPMENT
            </h2>
            <p className="text-primary opacity-75">
              Using ReactJS, ExpressJS, NodeJS and MongoDB I have a passion for
              developing pixel-perfect websites and apps while maintaining a
              semantic, modular, and DRY code base.
            </p>
          </div>
          <div className=" bg-secondary hover:bg-card-bg hover:scale-105 transition-all rounded-lg p-4 min-h-[220px] pb-6">
            <h2 className="text-[18px] font-bold text-primary mb-4">
              RESPONSIVE UI DESIGN
            </h2>
            <p className="text-primary opacity-75">
              A user interface should be intuitive — if you need to explain it,
              it's not quite right. I focus on creating responsive and visually
              appealing interfaces for websites and apps.
            </p>
          </div>
          <div className=" bg-secondary hover:bg-card-bg hover:scale-105 transition-all rounded-lg p-4 min-h-[220px]  pb-6">
            <h2 className="text-[18px] font-bold text-primary mb-4">
              CROSS-BROWSER COMPARTIBILTY
            </h2>
            <p className="text-primary opacity-75">
              Testing and adjusting websites to ensure they function correctly
              across different web browsers, maintaining a consistent user
              experience.
            </p>
          </div>
          <div className=" bg-secondary hover:bg-card-bg hover:scale-105 transition-all rounded-lg p-4 min-h-[220px]  pb-6">
            <h2 className="text-[18px] font-bold text-primary mb-4">
              DEBUG AND TROUBLESHOOT ISSUES
            </h2>
            <p className="text-primary opacity-75">
              Identifying and fixing bugs or issues that arise on the website,
              ensuring that all features and functionalities work as intended.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] bg-gradient-to-bl from-[#CBD5E1] to-[#94A3B8] p-20 relative">
        <h1 className="text-4xl mb-1">Skills</h1>
        <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
        <div className="lg:pl-4 mb-2">
          <h2 className="text-2xl mb-1">Development</h2>
          <div className="grid max-sm:grid-cols-2 grid-cols-4 gap-2 my-2 w-fit">
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("HTML5");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <Icon
                path={mdiLanguageHtml5}
                size="48px"
                className="group-hover:text-primary transition-all"
              />
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("CSS3");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <Icon
                path={mdiLanguageCss3}
                size="48px"
                className="group-hover:text-primary transition-all"
              />
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("Javascript");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <Icon
                path={mdiLanguageJavascript}
                size="48px"
                className="group-hover:text-primary transition-all"
              />
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("ReactJS");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <Icon
                path={mdiReact}
                size="48px"
                className="group-hover:text-primary transition-all"
              />
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("NodeJS");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <Icon
                path={mdiNodejs}
                size="48px"
                className="group-hover:text-primary transition-all"
              />
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("ExpressJS");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <svg
                fill="currentColor"
                width="52px"
                height="52px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
              </svg>
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("MongoDB");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <svg
                fill="currentColor"
                width="78px"
                height="78px"
                viewBox="-6.4 -6.4 44.80 44.80"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)"
                stroke="#000000"
                strokeWidth="0.00032"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.064"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>mongodb</title>{" "}
                  <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>{" "}
                </g>
              </svg>
            </span>
            <span
              className="w-20 h-20 bg-primary rounded-full grid place-items-center border-2 border-secondary hover:bg-secondary hover:text-primary"
              onMouseOver={() => {
                setSkill("TailwindCSS");
                setVisible(true);
              }}
              onMouseLeave={() => {
                setSkill("");
                setVisible(false);
              }}
            >
              <Icon
                path={mdiTailwind}
                size="48px"
                className="group-hover:text-primary transition-all"
              />
            </span>
          </div>
        </div>
        <div className="lg:pl-4 mb-2">
          <h2 className="text-2xl mb-1">Tools</h2>
          <div className=" flex flex-wrap gap-1">
            <span className="bg-secondary text-primary py-2 px-3 rounded-lg">
              ✔ Git + Github
            </span>
            {/* <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ Webpack
            </span> */}
            {/* <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ Figma
            </span> */}
            <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ VS Code
            </span>
            <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ ChatGPT
            </span>
            {/* <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ Firebase
            </span> */}
            <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ Vercel
            </span>
            <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ Framer Motion
            </span>
            <span className="bg-secondary text-primary py-2 px-3 rounded-lg ">
              ✔ Canva
            </span>
          </div>
        </div>
        {visible && (
          <span className="absolute top-8 right-8 py-2 px-4 border border-secondary ">
            {skill}
          </span>
        )}
      </div>
    </div>
  );
};

export default Skills;
