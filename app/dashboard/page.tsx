"use client";

import { Loader } from "@/components/UI/Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
        const { status, data: session, update} = useSession();
        const router = useRouter();

        useEffect(() => {
            if (status === "unauthenticated") {
              router.push("/");
            } else if (status === "authenticated" && session?.user) {
              if (!session.user.onboarded) {
                router.push("/warning");
              }
            }
          }, [session, status, router]);


        if(status === "loading"){
            return <div className="h-screen w-full flex justify-center items-center bg-[#f2f9fd] overflow-y-auto pt-32">
                <Loader />
            </div>
        }
        
        return (
            <div className="h-screen w-full flex justify-center items-start bg-[#f2f9fd] overflow-y-auto pt-24">
                <div className="grid grid-rows-2 grid-cols-1 justify-center items-center bg-[#f9fdfe]  lg:w-[800px] h-[650px]  md:w-[700px] w-[500px] rounded-xl shadow-[0px_0px_40px_rgba(0,0,0,0.08)]">
                    <div className="row-span-1 col-span-1 flex flex-col gap-3 rounded-xl bg-white h-full shadow-[0px_0px_40px_rgba(0,0,0,0.06)] p-5 md:p-10">
                        <div className="flex justify-start gap-3 items-center">
                            <div className="w-[75px] flex text-xs justify-center items-center">
                                <img src={session?.user.image!} alt="image" className="rounded-full object-fit"/>
                            </div>
                            <div className="text-2xl md:text-2xl font-bold text-[#2d4c5d]">
                                {`Welcome back, ${session?.user.name}!`}
                            </div>
                        </div>
                        <div className="text-[#98aab2]">
                            Notecase Account Assets
                        </div>
                        <div className="">

                        </div>
                    </div>
                    <div className="row-span-1 col-span-1 p-10">

                    </div>
                </div>
            </div>
        )

}