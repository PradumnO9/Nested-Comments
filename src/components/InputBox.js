import Comment from "./Comment";
import { useState } from "react";
import useComments from "../hooks/useComments";
import commentsData from "../Constents/commentsData.json";

const InputBox = () => {
  const [newComment, setNewComment] = useState("");

  const { comments, addComment, addReply } = useComments(commentsData);

  const handelPostButton = (e) => {
    e.preventDefault();
    setNewComment("");
    if (newComment === "") {
      return;
    } else {
      addComment(newComment);
    }
  };

  return (
    <div>
      <form className="flex items-center w-[40%]">
        <input
          className="ml-2 px-3 py-2 w-1/2 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          value={newComment}
          placeholder="type..."
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="px-4 py-2 rounded-r-lg bg-blue-500 text-white text-xl font-bold hover:opacity-85"
          onClick={handelPostButton}
        >
          Post
        </button>
      </form>

      {Object.keys(comments).map((d, i) => {
        return comments[d]?.parentId === null ? (
          <Comment
            key={i}
            comment={comments[d]}
            allComments={comments}
            addReply={addReply}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default InputBox;
