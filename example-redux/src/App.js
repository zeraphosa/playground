import React from "react";
// import Input from "./components/Input";
// import Todo from "./components/Todo";
import "./style.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function App() {
  return (
    <>
      <div>{/* <Input />
      <Todo /> */}</div>
      <div className="post">
        <div className="header-container">
          <div className="post-input"></div>
          <div className="post-image"></div>
        </div>
        <div className="article">
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
        </div>
        <div className="save"></div>
      </div>
    </>
  );
}
