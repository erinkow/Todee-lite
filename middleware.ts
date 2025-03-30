import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

const isProtectdRoute = createRouteMatcher(['/auth-redirect','/board/(.*)'])

export default clerkMiddleware((auth, req: NextRequest) => {
  const {userId, redirectToSignIn} = auth();

  if(!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url})
  }

  if(userId && isPublicRoute(req)) {
    const userBoardPage = `board/${userId}`
    return NextResponse.redirect(new URL(userBoardPage, req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};