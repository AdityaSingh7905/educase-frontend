"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Simulate successful login
    console.log("Login successful!");
    navigate("/profile"); // Navigate to Profile Page
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-[400px] p-6 bg-gray-50 shadow-md rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-4">
          Sign in to your PopX account
        </h2>
        <p className="text-lg text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-600 font-bold text-white py-3 rounded-md mt-2 hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
