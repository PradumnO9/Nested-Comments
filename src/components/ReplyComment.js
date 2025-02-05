import { useContext, useState } from "react";
import { CommentActions } from "../App";

const ReplyComment = ({ setShowReplyState, id, setArrowToggle }) => {
  const [reply, setReply] = useState("");

  const { addReply } = useContext(CommentActions);
  
  const handleReplyButton = (e) => {
    e.preventDefault();
    addReply(reply, id);
    setReply("");
    setShowReplyState(false);
    setArrowToggle(true);
  };

  return (
    <div className="mx-2">
      <form className="flex items-center w-[40%]">
        <input
          className="ml-2 px-3 py-1 w-1/2 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Reply..."
        />
        <button
          className="px-4 py-1 rounded-r-lg bg-yellow-400 text-white text-lg font-bold hover:opacity-85"
          onClick={handleReplyButton}
        >
          Reply
        </button>
      </form>
    </div>
  );
};

export default ReplyComment;
