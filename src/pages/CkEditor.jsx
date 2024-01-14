// import React, { useRef, useState } from "react";
// import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

CkEditor.propTypes = {
  editorContent: PropTypes.string.isRequired,
  setEditorContent: PropTypes.func.isRequired,
};

function CkEditor({ editorContent, setEditorContent }) {
  //   const [editorContent, setEditorContent] = useState(`<div>
  //   <p>name: john doe,</p>
  //   <p>age: 25,</p>
  //   <p>job-title: software engineer,</p>
  //   <p>suffix: Jr,</p>
  //   <p>other-field: some text,</p>
  //   <p>another-field: more text,</p>
  //   <p>suffix: John Doe, Jr</p>
  //   <p>extra-field: additional text</p>
  // </div>`);

  // const handleEditorChange = (content, editor) => {
  //   setEditorContent(content);
  // };

  const handleButtonClick = () => {
    console.log("HTML Content:", editorContent);
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorContent, "text/html");
    const plainTextContent = doc.body.textContent || "";
    console.log("Plain Text Content:", plainTextContent);
  };

  function manipulateHtmlContent() {
    let htmlContent = editorContent;

    // Remove &nbsp;
    htmlContent = htmlContent.replace(/&nbsp;+/g, "");

    // Change First Letter Capitalization After colon(:)
    htmlContent = htmlContent.replace(
      /:\s*([a-z])/g,
      (match, group) => `: ${group.toUpperCase()}`,
    );

    htmlContent = htmlContent.replace(
      /:([a-z])/g,
      (match, group) => `:${group.toUpperCase()}`,
    );

    // Change First Letter Capitalization After hypen(-)
    htmlContent = htmlContent.replace(
      /-([a-z])/g,
      (match, group) => `-${group.toUpperCase()}`,
    );

    htmlContent = htmlContent.replace(
      /-\s*([a-z])/g,
      (match, group) => `- ${group.toUpperCase()}`,
    );

    // No comma before suffix (Jr and Sr)
    htmlContent = htmlContent.replace(
      /,\s*(Jr|Sr)/g,
      (match, group) => ` ${group}`,
    );

    htmlContent = htmlContent.replace(
      /,(Jr|Sr)/g,
      (match, group) => `${group}`,
    );

    // Change "surgeries" to "surgical procedures"
    htmlContent = htmlContent.replace(/surgeries/g, "surgical procedures");

    // Change the date format

    // "YYYY-MM-DD", "Month DD, YYYY", "MM/DD/YYYY", and "MM-DD-YY" or "MM-DD-YYYY".

    htmlContent = htmlContent.replace(
      /(\b\d{4}-\d{2}-\d{2}\b|\b\w+\s\d{1,2},\s\d{4}\b|\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{1,2}-\d{1,2}-\d{2,4}\b)/g,
      (match) => {
        let date = new Date(match);

        // Check if the date is valid
        if (isNaN(date)) {
          return match; // If invalid, return the original match
        }

        return date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      },
    );

    // Remove the zero before decimal in P, α and β values, eg. P<.001

    // htmlContent = htmlContent.replace(/<0+(\.\d+)?/g, '<.');

    //#region Numbers: a. Use numerals for one to nine
    htmlContent = htmlContent.replace(
      /\b(?:1st|2nd|3rd|[4-9]th)\b/g,
      (match) => {
        // customize the replacement logic here if needed
        return match.toUpperCase(); // an example
      },
    );
    //#endregion

    //#region NUmbers: b. Spell our ordinals from first to ninth
    htmlContent = htmlContent.replace(
      /(?:first|second|third|fourth|fifth|sixth|seventh|eighth|ninth)/g,
      (match) => {
        // You can customize the replacement logic here if needed
        return match.toUpperCase(); // Convert to uppercase as an example
      },
    );

    //#endregion

    //#region Numbers:- c. Separate digits with a thin space, not a comma, to indicate place values beyond thousands.

    // htmlContent = htmlContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1\u2009");
    //#endregion

    //#region Corresponding address:- Delete the word “e-mail:”
    htmlContent = htmlContent.replace(/e-mail:/g, "");
    //#endregion

    //#region Text: 4. Use thin space for thousands separator
    htmlContent = htmlContent.replace(
      /(\d{4}-\d{2}-\d{2})|(\b\d{4}\b)|(\b\d{1,3}(?=(?:\d{3})+\b))/g,
      (match, date, year, number) => {
        if (date) {
          return date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$1\u2009-$2-$3");
        } else if (year) {
          return year;
        } else {
          return number.replace(/\d(?=(?:\d{3})+\b)/g, "$&\u2009");
        }
      },
    );
    // htmlContent = htmlContent.replace(/(\d{4}-\d{2}-\d{2})|(\b\d{4}\b)|(\b\d{1,3}(?=(?:\d{3})+\b))|(\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?) \d{1,2},? \d{4}\b)|(\d{1,2}\/\d{1,2}\/\d{4})/g, (match, date, year, number, longDate, shortDate) => {
    //   if (date) {
    //     return date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1\u2009-$2-$3');
    //   } else if (year) {
    //     return year;
    //   } else if (longDate) {
    //     return longDate.replace(/(\d{4})/, '$1\u2009');
    //   } else if (shortDate) {
    //     return shortDate.replace(/\//g, '\u2009');
    //   } else {
    //     return number.replace(/\d(?=(?:\d{3})+\b)/g, '$&\u2009');
    //   }
    // })
    //#endregion
    setEditorContent(htmlContent);
  }

  return (
    <>
      <div className="w-11/12 mx-auto my-12">
        <Editor
          apiKey={import.meta.env.VITE_TEXT_EDITOR_API_KEY || "catunu06v0inzzek0lq1t4o6bygknyh4vztc1vpi58lh6f7d"}
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
            // menubar: false,
            // toolbar:"bold italic | checklist numlist bullist indent outdent | link",
            // height: 1000,
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant"),
              ),
          }}
          value={editorContent}
          onEditorChange={(content) => {
            setEditorContent(content);
          }}
        />
        <button
          className="font-semibold mt-6 text-white rounded px-6 py-2 bg-[#005A84]"
          onClick={handleButtonClick}
        >
          Submit
        </button>
        <button
          className="font-semibold mt-6 text-white rounded px-6 py-2 ml-2 bg-[#005A84]"
          onClick={manipulateHtmlContent}
        >
          Manipulate HTML Content
        </button>
      </div>
    </>
  );
}

export default CkEditor;
