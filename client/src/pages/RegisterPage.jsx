import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {alert('Registration Successful');}
    else (alert('Registraion Failed'))
  }

  return (
    <section>
      <form
        onSubmit={register}
        className="max-w-[400px] my-40 mx-auto"
        action=""
      >
        <div className="flex justify-center py-5">
          <p className="w-fit text-3xl font-semibold">Register</p>
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
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
