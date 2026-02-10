"use client"
import Link from 'next/link'

import { Button } from '@payloadcms/ui'
import Image from 'next/image'

import { ProfilePage } from '@/components/Profile/ProfilePage';
import { useProfileDetailsStore } from '@/components/store/page';
import { Mobile } from '@/components/mobile/page';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import LinksPage from '@/components/links/LinksPage';


export default function ProfileDetailsPage() {
    const { slug } = useParams()
    const [profile, setprofile] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            profileImage: "/profile.png",
        }
    )
    const [link, setLink] = useState([
        { platform: "github", link: "https://github.com/" },
        { platform: "linkedin", link: "https://linkedin.com/" },
        { platform: "youtube", link: "https://youtube.com/" },
    ])


    return (
        <div className='container'>


            <div className=" grid grid-cols-12 gap-4 mx-auto w-full items-center py-10">
                <Mobile profile={profile} setprofile={setprofile} slug={slug} link={link} setLink={setLink} />


                {slug === "details" && <ProfilePage profile={profile} setprofile={setprofile} />}

                {slug === "links" && <LinksPage link={link} setLink={setLink} />}

            </div>


        </div>
    )
}
