"use client"
import { Button } from '@payloadcms/ui'
import Image from 'next/image'
import { errors } from 'playwright-core';
import React, { useState, useEffect } from 'react';
import { createProfileDetailsStore, useProfileDetailsStore } from '../store/page';

export const ProfilePage = ({ profile, setprofile }: { profile: any, setprofile: any }) => {

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const { firstName, lastName, email, password, profileImage } = profile;


    useEffect(() => {
        validateForm();
    }, [firstName, lastName, email, password]);
    // Validate form
    const validateForm = () => {
        let errors: any = {};

        if (!firstName) {
            errors.firstName = 'Name is required.';
        }
        if (!lastName) {
            errors.lastName = 'Last Name is required.';
        }

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };
    // Submit
    const handleSubmit = () => {
        if (isFormValid) {
            console.log('Form submitted successfully!');
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };
    return (

        <div className="col-span-8 border border-white h-full">

            <div className="container py-10">
                <h1>profile details</h1>
                <p>Add your profile details to creaet a personal touch to your profile</p>
            </div>
            <div className='container py-16'>
                <div className='flex flex-col gap-2 '>
                    <div className="flex items-center gap-2 py-2">
                        <label htmlFor="profileImage" className='text-white'>profile image</label>
                        <input type="file" name="profileImage" accept="image.png,image.jpg,image.jpeg" onChange={(e) => setprofile({ ...profile, profileImage: URL.createObjectURL(e.target.files?.[0]) })} />
                    </div>
                    <div className="flex items-center gap-2 py-2">
                        <label htmlFor="name">First Name</label>
                        <input
                            className='border border-white'
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setprofile({ ...profile, firstName: e.target.value })}
                        />
                    </div>
                    {errors?.firstName && <p className='text-red-500'>{errors.firstName}</p>}
                    <div className="flex items-center gap-2 py-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className='border border-white'
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setprofile({ ...profile, lastName: e.target.value })}
                        />
                    </div>
                    {errors?.lastName && <p className='text-red-500'>{errors.lastName}</p>}
                    <div className="flex items-center gap-2 py-2">
                        <label htmlFor="email">Email</label>
                        <input
                            className='border border-white'
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setprofile({ ...profile, email: e.target.value })}
                        />
                    </div>
                    {errors?.email && <p className='text-red-500'>{errors.email}</p>}

                    <button
                        className='border border-white'
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>






            </div>
        </div>
    )
}