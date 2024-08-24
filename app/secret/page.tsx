"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { StandardButton } from "../../components/UI/StandardBtn"
import { useRecoilState, useRecoilValue } from "recoil";
import { mnemonicAtom, savedCheckAtom } from "../store/atoms/onboarding"
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from 'next/link';
import { Loader } from '../../components/UI/Loader';

export default function Secret() {
    const { status } = useSession();
    const router = useRouter(); 
    const mnemonic = useRecoilValue(mnemonicAtom);
    const [checkbox, setCheckbox] = useRecoilState(savedCheckAtom);

    useEffect(() => {
        if(status === "unauthenticated"){
            router.push('/');
            return;
        }
    },[status, router])

    if(status === "loading"){
        return <div className="h-screen w-full flex justify-center items-center bg-[#f2f9fd] overflow-y-auto pt-32">
            <Loader />
        </div>
    }
    

    return <div className="h-screen w-full flex justify-center items-start bg-[#f2f9fd] overflow-y-auto pt-24">
            <div className="flex flex-col gap-3 justify-center items-center  lg:w-[800px]  md:w-[700px] w-[500px] px-10">
                <div className="text-4xl text-center font-bold text-[#16303f]">
                    Secret Recovery Phrase
                </div>
                <div className="text-[#526a7b] text-center text-lg mb-5">
                    Save these words in a safe place.
                </div>
                <Link href="/warning" className="text-[#007dc1] font-semibold text-center text-lg mb-5">
                    Read the warning again
                </Link>
                <div className="grid grid-row px-2 py-2 gap-4 justify-center items-center mb-10">
                    <div className="rounded-lg bg-white pt-5 px-5 shadow-[0px_0px_40px_rgba(0,0,0,0.06)]">
                        <div>
                            <div className='grid grid-cols-3 gap-2 border-b pb-5'>
                                {
                                    mnemonic.map((word, ind) => {
                                        return <div key={ind} className='grid grid-cols-4 gap-2 p-2'>
                                            <div className='col-span-1 font-medium text-[#16303f]'>{`${ind+1}.`}</div>
                                            <div className='col-span-3 font-medium text-[#16303f]'>{word}</div>
                                        </div>
                                    })
                                }       
                            </div>
                            <div className='flex justify-center items-center py-2 text-[#526a7b]' >
                                Click anywhere on this card to copy
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-white mb-10">
                        <input onClick={() => setCheckbox(!checkbox)} type="checkbox" value="" className="w-4 h-4 text-[#007dc1] bg-white rounded-lg" />
                        <label className="ml-5 text-md font-semibold text-[#16303f]">I saved my secret recovery phrase</label>
                    </div>
                    <div className="px-20 h-12">
                        <StandardButton active={checkbox} onClick={() => {
                            setCheckbox(true)
                            router.push("/home")
                        }}>Next</StandardButton>
                    </div>
                </div>
            </div>
        </div>
    }