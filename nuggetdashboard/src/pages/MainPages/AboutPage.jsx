import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutPage = () => {
    const location = useLocation();

    return (
        <div className="p-6 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl text-orange-500 font-bold mb-4">
                Bitcoin Bros – Framtidens Finans är Här!
            </h1>
            <p className="text-gray-700 text-left text-lg leading-relaxed">
                Är du redo att revolutionera ditt sätt att tänka på pengar? Säg adjö till traditionell bankverksamhet och hej till en gränslös, decentraliserad finansiell värld med <strong>Bitcoin Bros</strong> – det banbrytande Bitcoin-företaget som förändrar spelplanen!
            </p>
            <p className="text-gray-700 text-left text-lg leading-relaxed mt-4">
                Vi tror på en framtid där ekonomisk frihet är tillgänglig för alla. Genom Bitcoin och blockkedjeteknik erbjuder vi en säker, transparent och effektiv lösning för dina finansiella behov. Oavsett om du är nybörjare eller en erfaren investerare, hjälper vi dig att navigera i kryptovärlden med enkla verktyg, smarta investeringstips och en engagerad community.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mt-6">Vad vi erbjuder:</h2>
            <ul className="text-gray-700 text-left text-lg mt-3 space-y-2">
                <li>1. Säker och enkel handel med Bitcoin</li>
                <li>2. De senaste nyheterna och analyserna från kryptovärlden</li>
                <li>3. En passionerad gemenskap av likasinnade investerare</li>
                <li>4. Utbildningsresurser för att maximera din förståelse och avkastning</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-8">Undersidor</h2>
            <nav className="mt-4">
                <ul className="flex flex-wrap justify-center gap-4">
                    {[
                        { path: '/about/contact', label: 'Kontakt' },
                        { path: '/about/faq', label: 'FAQ' },
                        { path: '/about/history', label: 'Historik' },
                    ].map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`px-4 py-2 rounded-md font-medium transition ${
                                    location.pathname === item.path
                                        ? 'bg-orange-500 text-white'
                                        : 'text-orange-500 hover:bg-orange-100'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default AboutPage;
