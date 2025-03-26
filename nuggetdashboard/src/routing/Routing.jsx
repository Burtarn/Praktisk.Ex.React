import React, { lazy, Suspense } from "react";
import Spinner from "../components/Spinner/Spinner";


const Homepage = lazy(() => import("../pages/MainPages/Homepage"));
const AboutPage = lazy(() => import("../pages/MainPages/AboutPage"));
const ProductsPage = lazy(() => import("../pages/MainPages/ProductsPage"));
const SavingsPage = lazy(() => import("../pages/MainPages/SavingsPage"));
const NotFound = lazy(() => import("../pages/MainPages/NotFound"));
const ContactPage = lazy(() => import("../pages/subpages/Contact")); 
const FAQPage = lazy(() => import("../pages/subpages/faq")); 
const History = lazy(() => import("../pages/subpages/History")); 
const Dashboard = lazy(() => import("../pages/MainPages/Dashboard"));

import Profile from "../pages/MainPages/Profile"; 
import Login from "../pages/MainPages/Login"; 
import ProtectedRoute from "../pages/ProtectedRoute/ProtectedRoute";


const routes = (isLoggedIn, setIsLoggedIn) => [
    {
        path: "/",
        element: (
            <Suspense fallback={ <Spinner/> }>
                <Homepage />
            </Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <Suspense fallback={ <Spinner/> }>
                <AboutPage />
            </Suspense>
        ),
    },
    {
        path: "/about/contact", 
        element: (
            <Suspense fallback={ <Spinner/> }>
                <ContactPage />
            </Suspense>
        ),
    },
    {
        path: "/about/faq", 
        element: (
            <Suspense fallback={ <Spinner/> }>
                <FAQPage />
            </Suspense>
        ),
    },
    {
        path: "/about/history",  
        element: (
            <Suspense fallback={ <Spinner/> }>
                <History />
            </Suspense>
        ),
    },
    {
        path: "/products",
        element: (
            <Suspense fallback={ <Spinner/> }>
                <ProductsPage />
            </Suspense>
        ),
    },
    {
        path: "/savings",
        element: (
            <Suspense fallback={<Spinner/>}>
                <SavingsPage />
            </Suspense>
        ),
    },
    {
        path: "/dashboard", 
        element: (
            <Suspense fallback={<Spinner/>}>
                <Dashboard />
            </Suspense>
        ),
    },
    {
        path: "/login", 
        element: <Login setIsLoggedIn={setIsLoggedIn} />, 
    },
    {
        path: "/profile", 
        element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Profile aria-live="assertive" aria-label="Profil - Skyddad användarsida" />
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<Spinner/>}>
                <NotFound />
            </Suspense>
        ),
    },
];

export default routes;