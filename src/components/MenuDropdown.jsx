import { motion } from "framer-motion";
import { useScrollContext } from "../hooks/useScrollContext";

const MenuDropdown = ({ visible, handleClick }) => {
  const { dispatch } = useScrollContext();

  // Framer Motion Variants for Animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
      {visible && (
        <motion.div
          className="p-8 w-[200px] bg-primary-transparent rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul className="space-y-4">
            <li
              className="cursor-pointer active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={() => {
                dispatch({ type: "about" });
                handleClick();
              }}
            >
              About
            </li>
            <li
              className="cursor-pointer active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={() => {
                dispatch({ type: "contact" });
                handleClick();
              }}
            >
              Contact
            </li>
            <li
              className="cursor-pointer active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={() => {
                dispatch({ type: "project" });
                handleClick();
              }}
            >
              Projects
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default MenuDropdown;
