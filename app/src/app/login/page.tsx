"use client";

import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { FirebaseAuthHandler, FirebaseAuthProvider } from "@/firebase/Auth";
import { getFirebaseApp } from "@/firebase/App";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#2F338AAA] rounded-lg shadow-lg py-6 px-12">
      <h1 className="text-4xl font-bold text-white text-center">SP3 Buki Scope</h1>
    </div>
  );
};

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [authHandler, setAuthHandler] = useState<FirebaseAuthHandler | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  useEffect(() => {
    const app = getFirebaseApp();
    const auth = getAuth(app);
    const authProvider = new FirebaseAuthProvider(auth);
    const handler = new FirebaseAuthHandler(authProvider);
    setAuthHandler(handler);
  }, []);

  const handleSignIn = async () => {
    setError("");
    try {
      await authHandler?.signIn(email, password);
      router.push("/top");
    } catch (error) {
      setError("IDまたはパスワードが正しくありません");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-between h-screen px-4"
      style={{
        backgroundImage: "url('/images/splatoon_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center w-full mt-24">
        <div className="flex flex-col items-center mb-20">
          <Logo />
        </div>
        <div className="w-full max-w-[435px]">
          {/* Email Input */}
          <div className="flex flex-col items-start w-full mb-4">
            <label htmlFor="email" className="text-white text-lg font-semibold">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              placeholder="IDを入力してください"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 border-2 border-[#8A2F60] rounded-lg h-12 md:h-14 text-lg px-4 placeholder-gray-500 font-light"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="password" className="text-white text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="パスワードを入力してください"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 border-2 border-[#8A2F60] rounded-lg h-12 md:h-14 text-lg px-4 placeholder-gray-500 font-light"
            />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-[#8A2F60] text-lg font-light mt-4">{error}</p>}

      {/* Sign In Button */}
      <div className="w-full pb-20">
        <button
          onClick={handleSignIn}
          disabled={!isFormValid}
          className={`text-lg font-semibold rounded-full w-2/5 md:w-48 h-12 md:h-12 transition-all duration-300 mx-auto block ${
            isFormValid
              ? "bg-[#FF66A1] text-white shadow-[0_0_10px_4px_rgba(255,102,161,0.6),_0_0_20px_8px_rgba(255,133,177,0.4)] hover:bg-[#FF85B1] hover:shadow-[0_0_15px_6px_rgba(255,133,177,0.8),_0_0_30px_12px_rgba(255,102,161,0.6)] hover:text-[#FBEFF3]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
          }`}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
