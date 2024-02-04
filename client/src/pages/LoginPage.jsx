import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rediret, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      //to save cookie in react app
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  }

  if (rediret) {
    return <Navigate to={"/"} />;
  }
  return (
    <section>
      <form onSubmit={login} className="max-w-[400px] my-40 mx-auto" action="">
        <div className="flex justify-center py-5">
          <p className="w-fit text-3xl font-semibold">Login</p>
        </div>

        <input
          className="block mb-2 w-full p-2 rounded border-[1px] border-gray-500"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="block mb-2 w-full p-2 rounded border-[1px] border-gray-500"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-center">
          <button className="w-3/4 px-4 py-1 border-[1px] border-gray-400 rounded-md bg-blue-600 text-white">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
