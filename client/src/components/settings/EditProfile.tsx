import { getOneUser } from "../../redux/apicalls/otherApiCalls";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const EditProfile = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  const { data} = useQuery({
    queryKey: ["user"],
    queryFn: getOneUser,
  }) as any;

  useEffect(()=>{
    setFullName(data?.user[0].fullName)
    setEmail(data?.user[0].email)
  },[data])

  console.log(data?.user[0].fullName);
  return (
    <div className="flex flex-col gap-5 text-[#4e5d78] bg-white ">
      <h1 className="font-bold text-xl">Edit Profile</h1>
      <div>
        <img
          className="border h-[9rem] w-[9rem] border-blue-200 p-3 rounded-full"
          src={data?.user[0].profileUrl || "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"}
          alt=""
        />
      </div>
      <div>
        <form action="">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Full Name
                </label>
                <input className="border rounded p-2" type="text" value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Birthday
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Email
                </label>
                <input className="border rounded p-2" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Bio
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Phone Number
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Website
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <h1 className="font-bold text-xl">Social Links</h1>
            <div className="flex gap-4">
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Facebook
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Twitter
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Instagram
                </label>
                <input className="border rounded p-2" type="text" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="font-bold" htmlFor="">
                  Linkedin
                </label>
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
