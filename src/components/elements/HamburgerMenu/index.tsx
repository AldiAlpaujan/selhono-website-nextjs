"use client"

import { useContext, useEffect, useRef } from 'react';
import './hamburger-menu.css';
import { NavBarContext } from '@/context/NavBarContext';

const HamburgerMenu = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const { isOpen, setIsOpen } = useContext(NavBarContext)!;

    useEffect(() => {
        const classList = btnRef.current?.classList;
        if (isOpen) {
            classList?.add("burger-menu-active");
            setTimeout(() => classList?.add("rotate-burger-line"), 500);
        } else {
            classList?.remove("rotate-burger-line");
            setTimeout(() => classList?.remove("burger-menu-active"), 500);
        }
    }, [isOpen]);

    return (
        <div className='h-full flex items-center justify-center'>
            <button ref={btnRef} onClick={() => setIsOpen(!isOpen)} className="w-6 h-5 bg-white relative">
                <span className="burger-line top-0 transition-all duration-500" />
                <span className="burger-line transition-all duration-500" />
                <span className="burger-line bottom-0 transition-all duration-500" />
            </button>
        </div>
    );
}

export default HamburgerMenu;