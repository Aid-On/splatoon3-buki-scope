"use client";

import React from "react";
import { FirebaseAuthHandler } from "@/firebase/Auth";
import { useRouter } from "next/navigation";

interface HeaderProps {
  authHandler: FirebaseAuthHandler;
}

export const Header = ({ authHandler }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authHandler.signOut();
      router.push("/login");
    } catch (error) {
      console.error("ログアウトに失敗しました:", error);
    }
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">SP3 Buki Scope</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          ログアウト
        </button>
      </div>
    </header>
  );
};
