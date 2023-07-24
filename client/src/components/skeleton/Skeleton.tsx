import "./skeleton.css";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="card w-full">
        <div className="relative flex w-full animate-pulse gap-2 ">
          <div className="h-11 w-11 rounded-full bg-[#cccccc]"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="mb-1 h-3 w-[20%] rounded-lg bg-[#cccccc] text-lg"></div>
            <div className="h-3 w-[15%] rounded-lg bg-[#cccccc] text-sm"></div>
            <div className="card__skeleton rounded-lg card__title w-full"></div>
            <div className="card__skeleton rounded-lg card__description w-full"> </div>
          </div>
        </div>
      </div>
      <div className="card w-full">
        <div className="relative flex w-full animate-pulse gap-2 ">
          <div className="h-11 w-11 rounded-full bg-[#cccccc]"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="mb-1 h-3 w-[20%] rounded-lg bg-[#cccccc] text-lg"></div>
            <div className="h-3 w-[15%] rounded-lg bg-[#cccccc] text-sm"></div>
            <div className="card__skeleton rounded-lg card__title w-full"></div>
            <div className="card__skeleton rounded-lg card__description w-full"> </div>
          </div>
        </div>
      </div>
      <div className="card w-full">
        <div className="relative flex w-full animate-pulse gap-2 ">
          <div className="h-11 w-11 rounded-full bg-[#cccccc]"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="mb-1 h-3 w-[20%] rounded-lg bg-[#cccccc] text-lg"></div>
            <div className="h-3 w-[15%] rounded-lg bg-[#cccccc] text-sm"></div>
            <div className="card__skeleton rounded-lg card__title w-full"></div>
            <div className="card__skeleton rounded-lg card__description w-full"> </div>
          </div>
        </div>
      </div>
      {/* <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div> */}
    </div>
  );
};

export default Skeleton;
