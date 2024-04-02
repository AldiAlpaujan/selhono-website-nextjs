"use client"

import NavBarContextProvider, { NavBarContext } from "@/context/NavBarContext";
import NavBar from "../NavBar";
import { ReactNode, useContext, useEffect } from "react";

type AppShellProps = {
    children: ReactNode
}

const AppShell = ({ children }: AppShellProps) => {
    return (
        <NavBarContextProvider>
            <AppContent>
                {children}
            </AppContent>
        </NavBarContextProvider>
    );
}

const AppContent = ({ children }: AppShellProps) => {
    const { isOpen, setIsOpen } = useContext(NavBarContext)!;

    useEffect(() => {
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width >= 1024) setIsOpen(false);
        });
    }, [setIsOpen]);

    return (
        <main className={`h-screen w-full ${isOpen ? "overflow-hidden" : ""}`}>
            <NavBar />
            <div className="pt-[73px]">
                {children}
            </div>
        </main>
    );
}

export default AppShell;