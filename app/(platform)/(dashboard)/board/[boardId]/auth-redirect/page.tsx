"use client"
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";  // App Routerでは 'next/navigation' を使用

export default async function AuthRedirect() {
  const { userId, isLoaded } = useAuth();
  
  if(userId) {
    const boardId = userId;
    redirect(`board/${boardId}`)
  }
  
  redirect('/signin')
}