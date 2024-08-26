
import { NextAuthOptions } from 'next-auth';
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.AUTH_GOOGLE_ID!,
          clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
      ],
      secret: process.env.AUTH_SECRET,
      session: {
        strategy: "jwt",
      },
      callbacks: {
        async jwt({ token, user, session, trigger}) {

          if(trigger === "update" ){
            token.onboarded = session.onboarded
            return token;
          }
          if (user) {
            const existingUser = await fetchUserFromDatabase(user.email!);
   
            if (!existingUser) {
              token.onboarded = false;
            } else {
              token.onboarded = existingUser.onboarded!;
              token.email = existingUser.email;
            }
          }
          return token;
        },
        async session({ session, token }) {
          if (session.user) {
            session.user.onboarded = token.onboarded as boolean;
            session.user.email = token.email as string;
          }
          return session;
        },
        async signIn({ user }) {
          const existingUser = await fetchUserFromDatabase(user.email!);
          if (!existingUser) {
            await createUserInDatabase(user);
          }
          return true;
        },
      },
      pages: {
        signIn: '/',
      },
}

async function fetchUserFromDatabase(email: string) {
        try{
            const user = await db.user.findFirst({
                where: {
                    email: email
                }
            })

            return user;
        }catch(e){
            console.log("Error fetchin user : ", e)
        }
  }
  
  async function createUserInDatabase(user: any) {
    try{
        await db.user.create({
            data: {
                name: user?.name,
                email: user?.email,
                image: user?.image
            }
        })
    }catch(e){
        console.error(e)
    }
    
  }


declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        onboarded: boolean;
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      email?: string;
      onboarded?: boolean;
    }
  }