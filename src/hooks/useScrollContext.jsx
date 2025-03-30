import { Context } from "../context/ScrollContext";
import { useContext } from "react";

export const useScrollContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAppContext can only be used inside AppContext");
  }
  return context;
};
