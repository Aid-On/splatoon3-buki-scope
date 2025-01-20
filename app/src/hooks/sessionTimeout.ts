/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTimer } from "@/hooks/timer";

export enum SessionState {
  NoExpiration = 0,
  Expired = 1,
  WithinExpiration = 2,
}

export const getSessionState = (sessionTimeout?: number): SessionState => {
  const lastUsedAt = readLastUsedAt();
  if (!lastUsedAt) {
    return SessionState.NoExpiration;
  }

  const lastUsedDate = new Date(lastUsedAt);
  const currentDate = new Date();
  const diffOfMinutes = (currentDate.getTime() - lastUsedDate.getTime()) / 1000 / 60; // in minutes

  return diffOfMinutes > (sessionTimeout ?? Number(process.env.NEXT_PUBLIC_SESSION_TIMEOUT_MINUTES))
    ? SessionState.Expired
    : SessionState.WithinExpiration;
};

export const readLastUsedAt = () => {
  return localStorage.getItem("lastUsedAt");
};

export const writeLastUsedAt = (time?: string) => {
  if (!time) {
    localStorage.removeItem("lastUsedAt");
  } else {
    localStorage.setItem("lastUsedAt", time);
  }
};

export const useSessionTimeout = () => {
  const sessionTimeout = Number(process.env.NEXT_PUBLIC_SESSION_TIMEOUT_MINUTES);
  const router = useRouter();

  const checkSessionTimeout = useCallback(() => {
    const currentTime = new Date().toISOString();
    const sessionState = getSessionState(sessionTimeout);

    if (sessionState === SessionState.NoExpiration) {
      console.log("lastUsedAtがundefinedだったため、新しい日時を書き込みました:", currentTime);
      writeLastUsedAt(currentTime);
    } else if (sessionState === SessionState.Expired) {
      // writeLastUsedAt(undefined);
      router.push("/login");
    }
  }, [sessionTimeout, router]);

  useTimer(checkSessionTimeout, 60 * 1000);

  return checkSessionTimeout;
};
