import { useContext, useState } from "react";
import { CommentActions } from "../App";

const EditComment = ({ setEditState, commentId }) => {
    const [newText, setNewText] = useState("");

    const { editComment } = useContext(CommentActions)

    const handleEditButton = (e) => {
        e.preventDefault();
        setEditState(false);
        editComment(commentId, newText);
    }

    return (
        <div className="mx-2">
      <form className="flex items-center w-[40%]">
        <input
          className="ml-2 px-3 py-1 w-1/2 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Reply..."
        />
        <button
          className="px-4 py-1 rounded-r-lg bg-yellow-400 text-white text-lg font-bold hover:opacity-85"
          onClick={handleEditButton}
        >
          Edit
        </button>
      </form>
    </div>
    )
}

export default EditComment;