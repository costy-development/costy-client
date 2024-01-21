import { QuillOptions } from "react-quill";

const quillConfig: QuillOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["blockquote"],
      ["link", "image", "video"],
      ["bold", "italic", "underline", "strike"],
      [{ align: ["center", "right", "justify"] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      // [{ color: [] }, { background: [] }],
      // [{ script: ["sub", "super"] }],
      [{ direction: "rtl" }, "clean"],
    ],
    clipboard: {
      matchVisual: true,
    },
  },
  theme: "snow",
  formats: [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "size",
    "align",
  ],
};

export default quillConfig;
