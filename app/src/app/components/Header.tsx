"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Title with Splatoon-style font */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-wider transform hover:scale-105 transition-transform duration-200">
              スプラトゥーン３ブキスコープ
            </h1>
          </div>

          {/* Right side: Logout Button with Splatoon-style design */}
          <div className="flex items-center">
            <Link
              href="/login"
              className="
                inline-flex items-center px-4 py-2
                bg-white text-purple-600 font-bold rounded-full
                transform hover:scale-105 transition-all duration-200
                hover:bg-purple-100 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                active:bg-purple-200
              "
            >
              <span className="relative">
                ログアウト
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
