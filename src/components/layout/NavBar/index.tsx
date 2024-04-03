import Image from "next/image";
import assetsImage from "@/utils/constants";
import SectionLayout from "../SectionLayout";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import NavBarMenu from "@/components/elements/NavBarMenu";

const NavBar = () => {
    return (
        <nav className="w-full bg-transparent fixed z-[9999]">
            <SectionLayout className="py-6 h-fit bg-white flex justify-between items-center">
                <div>
                    <Image
                        className="h-auto w-auto"
                        src={assetsImage.selhonoLogo}
                        alt="logo"
                        height={100}
                        width={100}
                        priority />
                </div>
                <div>
                    <NavBarMenu className="hidden lg:block" />
                    <HamburgerMenu className="block lg:hidden" />
                </div>
            </SectionLayout>
        </nav>
    );
}

export default NavBar;