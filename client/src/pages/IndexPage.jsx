import React, { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className="flex max-w-[1000px] mx-auto flex-wrap gap-5 justify-evenly">
      {posts.length > 0 && posts.map((post, key) =>
      <Post key={key} {...post}/>
      )}
    </div>
  );
}
