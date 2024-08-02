import { useAuth } from "@/lib/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase-admin/auth";

import { initializeApp, applicationDefault } from "firebase-admin/app";

initializeApp({
  credential: applicationDefault(),
});

export function middleware(request: NextRequest) {
  console.log("middleware");
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  console.log("seesion");

  try {
    await getAuth().verifyIdToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|login|.*\\.png$).*)"],
};
