import Icon from "@mdi/react";
import { useState } from "react";

const SocialIcon = ({ icon, toolTip, url }) => {
  const [visible, setVisible] = useState(false);
  const makeVisible = (event) => {
    setVisible(true);
  };

  const makeInvisible = () => {
    setVisible(false);
  };

  return (
    <div className="active:scale-105 cursor-pointer">
      <div
        className="group"
        onMouseEnter={makeVisible}
        onMouseLeave={makeInvisible}
      >
        <span className="w-10 h-10 bg-primary group-hover:bg-secondary rounded-full grid place-items-center transition-all">
          <a href={url} target="_blank" className="">
            <Icon
              path={icon}
              size="28px"
              className="group-hover:text-primary transition-all"
            />
          </a>
        </span>
      </div>
      {visible && (
        <span className="relative top-0 left-12 bg-secondary text-primary rounded text-[14px]">
          <span className="absolute bg-secondary p-1 rounded -top-8">
            {" "}
            <span className="absolute after:content-[''] top-1/2 translate-y-[-50%] ml-[-18px] border-[8px] border-l-transparent border-t-transparent border-b-transparent border-r-secondary "></span>
            {toolTip}
          </span>
        </span>
      )}
    </div>
  );
};

export default SocialIcon;
