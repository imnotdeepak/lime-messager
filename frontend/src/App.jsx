import React from "react";
import { Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { useAuthStore } from "./store/useAuthStore.js";

const App = () => {
  const { authUser, isLoggedIn, login } = useAuthStore();
  console.log(authUser, isLoggedIn);
  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-[#6db0fc] opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-[#8ace00] opacity-20 blur-[100px]" />

      <button onClick={login} className="z-10">
        Login
      </button>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
