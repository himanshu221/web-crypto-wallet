"use client";

import { signIn, useSession } from "next-auth/react";
import { GoogleButton } from "./UI/GoogleBtn"

export const AppBar = () => {
    
    return (
        <div className="h-16 bg-[#f2f9fd] absolute top-0 left-0 right-0 px-24 py-2 flex items-center justify-between">
            <div className="flex font-small justify-center items-center gap-2">
                <div className="w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0d7fc5" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div>
                <div className="text-3xl text-[#007dc1]">
                    NoteCase
                </div>
            </div>
            <div className="my-2">
                <GoogleButton action={() => signIn('google',{
                    callbackUrl: "http://localhost:3000/home"
                })}>
                    Login
                </GoogleButton>
            </div>
        </div>
    ) 
}