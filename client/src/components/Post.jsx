import React from "react";
import { format } from "date-fns";
import {Link} from "react-router-dom";

export default function Post({ _id,title, summary, cover, content, createdAt, author }) {
  return (
    <Link to={`/post/${_id}`} className="min-w-[400px] max-w-[500px] mb-5 border-[1px] px-5 py-2 rounded-lg border-gray-400 w-2/5">
    <div >
      <img
        src={`http://localhost:4000/`+cover}
        alt="oneplus R series"
      />
      <div>
        <h2>{title}</h2>
        <p className="text-gray-500 text-xs">
          <span className="text-black font-bold">{author.username} </span>
          <time>{format(new Date(createdAt), 'MMM d, yyyy | HH:mm')}</time>
        </p>
        <p className="text-gray-600">{summary}</p>
      </div>
    </div>
    </Link>
  );
}