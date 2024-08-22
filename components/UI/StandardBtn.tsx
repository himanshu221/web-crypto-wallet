"use client";


export const StandardButton = ({children, onClick}:{
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <div onClick={onClick} className="flex justify-center items-center rounded-lg cursor-pointer h-full bg-[#007dc1] py-1 pl-1 pr-2.5 font-semibold text-white shadow-[0px_0px_40px_rgba(0,0,0,0.06)] hover:bg-[#016398] active:bg-[#014b75] sm:text-base">
        {children}
    </div>
}