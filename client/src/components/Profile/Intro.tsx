import { Link } from "react-router-dom";

const Intro = ({ data }: any) => {
  return (
    <div className="flex flex-col text-[#4e5d78] gap-2 ">
      <h1 className="font-bold ">INTRO</h1>
      <Link to={""}>{data?.user[0].website || "Website"}</Link>
      <Link to={""}>{data?.user[0].gender || "Gender"}</Link>
      <Link to={""}>{data?.user[0].birthdate || "Birthdate"}</Link>
      <Link to={""}>{data?.user[0].location || "Kenya"}</Link>
      <Link to={""}>Facebook</Link>
      <Link to={""}>{data?.user[0].twitter || "Twitter"}</Link>
      <Link to={""}>Instagram</Link>
      <p className="font-bold">{data?.user[0].followers || "_Followers"}</p>
      <p className="font-bold">{data?.user[0].following || "_Following"}</p>
    </div>
  );
};

export default Intro;
