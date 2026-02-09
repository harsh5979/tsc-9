"use client"
import React from 'react'
import { createProfileDetailsStore } from '../store/page'
import Image from 'next/image'



export const Mobile = () => {
    const useProfileDetailsStore = createProfileDetailsStore();
    const { name, lastName, email, profileImage } = useProfileDetailsStore;


    return (
        <div className=" relative container py-16 col-span-4 border border-white h-full">
            <Image
                // src={profileImage}
                src={profileImage || '/placeholder.jpg'}
                alt={'profile'}
                width={150}
                height={150}
                priority
                className="object-contain rounded-full mx-auto"
            />
            <h1 className='text-center'>{name || 'Name'} {lastName || 'Last Name'}</h1>
            <p className='text-center'>{email || 'Email'}</p>

        </div>
    )
}