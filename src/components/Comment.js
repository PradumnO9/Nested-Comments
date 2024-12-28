import { useContext, useState } from "react";
import ReplyComment from "./ReplyComment";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import EditComment from "./EditComment";
import { CommentActions } from "../App";

const Comment = ({
  comment,
  allComments,
}) => {

  const { addReply, deleteComment, editComment } = useContext(CommentActions)

  const [ShowReplyState, setShowReplyState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);

  const handleReplyButton = () => {
    setShowReplyState(!ShowReplyState);
  };

  const handleEditButton = () => {
    setEditState(!editState);
  };

  const handleArrowToggleButton = () => {
    setArrowToggle(!arrowToggle);
  };

  return (
    <div>
      {comment && (
        <div className="w-1/4 bg-gray-300 rounded-md shadow-lg m-2">
          <p className="px-2 py-1 text-lg">{comment?.text}</p>
          <div className="pb-1">
            <button className="text-sm mx-2" onClick={handleReplyButton}>
              {ShowReplyState ? (
                "Cancel"
              ) : (
                <p>Reply ({comment?.children.length})</p>
              )}
            </button>
            <button
              className="text-sm mx-2 text-yellow-600"
              onClick={handleEditButton}
            >
              {ShowReplyState ? "" : "Edit"}
            </button>
            <button
              className="text-sm mx-2 text-red-600"
              onClick={() => {
                deleteComment(comment.id);
              }}
            >
              {ShowReplyState ? "" : "Delete"}
            </button>
          </div>
          {arrowToggle ? (
            <FaSortDown
              size={18}
              className="cursor-pointer ml-1"
              onClick={handleArrowToggleButton}
            />
          ) : (
            <FaSortUp
              size={18}
              className="cursor-pointer ml-1"
              onClick={handleArrowToggleButton}
            />
          )}
        </div>
      )}
      <div>
        {ShowReplyState && (
          <ReplyComment
            setShowReplyState={setShowReplyState}
            id={comment.id}
            setArrowToggle={setArrowToggle}
          />
        )}
      </div>
      <div>
        {editState && (
          <EditComment
            setEditState={setEditState}
            editComment={editComment}
            commentId={comment.id}
          />
        )}
      </div>
      {arrowToggle && (
        <div className="ml-10">
          {comment?.children?.map((childId) => {
            return (
              <Comment
                key={childId}
                comment={allComments[childId]}
                allComments={allComments}
                addReply={addReply}
                deleteComment={deleteComment}
                editComment={editComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
