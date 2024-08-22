"use client";

import { useSession } from "next-auth/react"
import Image from "next/image";
import menuBar from "@/public/menu.png"
import { useCurrentUser } from "@/hooks/use-current-user";


export const MenuButton = ({onClick}: {
    onClick: () => void
}) => {
    const { status } = useSession();
    const user = useCurrentUser()
    return status === "authenticated" && user &&
        <button  onClick={onClick} className=" grid grid-cols-2 rounded-lg bg-white  shadow-[0px_0px_40px_rgba(0,0,0,0.06)]">
            <div className="col-span-1 flex justify-center items-center w-full h-full">
                <div className="w-9 h-10 pl-2 py-1 flex text-xs justify-center items-center">
                    <img src={user.image!} alt="image" className="rounded-full object-fit"/>
                </div>
            </div>
            <div className="col-span-1 flex justify-center items-center w-full h-full">
                <div>
                    <Image src={menuBar} alt="menu image" className="w-5"/>
                </div>
            </div>
        </button>
}