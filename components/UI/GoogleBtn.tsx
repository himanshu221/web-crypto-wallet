"use client";
import Image from 'next/image'
import googleImg from '@/public/google.svg'
export const GoogleButton = ({ children, action} : {
    children: React.ReactNode,
    action: () => void
}) => {
    return (
        <button onClick={action} className="flex justify-center items-center rounded-lg bg-[#007dc1] py-1 pl-1 pr-2.5 text-xs font-semibold text-white shadow-[0px_0px_40px_rgba(0,0,0,0.06)] hover:bg-[#016398] active:bg-[#014b75] mobile:h-11 sm:text-base">
                    <Image alt="Login with Google" className="h-10 w-10 mobile:h-9 mobile:w-9 css-0" src={googleImg} loading="eager" />
                    <p className="w-full text-center font-bold ml-1.5">
                        {children}
                    </p>
        </button>
    )
}