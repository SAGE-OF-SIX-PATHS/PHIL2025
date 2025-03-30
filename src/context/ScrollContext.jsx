import { useReducer, createContext } from "react";

export const Context = createContext(null);
const Reducer = (state, action) => {
  switch (action.type) {
    case "top":
      return { value: "top" };
    case "about":
      return { value: "about" };
    case "contact":
      return { value: "contact" };
    case "project":
      return { value: "project" };
    default:
      return { value: "" };
  }
};

const ScrollContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, { value: "" });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ScrollContext;
