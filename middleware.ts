import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  debug: true,
  publicRoutes: ["/sign-up", "/sign-in"],
  afterAuth(auth, req, evt) {
    console.log("userId:", auth.userId);
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
    // rededirect them to organization selection page
    if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== "/org-selection"
    ) {
      const orgSelection = new URL("/org-selection", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
