import { Outlet } from "react-router-dom"
import MessageList from "../components/MessageList"

const MessagesLayout = () => {
  return (
    <div className="flex border border-blue-200 rounded p-2 min-h-[90vh]">
        <div className="w-[35%]">
            <MessageList/>
        </div>
        <div className="w-[65%] ">
            <Outlet/>
        </div>
    </div>
  )
}

export default MessagesLayout