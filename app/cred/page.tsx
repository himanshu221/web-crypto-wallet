"use client"

import { useCurrentUser } from "../../hooks/use-current-user";
import * as React from 'react';

export default function Secret() {
    const user = useCurrentUser();

    if(!user) return;

    return <div className="h-100vh lg:h-screen w-full flex justify-center items-center bg-[#f2f9fd]">
            {user.email!}
        </div>
    }