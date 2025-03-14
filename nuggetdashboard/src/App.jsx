import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routing/Routing'; // Importera din rutt-konfiguration
import Navbar from './components/Header/Navbar'; // Importera Navbar

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Hantera inloggningsstatus

    return (
        <Router>
            <Navbar setIsLoggedIn={setIsLoggedIn} /> {/* Skicka setIsLoggedIn till Navbar */}
            <Routes>
                {routes(isLoggedIn).map((r, index) => (
                    <Route 
                        key={index} 
                        path={r.path} 
                        element={
                            React.cloneElement(r.element, { setIsLoggedIn }) // Skicka setIsLoggedIn till Login
                        } 
                    />
                ))}
            </Routes>
        </Router>
    );
};

export default App;