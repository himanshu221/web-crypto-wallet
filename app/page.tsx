import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-100vh lg:h-screen w-full flex justify-center items-center bg-[#f2f9fd] px-24 pt-16 pb-20 lg:pb-0">
      <div className="h-full w-full">
        <Hero />
      </div>
    </main>
  );
} 
