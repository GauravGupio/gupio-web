import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { useEffect } from 'react'


const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [location.pathname]);

    return (
        <section>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
        </section>
    )
}

export default MainLayout;