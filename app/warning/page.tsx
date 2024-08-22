"use client";

import { useRouter } from "next/navigation";
import { useCurrentUser } from "../../hooks/use-current-user";
import warning from "@/public/warning.svg"
import lock from "@/public/lock.svg"
import Image from "next/image"
import { StandardButton } from "@/components/UI/StandardBtn"

export default function Warning() {
    const user = useCurrentUser();
    const router = useRouter();
    if(!user){
        router.push("/");
        return;
    }

    return <div className="h-screen w-full flex justify-center items-start bg-[#f2f9fd] overflow-y-auto pt-32">
            <div className="flex flex-col gap-3 justify-center items-center  lg:w-[800px]  md:w-[700px] w-[500px] px-10">
                <div className="text-4xl text-center font-bold text-[#16303f]">
                    Secret Recovery Phrase Warning
                </div>
                <div className="text-[#526a7b] text-center text-lg mb-10">
                    on the next page, you will receive your secret recovery phrase.
                </div>
                <div className="grid grid-row md:px-32 py-2 gap-4 justify-center items-center mb-10">
                    <div className="rounded-lg bg-white p-5 shadow-[0px_0px_40px_rgba(0,0,0,0.06)]">
                        <div className="grid grid-cols-5">
                            <div className="flex justify-center items-center col-span-1">
                                <Image src={warning} width={30} height={30} alt="warning"/>
                            </div>
                            <div className="text-slate-800 text-lg col-span-4">
                                This is the <span className="font-bold">ONLY</span> way to recover your account if you lose access to your device or password.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-5 shadow-[0px_0px_40px_rgba(0,0,0,0.06)] mb-10">
                        <div className="grid grid-cols-5">
                            <div className="flex justify-center items-center col-span-1">
                                <Image src={lock} width={30} height={30} alt="lock"/>
                            </div>
                            <div className="text-slate-800 text-lg col-span-4">
                                Write it down, store it in a safe place, and <span className="font-bold">NEVER</span> share it with anyone.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center text-white mb-5">
                        <input onClick={} type="checkbox" value="" className="w-10 h-10 text-[#007dc1] bg-white rounded-lg" />
                        <label className="ml-5 text-lg font-semibold text-[#16303f]">I understand that I am responsible for saving my secret phrase, and that is is the only way to recover my wallet.</label>
                    </div>
                    <div className="px-20 h-12">
                        <StandardButton onClick={() => {}}>Next</StandardButton>
                    </div>
                </div>
            </div>
        </div>
    }