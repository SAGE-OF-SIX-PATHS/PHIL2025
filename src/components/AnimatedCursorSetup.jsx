import AnimatedCursor from "react-animated-cursor";
const AnimatedCursorSetup = () => {
  return (
    <AnimatedCursor
      color="255,255,255"
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={1}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: "exclusion",
        backgroundColor: "var(--cursor-color)",
      }}
      innerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
  );
};

export default AnimatedCursorSetup;
