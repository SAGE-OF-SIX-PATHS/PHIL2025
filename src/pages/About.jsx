import myImage from "/images/Philip3.jpg";
import placeholderImage from "/images/myImage-sm.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <>
      <div className="w-screen overflow-hidden flex max-lg:block bg-gradient-to-bl from-[#CBD5E1] to-[#94A3B8]">
        <div className="lg:w-[60%] h-full bg-transparent p-20 relative">
          <h1 className="text-5xl font-semibold">Hello,</h1>
          <p className="mt-4 text-[18px] font-semibold">
            I'm Akpamgbo Philip. I create beautiful, user-friendly
            web experiences through clean code and constant improvements through iterations and I create good backend services as well.
          </p>
          <hr className="w-24 border-t-4 my-4 border-text-orange" />
          <p>
            <span className="font-semibold">I'm an Alumni of Computer Science at Nnamdi Azikiwe University.</span> I have a
            background in crafting web solutions, ranging from sleek, simple
            landing pages to complex progressive and dynamic web applications. My goal is to
            build softwares that not only operates seamlessly but also delivers a
            user experience that’s both intuitive and visually stunning
          </p>
          <br />
          <p>
            <span className="font-semibold">
              I’m passionate about exploring innovative ways to enhance user
              experiences through clean, effective, and scalable code.
            </span>
            To me, I learn by building, and I thrive in environments where knowledge is shared and collaborative
            problem-solving is encouraged. As a young developer, I want to work with industries as projects collaborated with senior developers boosts my confidence and resume.
          </p>
          <br />
          <p>
            <span className="font-semibold">
              When I'm not in front of a computer screen
            </span>
            , you’ll likely find me playing chess, discovering new animes,
            reading manga or educative contents, exploring new technologies and checking out already existing systems of what I have proposed to build.
          </p>
          <span className="font-semibold text-6xl">&lt;/&gt;</span>
        </div>
        <div className="lg:w-[40%] bg-secondary max-lg:bg-transparent  p-8 grid place-items-center">
          <div className="w-[300px] h-full max-h-[500px] bg-primary rounded-full overflow-hidden border-8 border-primary grayscale flex items-center justify-center">
            <LazyLoadImage
              src={myImage}
              alt="My Image"
              height={"100%"}
              width={"auto"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
