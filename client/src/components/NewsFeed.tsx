import Thread from "./Thread";
// import CreatePost from "./post/CreatePost";
// import PostList from "./post/PostList";

const NewsFeed = () => {
  return (
    <div className="col-span-2">
      {/* <PostList/> */}
      {/* <CreatePost/> */}
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
    </div>
  );
};

export default NewsFeed;
