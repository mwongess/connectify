import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <div className="flex flex-col text-[#4e5d78] gap-2 ">
        <h1 className="font-bold ">INTRO</h1>
        <Link to={""}>mwongess.me</Link>
        <Link to={""}>Male</Link>
        <Link to={""}>Born Jan 11, 2001</Link>
        <Link to={""}>Kirinyaga</Link>
        <Link to={""}>Facebook</Link>
        <Link to={""}>Twitter</Link>
        <Link to={""}>Instagram</Link>
        <p>2508 Followers</p>
        <p>23 Following</p>
    </div>

  )
}

export default Intro