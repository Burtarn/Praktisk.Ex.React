import React, { useState } from 'react';
import '../../styles/ProfilSection.css'

const ProfileSection = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Robin");
    const [email, setEmail] = useState("exempel@domain.com");
    const [age, setAge] = useState("33");
    const [card, setCard] = useState("XXXX-XXXX-XXXX");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="profile-section">
            <h3>Profilinformation</h3>
            <div>
                <label>
                    Namn:
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
            <div>
                <label>
                    Kortuppgifter:
                    <input
                        type="number"
                        value={card}
                        onChange={(e) => setCard(e.target.value)}
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