import { useScrollContext } from "../hooks/useScrollContext";

const ScrolldownMssg = () => {
  const { dispatch } = useScrollContext();
  return (
    <>
      <button
        onClick={() => dispatch({ type: "about" })}
        className="w-[200px] text-center border-b-[2px] rounded-md border-secondary leading-[0rem] -rotate-90 opacity-75 no-copy"
      >
        <span className="px-4 bg-[#fafafa]  text-secondary font-semibold italic">
          Scrolldown
        </span>
      </button>
    </>
  );
};

export default ScrolldownMssg;
