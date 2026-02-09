
import Link from 'next/link'

import { Button } from '@payloadcms/ui'
import Image from 'next/image'

import { ProfilePage } from '@/components/Profile/ProfilePage';
import { useProfileDetailsStore } from '@/components/store/page';
import { Mobile } from '@/components/mobile/page';


export default async function ProfileDetailsPage({ params }: { params: { slug: string } }) {

    const { slug } = await params



    return (
        <div className='container'>
            <h1>profile details</h1>
            <p>Add your profile details to creaet a personal touch to your profile</p>
            <h2></h2>

            <div className=" grid grid-cols-12 gap-4">

                <Mobile />


                <ProfilePage />


            </div>


        </div>
    )
}
