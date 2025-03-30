import brush from "../assets/vectors/brush.svg";

const IntroContainer = () => {
  return (
    <div className="text-center no-copy">
      <div className="max-sm:text-4xl lg:text-5xl font-semibold mb-2 relative">
        <span className="text-text-orange z-50">Akpamgbo</span>
        <img
          src={brush}
          alt=""
          className="absolute h-[120px] w-[300px] right-8 -top-6 -z-10 opacity-40 max-lg:hidden"
        ></img>
      </div>
      <div className=" text-[18px] lg:text-2xl max-w-[480px] m-auto">
        Full-Stack Web Developer
      </div>
    </div>
  );
};

export default IntroContainer;
