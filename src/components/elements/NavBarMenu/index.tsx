const menu: string[] = [
    "Home",
    "Pages",
    "Services",
    "Project",
    "Blog",
    "Contact",
];

const NavBarMenu = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <ul className="flex items-center gap-x-7">
                {menu.map((value, i) => (
                    <li key={i} className="text-base font-medium transition-all duration-300 
                        hover:text-primary-dark hover:cursor-pointer">
                        {value}
                    </li>
                ))}
                <svg
                    className="h-[18px] w-[18px] self-center"
                    width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <path d="M16.6842 16.6844L21.9998 22.0001M19.3755 10.1875C19.3755 15.2616 15.2621 19.375 10.188 19.375C5.11387 19.375 1.00049 15.2616 1.00049 10.1875C1.00049 5.11338 5.11387 1 10.188 1C15.2621 1 19.3755 5.11338 19.3755 10.1875Z" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </ul>
        </div>
    );
}

export default NavBarMenu;