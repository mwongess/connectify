import FollowBtn from "../buttons/follow/FollowBtn";

const Follow = () => {
  return (
    <>
      <form action="">
        <div className="flex justify-between items-center cursor-pointer p-2">
          <div className="flex items-center gap-2 ">
            <img
              className="rounded-full p-1 bg-blue-100"
              src="vite.svg"
              alt=""
            />
            <div className="">
              <h1>Name</h1>
              <p>userName</p>
            </div>
          </div>
          <FollowBtn />
        </div>
      </form>

      <hr />
    </>
  );
};

export default Follow;
