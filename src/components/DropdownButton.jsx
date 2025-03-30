import { useState, useEffect } from "react";
import DropdownDialog from "./DropdownDialog";

const DropdownButton = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
    }

    if (!trigger) {
      const delay = setTimeout(() => {
        if (!trigger) {
          setVisible(false);
        }
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [trigger]);

  return (
    <div
      className="flex items-center gap-2 group no-copy relative"
      onMouseOver={() => setTrigger(true)}
      onMouseLeave={() => setTrigger(false)}
    >
      <button className="bg-primary text-secondary py-1 px-4 rounded-3xl cursor-pointer transition-all group-hover:bg-secondary group-hover:text-primary border-[4px] border-button-boundary-color ">
        {text}
      </button>
      <div className="bg-primary text-secondary h-10 w-10 rounded-full cursor-pointer transition-all group-hover:bg-secondary group-hover:text-primary group-active:scale-105 flex items-center justify-center border-[4px] border-button-boundary-color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>
      {visible && (
        <div className="absolute top-16 right-0 cursor-auto">
          <DropdownDialog />
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
