import React from 'react';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import ProfileSection from '../../components/ProfileSettings/ProfileSection';

const Profile = () => {
    return (
        <>
        <div>
            <h2>Min Profil</h2>
            <p>Välkommen till din profil!</p>
        </div>
        <div>
        < ThemeToggle />
        </div>
        <section>
        <ProfileSection />
        </section>
        </>
    );
};

export default Profile;