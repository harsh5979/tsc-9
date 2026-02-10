"use client"
import React from 'react'
import { createProfileDetailsStore } from '../store/page'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'



export const Mobile = ({ profile, setprofile, slug, link, setLink }: { profile: any, setprofile: any, slug: string, link: any, setLink: any }) => {
    const { firstName, lastName, email, profileImage } = profile;


    return (
        <div className=" relative container md:py-16 py-4 col-span-4 border border-white  gap-5 flex flex-col bg-white">

            {slug === "details" && (
                <div className="">
                    <div className=" my-10 md:my-0 relative aspect-square w-26 h-26  mx-auto">


                        <Image
                            src={profileImage}
                            alt={'profile'}
                            fill
                            priority
                            className="object-cover rounded-full border border-white"
                        />
                    </div>


                    <div className="flex flex-col items-center gap-2 mx-auto w-full py-5">
                        <h1 className='text-center text-md font-bold'>{firstName || " Name"} {lastName}</h1>

                        <p className='text-center text-xs break-words'>{email || "demo@gmail.com"}</p>
                    </div>

                </div>
            )}

            <div className='flex flex-col gap-4 my-10'>
                {link?.map((Item, index) => (
                    <a href={Item.link} className='text-sm flex  border border-black items-center  mx-auto w-full justify-between p-3' target="_blank" key={index}>
                        {Item.platform}
                        <ArrowRight />
                    </a>
                ))}
            </div>




        </div>
    )
}