"use client"

import NavBarContextProvider, { NavBarContext } from "@/context/NavBarContext";
import NavBar from "../NavBar";
import { ReactNode, useContext } from "react";

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
    const { isOpen } = useContext(NavBarContext)!;
    return (
        <main className={`h-screen w-full ${isOpen && "overflow-hidden"}`}>
            <NavBar />
            {children}
        </main>
    );
}

export default AppShell;