"use client"
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";  // App Routerでは 'next/navigation' を使用

export default function AuthRedirect() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        router.push(`/board/${userId}`);
      } else {
        router.push('/signin');
      }
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return null;
}