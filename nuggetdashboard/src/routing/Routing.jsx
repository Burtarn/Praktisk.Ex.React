import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import SavingsPage from "../pages/SavingsPage";
import NotFound from "../pages/NotFound";
import ContactPage from "../pages/subpages/Contact"; 
import FAQPage from "../pages/subpages/faq"; 
import History from "../pages/subpages/History";; 

const routes = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/about/contact", 
        element: <ContactPage />,
    },
    {
        path: "/about/faq", 
        element: <FAQPage />,
    },
    {
        path: "/about/history",  
        element: <History />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/savings",
        element: <SavingsPage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;