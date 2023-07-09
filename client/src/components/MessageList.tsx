import Message from "./Message";

const MessageList = () => {
  return (
    <div>
      <input className="border w-full rounded p-2 mb-2" type="text" placeholder="Search" />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessageList;
