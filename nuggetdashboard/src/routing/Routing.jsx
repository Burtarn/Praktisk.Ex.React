import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from '../pages/ProtectedRoute/ProtectedRoute'

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
            <Suspense fallback={<div>Loading...</div>}>
                <Homepage />
            </Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AboutPage />
            </Suspense>
        ),
    },
    {
        path: "/about/contact", 
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ContactPage />
            </Suspense>
        ),
    },
    {
        path: "/about/faq", 
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <FAQPage />
            </Suspense>
        ),
    },
    {
        path: "/about/history",  
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <History />
            </Suspense>
        ),
    },
    {
        path: "/products",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ProductsPage />
            </Suspense>
        ),
    },
    {
        path: "/savings",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <SavingsPage />
            </Suspense>
        ),
    },
    {
        path: "/dashboard", 
        element: (
            <Suspense fallback={<div>Loading...</div>}>
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
            <Profile />
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
            </Suspense>
        ),
    },
];

export default routes;