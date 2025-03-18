import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routing/Routing'; 
import Navbar from './components/Header/Navbar'; 
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return (
        <Router>
            <Navbar setIsLoggedIn={setIsLoggedIn} /> 
            <ThemeToggle /> 
            <Routes>
                {routes(isLoggedIn).map((r, index) => (
                    <Route 
                        key={index} 
                        path={r.path} 
                        element={
                            React.cloneElement(r.element, { setIsLoggedIn }) 
                        } 
                    />
                ))}
            </Routes>
        </Router>
    );
};

export default App;