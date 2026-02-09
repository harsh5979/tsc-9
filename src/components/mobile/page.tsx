"use client"
import React from 'react'
import { createProfileDetailsStore } from '../store/page'
import Image from 'next/image'



export const Mobile = ({ profile, setprofile }: { profile: any, setprofile: any }) => {
    const { firstName, lastName, email, profileImage } = profile;


    return (
        <div className=" relative container py-16 col-span-4 border border-white h-full gap-2">
            <div className=" my-10">


                <Image
                    src={profileImage?.name}
                    alt={'profile'}
                    width={150}
                    height={150}
                    priority
                    className="object-contain rounded-full mx-auto border border-white"
                />
            </div>
            <div className="">


                <div className="flex items-center gap-2">
                    <label htmlFor="name">First Name :</label>
                    <h1 className='text-center'>{firstName} {lastName}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="email">Email :</label>
                    <p className='text-center'>{email}</p>
                </div>
            </div>

        </div>
    )
}