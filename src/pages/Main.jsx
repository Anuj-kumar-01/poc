import { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CkEditor from "./CkEditor";

function Main() {
  const [page, setPage] = useState(1);

  const [editorContent, setEditorContent] = useState(`<div>
  <p>name: john doe,</p>
  <p>age: 25,</p>
     <p>job-title: software engineer,</p>
     <p>suffix: Jr,</p>
     <p>other-field: some text,</p>
     <p>another-field: more text,</p>
     <p>suffix: John Doe, Jr</p>
     <p>extra-field: surgeries text</p>
     <p>2023-12-22</p>
   </div>`);

  let content;

  switch (page) {
    case 1:
      content = (
        <Home
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
      );
      break;
    case 2:
      content = (
        <CkEditor
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
      );
      break;
    default:
      content = (
        <Home
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
      );
  }

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {content}
    </>
  );
}

export default Main;
