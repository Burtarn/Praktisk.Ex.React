import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routing/Routing'; // Importera din rutt-konfiguration
import Navbar from './components/Header/Navbar'; // Importera Navbar

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {routes.map((r, index) => (
                    <Route key={index} path={r.path} element={r.element} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;