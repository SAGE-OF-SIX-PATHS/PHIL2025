import Header from "../components/Header";
import IntroContainer from "../components/IntroContainer";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import ScrolldownMssg from "../components/ScrolldownMssg";
import { mdiGithub, mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import Bubble from "../components/Bubbles";
import { useScrollContext } from "../hooks/useScrollContext";

const Home = () => {
  const { dispatch } = useScrollContext();
  return (
    <>
      <div className="w-screen h-svh overflow-x-hidden relative bg-transparent">
        <Header />
        <div className="absolute bottom-8 right-1/2 translate-x-1/2 lg:left-20 lg:bottom-1/2 lg:translate-y-1/2 lg:translate-x-0 flex lg:flex-col gap-3 z-50">
          <SocialIcon
            icon={mdiGithub}
            toolTip="github"
            url="https://github.com/SAGE-OF-SIX-PATHS"
          />
          <SocialIcon
            icon={mdiFacebook}
            toolTip="facebook"
            url="https://web.facebook.com/Sage.of.6.pat"
          />
          <SocialIcon
            icon={mdiTwitter}
            toolTip="twitter"
            url="https://x.com/PhilipAkpamgbo"
          />
          <SocialIcon
            icon={mdiInstagram}
            toolTip="instagram"
            url="https://www.instagram.com/proficient_philip/"
          />
        </div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          {" "}
          <IntroContainer />
          <div className="m-auto w-fit mt-4 ">
            <Button dispatch={dispatch} type="project" text="My Projects" />
          </div>
        </div>
        <div className="absolute right-8 bottom-[120px] translate-x-1/2 max-lg:hidden">
          <ScrolldownMssg />
        </div>
      </div>
      <Bubble />
    </>
  );
};

export default Home;
