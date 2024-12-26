import { useState } from "react";

const useComments = (commentsData) => {
  const [comments, setComments] = useState(commentsData.comments);
  
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

  return { comments, addComment, addReply };
};

export default useComments;
