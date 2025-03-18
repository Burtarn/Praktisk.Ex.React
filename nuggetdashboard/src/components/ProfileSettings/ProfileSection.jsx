import React, { useState } from 'react';
import '../../styles/ProfilSection.css'

const ProfileSection = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Förnamn");
    const [email, setEmail] = useState("exempel@domain.com");
    const [age, setAge] = useState("25");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Här kan du lägga till logik för att spara ändringar, t.ex. via en API-anrop
    };

    return (
        <div className="profile-section">
            <h3>Profilinformation</h3>
            <div>
                <label>
                    Förnamn:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEditing}
                    />
                </label>
            </div>
            <div>
                <label>
                    E-post:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!isEditing}
                    />
                </label>
            </div>
            <div>
                <label>
                    Ålder:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        disabled={!isEditing}
                    />
                </label>
            </div>
            <button onClick={isEditing ? handleSave : handleEdit}>
                {isEditing ? 'Spara' : 'Redigera'}
            </button>
        </div>
    );
};

export default ProfileSection;