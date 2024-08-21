"use client"
import { signIn } from 'next-auth/react'
import { HeroCard } from './HeroCard'
import { GoogleButton } from './UI/GoogleBtn'

export const Hero = () => {
    return (
        <div className="h-full pt-20">
            <div className='lg:grid lg:grid-cols-5'>
                <div className="lg:col-span-2  text-center lg:text-start lg:flex lg:flex-col animate-fade-right animate-duration-1000 animate-ease-in">
                    <div className='text-7xl font-bold text-[#16303f]'>
                        The crypto of tomorrow, <span className='text-[#007dc1]'>today</span>
                    </div>
                    <div className='py-5 lg:py-10 text-xl lg:text-2xl text-[#526a7b]'>
                        Create a frictionless wallet with just a Google Account.
                    </div>
                    <div className='py-20 lg:py-10 flex justify-center items-center lg:flex-none lg:justify-start'>
                        <GoogleButton action={() => { signIn('google',{
                            callbackUrl: "/home"
                        })}}>
                            Sign up with Google
                        </GoogleButton>
                    </div>
                </div>
                <div className="md:col-span-3 lg:pl-16 animate-fade animate-duration-1000 animate-ease-in">
                    <HeroCard />
                </div>
            </div>
        </div>
    )
}