import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],

    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "indent",
  "size",
  "header",
  "link",
  "image",
  "video",
  "color",
  "background",
  "clean",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
    // console.log(await response.json());
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <section>
      <form onSubmit={createNewPost} className="my-20 mx-auto">
        <input
          className="block mb-2 w-full p-2 rounded border-[1px] border-gray-500"
          type="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="block mb-2 w-full p-2 rounded border-[1px] border-gray-500"
          type="summary"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          className="block mb-2 w-full p-2 rounded border-[1px] border-gray-500"
          type="file"
          onChange={(e) => setFiles(e.target.files)}
        />
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(e) => setContent(e)}
        />
        <div className="flex justify-center">
          <button className="w-full mt-10 px-4 py-1 border-[1px] border-gray-400 rounded-md bg-blue-600 text-white">
            Create Post
          </button>
        </div>{" "}
      </form>
    </section>
  );
}
