import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <section>
      <div className="mt-10">
        <div className="flex flex-col items-center pb-3">
          <p className="text-4xl mx-auto font-bold">{postInfo.title}</p>
          <time className="text-sm">
            {format(new Date(postInfo.createdAt), "MMM d, yyyy | HH:mm")}
          </time>
          <p>Author: {postInfo.author.username}</p>
          {userInfo.id === postInfo.author._id && (
            <div className="flex justify-end w-4/5">
              <Link
                className=" bg-blue-400 rounded px-4 text-white py-1"
                to={`/edit/${postInfo._id}`}
              >
                Edit this post
              </Link>
            </div>
          )}
        </div>

        <div className="h-full">
          <img
            className="w-4/5 cover mx-auto"
            src={`http://localhost:4000/${postInfo.cover}`}
            alt="cover"
          />
        </div>

        <div
          className="pt-5 text-[1.1rem]"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </div>
    </section>
  );
}
