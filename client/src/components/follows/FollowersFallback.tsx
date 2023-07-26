import PostList from "../PostList"


const FollowersFallback = () => {
  return (
    <>
    <div className="p-6 border bg-white border-blue-300 rounded-lg mb-4">
        <h1 className="font-bold text-xl">Hello,</h1>
        <p className="text-lg">You don't have friends yet!!</p>
        <p className="text-lg">Check these posts ⬇️</p>
    </div>
    <PostList/>
    </>
  )
}

export default FollowersFallback