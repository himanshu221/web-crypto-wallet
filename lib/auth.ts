
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET! 
  })],
}