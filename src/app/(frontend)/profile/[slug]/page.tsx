"use client"
import Link from 'next/link'

import { Button } from '@payloadcms/ui'
import Image from 'next/image'

import { ProfilePage } from '@/components/Profile/ProfilePage';
import { useProfileDetailsStore } from '@/components/store/page';
import { Mobile } from '@/components/mobile/page';
import { useState } from 'react';
import { email } from 'payload/shared';


export default function ProfileDetailsPage({ params }: { params: { slug: string } }) {

    // const { slug } = params
    const [profile, setprofile] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            profileImage: {},
        }
    )
    console.log(profile);




    return (
        <div className='container'>


            <div className=" grid grid-cols-12 gap-4">

                <Mobile profile={profile} setprofile={setprofile} />


                <ProfilePage profile={profile} setprofile={setprofile} />


            </div>


        </div>
    )
}
