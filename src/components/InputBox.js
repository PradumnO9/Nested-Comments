import Comment from "./Comment";
import commentsData from "../Constents/commentsData.json";
import { useState } from "react";

const InputBox = () => {
  const [comments, setComments] = useState(commentsData.comments);
  const [newComment, setNewComment] = useState("");

  const handelPostButton = (e) => {
    e.preventDefault();
    setNewComment("");
    if (newComment === "") {
      return;
    } else {
      addComment(newComment);
    }
  };

  const addComment = (text) => {
    const newId = Math.random();
    const newComment = {
      id: newId,
      text: text,
      parentId: null,
      children: [],
    };
    setComments((prevComment) => {
      const updatedComment = { ...prevComment, [newId]: newComment };
      return updatedComment;
    });
  };

  const addReply = (text, parentId) => {
    const newId = Math.random();
    const newComment = {
      id: newId,
      text: text,
      parentId: parentId,
      children: [],
    };
    setComments((prevComment) => {
      const updatedComment = { ...prevComment, [newId]: newComment };
      updatedComment[parentId].children.push(newId);
      return updatedComment;
    });
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
      <Comment
        comment={comments[1]}
        allComments={comments}
        addReply={addReply}
      />
    </div>
  );
};

export default InputBox;
