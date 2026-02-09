// src/stores/counter-store.ts
import { createStore } from 'zustand'
import { persist } from 'zustand/middleware'

export const profileDetails = persist({
    name: '',
    lastName: '',
    email: '',
    password: '',
    profileImage: '',
}, {
    name: 'profileDetails',
    storage: localStorage,
})
export type profileDetailsState = typeof profileDetails
export type profileDetailsActions = {
    setProfileDetails: (profileDetails: profileDetailsState) => void
}
export type profileDetailsStore = profileDetailsState & profileDetailsActions

export const createProfileDetailsStore = (
    initState: profileDetailsState = profileDetails,
) => {
    return createStore<profileDetailsStore>()((set) => ({

        ...initState,
        setProfileDetails: (profileDetails: profileDetailsState) => set({ ...profileDetails }),
    }))
}

export const useProfileDetailsStore = createProfileDetailsStore()


