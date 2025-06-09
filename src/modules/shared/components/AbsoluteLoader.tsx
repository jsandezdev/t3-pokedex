import { Loader } from "./Loader";

export const AbsoluteLoader = () => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex h-full w-full items-center justify-center">
      <Loader />
    </div>
  );
};
