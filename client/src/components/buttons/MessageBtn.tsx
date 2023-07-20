import { Link } from "react-router-dom"

const MessageBtn = () => {
  return (
   <button className="bg-blue-500 text-white p-3 rounded"><Link to="/messages/@mwongess">Message</Link></button>
  )
}

export default MessageBtn