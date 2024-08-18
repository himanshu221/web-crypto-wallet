import { useSession } from "next-auth/react"


export default function Home() {
    const { data } = useSession();

    if(data) {
        return (
            <div className="h-100vh lg:h-screen w-full flex justify-center items-center bg-[#f2f9fd]">
            {
                data.user?.email
            }
            </div>
        )
    }
}