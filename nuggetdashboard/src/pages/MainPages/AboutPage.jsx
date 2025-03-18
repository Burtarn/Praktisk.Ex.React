import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Om Oss</h1>
            <p className="text-lg mb-6">Välkommen till vår sida!</p>
            <h2 className="text-2xl font-semibold mb-2">Undersidor</h2>
            <ul className="list-disc list-inside">
                <li className="mb-2">
                    <Link to="/about/contact" className="text-blue-500 hover:underline">
                        Kontakt
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/about/faq" className="text-blue-500 hover:underline">
                        FAQ
                    </Link>
                </li>
                        <li className="mb-2">
            <Link to="/about/history" className="text-blue-500 hover:underline">
                Historik
            </Link>
        </li>
            </ul>
        </div>
    );
};

export default AboutPage;