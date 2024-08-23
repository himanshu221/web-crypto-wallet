
import Google from "next-auth/providers/google"
import { pages } from "next/dist/build/templates/app-page"

export const authConfig = {
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET! 
  })],
}