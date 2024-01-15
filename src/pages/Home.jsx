// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

Home.propTypes = {
  editorContent: PropTypes.string.isRequired,
  setEditorContent: PropTypes.func.isRequired,
};
Home.defaultProps = {
  editorContent: "",
  setEditorContent: "",
};

function Home({ editorContent, setEditorContent }) {
  return (
    <>
      <div className="w-11/12 mx-auto my-12">
        <Editor
          apiKey={"z7cng1kssrbh5o8os51k65i6zhr5gjn8oa5wvnu8ns8pl1mt"}
          init={{
            plugins: "",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant"),
              ),
          }}
          value={editorContent}
          onEditorChange={(newValue) => setEditorContent(newValue)}
        />
      </div>
    </>
  );
}

export default Home;
