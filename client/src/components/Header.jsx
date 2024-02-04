import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;
  
  return (
    <div>
      <header className=" flex mx-auto justify-between mb-12 max-w-[1050px]">
        <Link to="/" className="font-bold text-xl">
          Blog
        </Link>
        <nav className="self-end flex gap-3">
          {username && (
            <>
              <Link to="/create">Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}
