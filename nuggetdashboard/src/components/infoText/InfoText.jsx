    import React from 'react';

    const InfoText = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Var med hela tiden så missar du aldrig uppgångarna
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
            Ett månadssparande i fonder innebär att du köper fondandelar vid olika
            tidpunkter, en eller flera gånger i månaden. Det gör att du kommer att
            köpa andelar både när börsen går upp och när den går ned. Eftersom du
            sprider köpen över olika tillfällen istället för att lägga en större
            fondorder vid ett och samma tillfälle minskar också risken för att
            dina fonder ska sjunka i värde.
        </p>
        </div>
    );
    };

    export default InfoText;