import { SignIn, useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const {userId} = auth();
  return <SignIn />;
  // 
}