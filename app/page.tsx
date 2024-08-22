"use client"
import { Hero } from "@/components/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function App() {
  const { status } = useSession();
  const router = useRouter();

  if(status === "authenticated"){
    router.push('/cred');
  }

  return (
    <main className="h-100vh lg:h-screen w-full flex justify-center items-center bg-[#f2f9fd] px-24 pt-16 pb-20 lg:pb-0">
      <div className="h-full">
        <Hero />
      </div>
    </main>
  );
} 
