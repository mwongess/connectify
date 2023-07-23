import Message from "./Message";

const MessageList = () => {
  return (
    <div>
      <input
        className="border w-full rounded-[10px] p-2 mb-2"
        type="text"
        placeholder="Search"
      />
      <Message userID="2" />
    </div>
  );
};

export default MessageList;
