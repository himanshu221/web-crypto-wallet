"use client"
import { Hero } from "@/components/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function App() {
  const { status } = useSession();
  const router = useRouter();

  if(status === "authenticated"){
    router.push('/warning');
  }

  return (
    <main className="h-screen overflow-y-auto w-full flex justify-center items-center bg-[#f2f9fd] px-24 pt-16 pb-20 lg:pb-0">
      <div className="h-full">
        <Hero />
      </div>
    </main>
  );
} 
