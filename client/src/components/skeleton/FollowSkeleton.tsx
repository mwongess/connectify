
const FollowSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex w-64 animate-pulse gap-2 items-center">
        <div className="h-10 w-10 rounded-full bg-[#cccccc]"></div>
        <div className="flex-1">
          <div className="mb-1 h-3 w-3/5 rounded-lg bg-[#cccccc] text-lg"></div>
          <div className="h-3 w-[90%] rounded-lg bg-[#cccccc] text-sm"></div>
        </div>
      </div>
      <div className="relative flex w-64 animate-pulse gap-2 items-center">
        <div className="h-10 w-10 rounded-full bg-[#cccccc]"></div>
        <div className="flex-1">
          <div className="mb-1 h-3 w-3/5 rounded-lg bg-[#cccccc] text-lg"></div>
          <div className="h-3 w-[90%] rounded-lg bg-[#cccccc] text-sm"></div>
        </div>
      </div>
      <div className="relative flex w-64 animate-pulse gap-2 items-center">
        <div className="h-10 w-10 rounded-full bg-[#cccccc]"></div>
        <div className="flex-1">
          <div className="mb-1 h-3 w-3/5 rounded-lg bg-[#cccccc] text-lg"></div>
          <div className="h-3 w-[90%] rounded-lg bg-[#cccccc] text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default FollowSkeleton;
