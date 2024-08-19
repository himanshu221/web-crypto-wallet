"use client";

import { useSession } from "next-auth/react"
import Image from "next/image";
import menuBar from "@/public/menu.png"


export const MenuButton = ({onClick}: {
    onClick: () => void
}) => {
    const { data } = useSession();

    return (
        <button  onClick={onClick} className=" grid grid-cols-2 rounded-lg bg-white  shadow-[0px_0px_40px_rgba(0,0,0,0.06)]">
            <div className="col-span-1 flex justify-center items-center w-full h-full">
                <div className="w-9 h-10 pl-2 py-1 flex justify-center items-center">
                    <img src={data?.user?.image!} alt="google image" className="rounded-full"/>
                </div>
            </div>
            <div className="col-span-1 flex justify-center items-center w-full h-full">
                <div>
                    <Image src={menuBar} alt="menu imageå" className="w-5"/>
                </div>
            </div>
        </button>
    )
}