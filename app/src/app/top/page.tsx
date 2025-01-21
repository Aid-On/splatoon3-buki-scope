"use client";

import React from "react";
import { Header } from "@/components/Header";
import { FirebaseAuthHandler, FirebaseAuthProvider } from "@/firebase/Auth";
import { getAuth } from "firebase/auth";
import { getFirebaseApp } from "@/firebase/App";

export default function Top() {
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const authProvider = new FirebaseAuthProvider(auth);
  const authHandler = new FirebaseAuthHandler(authProvider);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header authHandler={authHandler} />
      <main className="container mx-auto px-4 py-8">
        {/* Main content will go here */}
      </main>
    </div>
  );
}
