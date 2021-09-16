import React from 'react'
import Navbar from '../components/Navbar'
import ProfileGallery from '../components/ProfileGallery'
import ProfileInfo from '../components/ProfileInfo'

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div>
                <ProfileInfo />
                <hr className="profile-hr"/>
                <ProfileGallery />
            </div>
        </div>
    )
}
