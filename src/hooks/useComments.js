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

  const deleteComment = (commnetId) => {
    const parentId = comments[commnetId].parentId;
    console.log(parentId);
    setComments((prevComment) => {
      const updatedComments = { ...prevComment };
      // updatedComments[parentId].children.forEach(childId => {
      //   updatedComments[parentId].children.splice(updatedComments[parentId].children[childId], 1)
      // });
      if (updatedComments[commnetId].parentId !== null) {
        updatedComments[parentId].children = updatedComments[
          parentId
        ].children.filter((childId) => {
          return childId !== commnetId;
        });
      }

      const queue = [commnetId];
      while (queue.length > 0) {
        const nodeToDelete = queue.shift();
        queue.push(...updatedComments[nodeToDelete].children);
        delete updatedComments[nodeToDelete];
      }

      return updatedComments;
    });
  };
  console.log(comments);

  return { comments, addComment, addReply, deleteComment };
};

export default useComments;
