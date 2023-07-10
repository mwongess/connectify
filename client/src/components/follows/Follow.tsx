import FollowBtn from "../buttons/follow/FollowBtn";

const Follow = () => {
  return (
    <>
      <form action="">
        <div className="flex justify-between items-center cursor-pointer p-2">
          <div className="flex items-center gap-2 ">
            <img
              className="rounded-full p-1 h-[3rem]"
              src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c"
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
