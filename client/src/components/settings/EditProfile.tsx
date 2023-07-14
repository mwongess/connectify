const EditProfile = () => {
  return (
    <div className="flex flex-col gap-5 text-[#4e5d78] bg-white ">
      <h1 className="font-bold text-xl">Edit Profile</h1>
      <div>
        <img
          className="border h-[9rem] border-blue-200 p-3 rounded-full"
          src="/vite.svg"
          alt=""
        />
      </div>
      <div>
        <form action="">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Full Name</label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Birthday</label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Email</label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Bio</label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Phone Number</label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Website</label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <h1 className="font-bold text-xl">Social Links</h1>
            <div className="flex gap-4">
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Facebook</label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Twitter</label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">Instagram</label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label  className="font-bold" htmlFor="">Linkedin</label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div></div>
            <div>
              <button className="mr-4">Cancel</button>
              <button className="bg-blue-500 rounded text-white py-2 px-10">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
