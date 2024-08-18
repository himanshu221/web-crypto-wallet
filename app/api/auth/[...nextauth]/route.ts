import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import NextAuth from "next-auth/next";

const authHandler = NextAuth(NEXT_AUTH_CONFIG)

export {
    authHandler as GET,
    authHandler as POST
}