import Image from "next/image";
import assetsImage from "@/utils/constants";
import SectionLayout from "../SectionLayout";
import HamburgerMenu from "@/components/elements/HamburgerMenu";

const NavBar = () => {
    return (
        <nav className="w-full border-b">
            <SectionLayout className="py-6 h-full flex justify-between items-center">
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
                    <HamburgerMenu />
                </div>
            </SectionLayout>
        </nav>
    );
}

export default NavBar;