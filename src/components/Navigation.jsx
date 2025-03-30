import { useScrollContext } from "../hooks/useScrollContext";
import Button from "./Button";
import DropdownButton from "./DropdownButton";
const Navigation = () => {
  const { dispatch } = useScrollContext();
  return (
    <div className="flex gap-2">
      <Button text="About" dispatch={dispatch} type="about" />
      <Button text="Contact" dispatch={dispatch} type="contact" />
      <DropdownButton text="More" />
    </div>
  );
};

export default Navigation;
