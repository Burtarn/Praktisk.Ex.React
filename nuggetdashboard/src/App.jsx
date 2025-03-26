import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routing/Routing'; 
import Navbar from './components/Header/Navbar'; 
import Footer from './components/footer/footer'; 
import { AuthContext } from './context/AuthContext'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';

const App = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} logout={logout} /> 
            <Routes>
                {routes(isLoggedIn).map((r, index) => (
                    <Route 
                        key={index} 
                        path={r.path} 
                        element={
                            React.cloneElement(r.element, { isLoggedIn }) 
                        } 
                    />
                ))}
            </Routes>
            <Footer /> 
        </>
    );
};

export default App;