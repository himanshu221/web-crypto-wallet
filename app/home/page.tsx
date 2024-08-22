'use client';
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../../hooks/use-current-user";

export default function Home() {
    const user = useCurrentUser();
    const router = useRouter();
    if(!user){
        router.push("/");
        return;
    }

    if(user) {
        return (
            <div className="h-100vh lg:h-screen w-full flex justify-center items-center bg-[#f2f9fd]">
            {
                user.image
            }
            </div>
        )
    }
}