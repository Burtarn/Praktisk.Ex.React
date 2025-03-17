import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Homepage = lazy(() => import("../pages/Homepage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const SavingsPage = lazy(() => import("../pages/SavingsPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ContactPage = lazy(() => import("../pages/subpages/Contact")); 
const FAQPage = lazy(() => import("../pages/subpages/faq")); 
const History = lazy(() => import("../pages/subpages/History")); 
const Dashboard = lazy(() => import("../pages/Dashboard"));


import Profile from "../pages/Profile"; 
import Login from "../pages/Login"; 


const routes = () => [
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
        element: <Login />, 
    },
    {
        path: "/profile", 
        element: <Profile />, 
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