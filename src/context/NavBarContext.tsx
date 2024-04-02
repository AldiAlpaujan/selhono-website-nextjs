"use client"
import { createContext, ReactNode, useState } from "react"

interface ProviderValue {
    isOpen: boolean | null,
    setIsOpen: (value: boolean) => void
}

const NavBarContext = createContext<ProviderValue | null>(null);
const NavBarContextProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </NavBarContext.Provider>
    );
}

export { NavBarContext };
export default NavBarContextProvider;