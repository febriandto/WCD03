import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Cek jika sudah login, langsung redirect ke /
  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (username === "admin" && password === "123") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <>
      <Header />
      <section className="content">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form className="w-full max-w-sm" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
