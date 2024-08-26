"use client"
import { Hero } from "@/components/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      if (!session.user.onboarded) {
        router.push("/warning");
      } else {
        router.push("/dashboard");
      }
    }
  }, [session, status, router]);

  return (
    <main className="h-screen overflow-y-auto w-full flex justify-center items-center bg-[#f2f9fd] px-24 pt-16 pb-20 lg:pb-0">
      <div className="h-full">
        <Hero />
      </div>
    </main>
  );
} 
