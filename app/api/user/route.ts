import { authConfig } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET, cookieName: "next-auth.session-token" });
    const session = await getServerSession(authConfig)
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, {status: 401});
      }
    console.log("Update user is called")
    const body = await req.json();

    try{
        await db.user.update({
            data: {
                mnemonic: body.data.mnemonic,
                onboarded: true
            },
            where: {
                email: body.data.email
            }
        })
    // console.log("token : ", token)
    // if(token){
    //     token.onboarded = true;
    // }
    }catch(e){
        console.error(e)
        return NextResponse.json({
            message: "Failed to save user in db."
        },{
            status: 400
        })
    }

    return NextResponse.json({
        message: "User created successfully."
    })
}


export async function GET() {
    const session = await getServerSession(authConfig);
    try{
        const user = await db.user.findFirst({
            where: {
                email: session?.user?.email!
            }
        })

        if(user){
            return NextResponse.json({
                message: "User found."
            });
        }
        return NextResponse.json({
            message: "User not found."
        },{
            status: 400
        });

    }catch(e){
        return NextResponse.json({
            message: "Error occured while fetching user"
        },{
            status: 400
        });
    }
}