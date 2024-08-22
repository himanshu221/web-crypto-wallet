"use client";

export const StandardButton = ({children, onClick, active}:{
    children: React.ReactNode,
    onClick: () => void,
    active: boolean
}) => {
    return <button onClick={onClick} disabled={active} className="flex justify-center items-center rounded-lg cursor-pointer disabled:cursor-auto disabled:hover:bg-[#6ab1d8] disabled:active:bg-[#6ab1d8] disabled:bg-[#6ab1d8] h-full w-full bg-[#007dc1] py-1 pl-1 pr-2.5 font-semibold text-white shadow-[0px_0px_40px_rgba(0,0,0,0.06)] hover:bg-[#016398] active:bg-[#014b75] sm:text-base">
        {children}
    </button>
}