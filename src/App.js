import React, { createContext } from "react";
import InputBox from "./components/InputBox";
import useComments from "./hooks/useComments";
import commentsData from "./Constents/commentsData.json";
import "./App.css";

export const CommentActions = createContext();

function App() {
  const { comments, addComment, addReply, deleteComment, editComment } =
    useComments(commentsData);

  return (
    <CommentActions.Provider
      value={{ comments, addComment, addReply, deleteComment, editComment }}
    >
      <div className="App">
        <p className="flex justify-center text-2xl font-bold m-3">
          Nested Comments N level
        </p>
        <InputBox />
      </div>
    </CommentActions.Provider>
  );
}

export default App;
