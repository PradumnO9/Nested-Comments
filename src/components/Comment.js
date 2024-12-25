import { useState } from "react";
import ReplyComment from "./ReplyComment";
// import { FaSortUp } from "react-icons/fa";
// import { FaSortDown } from "react-icons/fa";

const Comment = ({ comment, allComments, addReply }) => {
  const [ShowReplyState, setShowReplyState] = useState(false);
  console.log(allComments)

  const handleReplyButton = () => {
    setShowReplyState(!ShowReplyState);
  };

  return (
    <div>
      <div className="w-1/4 bg-gray-300 rounded-md shadow-lg m-2">
        <p className="px-2 py-1 text-lg">{comment.text}</p>
        <div className="pb-1">
          <button className="text-sm mx-2" onClick={handleReplyButton}>
            {ShowReplyState ? "Cancel" : "Reply"}
          </button>
          <button className="text-sm mx-2 text-yellow-600">
            {ShowReplyState ? "" : "Edit"}
          </button>
          <button className="text-sm mx-2 text-red-600">
            {ShowReplyState ? "" : "Delete"}
          </button>
        </div>
      </div>
      <div>
        {ShowReplyState && (
          <ReplyComment setShowReplyState={setShowReplyState} id={comment.id} addReply={addReply} />
        )}
      </div>
      <div className="ml-10">
        {comment.children.map((childId) => {
          return (
            <Comment
              key={childId}
              comment={allComments[childId]}
              allComments={allComments}
              addReply={addReply}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
