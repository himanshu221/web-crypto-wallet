"use client";

import { useSession } from "next-auth/react"


export const MenuButton = ({children, onClick}: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    const { data, status} = useSession();
    
}