import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import MenuDropdown from "./MenuDropdown";
import { useState } from "react";

const MenuHamburgar = () => {
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(mdiMenu);
  const handleClick = () => {
    if (visible) {
      setVisible(false);
      setIcon(mdiMenu);
    }
    if (!visible) {
      setVisible(true);

      setIcon(mdiClose);
    }
  };
  return (
    <div className="relative">
      {" "}
      <button onClick={handleClick}>
        <Icon
          path={icon}
          size="24px"
          className="active:scale-105 transition-all"
        />
      </button>
      <div className="absolute right-0 top-[30px] z-20">
        <MenuDropdown visible={visible} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default MenuHamburgar;
