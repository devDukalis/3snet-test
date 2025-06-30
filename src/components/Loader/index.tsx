import { type FC } from "react";

const Loader: FC = () => {
  const circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div
          className={`${circleCommonClasses} mr-1 animate-bounce delay-200`}
        ></div>
        <div
          className={`${circleCommonClasses} animate-bounce delay-400`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
