import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <div className="flex flex-col text-[#4e5d78] gap-2 ">
        <h1 className="font-bold ">INTRO</h1>
        <Link>mwongess.me</Link>
        <Link>Male</Link>
        <Link>Born Jan 11, 2001</Link>
        <Link>Kirinyaga</Link>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
        <p>2508 Followers</p>
        <p>23 Following</p>
    </div>

  )
}

export default Intro