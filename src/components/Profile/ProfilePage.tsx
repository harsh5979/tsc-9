"use client"
import { Button } from '@payloadcms/ui'
import Image from 'next/image'
import { errors } from 'playwright-core';
import React, { useState, useEffect } from 'react';
import { createProfileDetailsStore, useProfileDetailsStore } from '../store/page';
export const ProfilePage = () => {

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const { name, lastName, email, password, profileImage } = useProfileDetailsStore;


    useEffect(() => {
        validateForm();
    }, [name, email, password]);
    // Validate form
    const validateForm = () => {
        let errors: any = {};

        if (!name) {
            errors.name = 'Name is required.';
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


            <div className='container py-16'>
                <div className='flex flex-col gap-2 '>
                    <div className="flex items-center gap-2">
                        <label htmlFor="profileImage" className='text-white'>profile image</label>
                        <input type="file" accept="image/*" onChange={(e) => useProfileDetailsStore.setProfileDetails({ ...profileDetails, profileImage: e.target.value })} />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="name">First Name</label>
                        <input
                            className='border border-white'
                            placeholder="First Name"
                            value={name}
                            onChange={(e) => useProfileDetailsStore.setProfileDetails({ name: e.target.value })}
                        />
                        {errors?.name && <p className='text-red-500'>{errors.name}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className='border border-white'
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => useProfileDetailsStore.setProfileDetails({ ...profileDetails, lastName: e.target.value })}
                        />
                        {errors?.lastName && <p className='text-red-500'>{errors.lastName}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            className='border border-white'
                            placeholder="Email"
                            value={email}
                            onChange={(e) => useProfileDetailsStore.setProfileDetails({ ...profileDetails, email: e.target.value })}
                        />
                        {errors?.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>

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