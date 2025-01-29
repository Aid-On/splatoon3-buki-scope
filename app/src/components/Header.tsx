"use client";

import React from "react";
import { FirebaseAuthHandler } from "../firebase/Auth";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

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
    <header className="bg-gradient-to-r from-purple-400 via-blue-600 to-[#ffff66] relative overflow-hidden">
      {/* インクスプラッシュ効果 */}
      <div className="absolute inset-0">
        {/* 紫のインクスプラッシュ */}
        <div className="absolute -top-10 right-1/4 w-40 h-32 bg-purple-400/70 rounded-[70%_30%_60%_35%] blur-sm transform rotate-[25deg] skew-x-12"></div>
        <div className="absolute -bottom-8 left-1/3 w-44 h-36 bg-purple-500/60 rounded-[35%_65%_30%_70%] blur-sm rotate-[-35deg] skew-y-6"></div>
        <div className="absolute top-1/4 -left-4 w-32 h-24 bg-purple-400/55 rounded-[65%_35%_70%_30%] blur-[3px] rotate-[45deg] skew-x-6"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-16 bg-purple-400/65 rounded-[60%_40%_35%_65%] blur-[2px] rotate-[-15deg]"></div>

        {/* 黄色のインクスプラッシュ */}
        <div className="absolute -top-6 right-1/3 w-36 h-28 bg-[#ffff66]/60 rounded-[30%_70%_35%_65%] blur-sm rotate-[-40deg] skew-y-12"></div>
        <div className="absolute -bottom-4 right-1/4 w-48 h-32 bg-[#ffff66]/65 rounded-[65%_35%_70%_30%] blur-sm rotate-[35deg] skew-x-6"></div>
        <div className="absolute top-1/3 -right-8 w-28 h-24 bg-[#ffff66]/55 rounded-[35%_65%_30%_70%] blur-[3px] rotate-[-25deg] skew-y-6"></div>
        <div className="absolute bottom-1/2 right-1/3 w-16 h-20 bg-[#ffff66]/70 rounded-[70%_30%_65%_35%] blur-[2px] rotate-[15deg]"></div>

        {/* 小さな飛沫 */}
        <div className="absolute top-1/4 right-1/2 w-6 h-6 bg-purple-400/75 rounded-[60%_40%_55%_45%] blur-[1px] rotate-[45deg]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-[#ffff66]/75 rounded-[45%_55%_40%_60%] blur-[1px] rotate-[-30deg]"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-purple-400/70 rounded-[55%_45%_60%_40%] blur-[1px] rotate-[20deg]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#ffff66]/70 rounded-[40%_60%_45%_55%] blur-[1px] rotate-[-25deg]"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
        <div className="relative flex items-center">
          {/* 黒い不規則な背景 */}
          <div className="absolute -inset-1 z-0">
            <svg viewBox="0 0 300 60" className="w-full h-full">
              <path
                d="M10,15 
           Q15,5 25,8 Q35,12 45,6 Q55,2 65,8
           Q75,14 85,7 Q95,3 105,10 Q115,15 125,8
           Q135,4 145,9 Q155,14 165,7 Q175,3 185,9
           Q195,15 205,7 Q215,2 225,8 Q235,13 245,6
           Q255,2 265,9 Q275,14 285,8
           L295,30
           Q285,52 275,48 Q265,44 255,50 Q245,54 235,48
           Q225,43 215,51 Q205,55 195,49 Q185,44 175,51
           Q165,55 155,48 Q145,43 135,50 Q125,54 115,47
           Q105,43 95,50 Q85,54 75,47 Q65,43 55,51
           Q45,55 35,48 Q25,43 15,50
           L5,30 Z"
                fill="black"
                fillOpacity="0.85"
              />
            </svg>
          </div>

          {/* タイトルテキスト */}
          <h1 className="text-xl font-bold font-sans text-white relative z-10 px-4 py-1">
            SP<span className="text-[#ffff66]">3</span> Buki Scope
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full 
                     hover:from-red-500 hover:to-yellow-600 shadow-lg hover:shadow-xl
                     text-white transition-all duration-300 transform hover:scale-105"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </header>
  );
};
