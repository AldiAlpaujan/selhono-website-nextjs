import Button from "@/components/elements/Button";
import SectionLayout from "@/components/layout/SectionLayout";
import assetsImage from "@/utils/constants";
import Image from "next/image";
import { ReactNode } from "react";

const CallUsSection = () => {
    return (
        <SectionLayout className="mt-5 pb-10 hidden sm:block">
            <Background className="px-6 max-w-[70%] text-white md:max-w-[90%] xl:max-w-[80%]" >
                <div className="absolute top-1/2 -translate-y-1/2">
                    <h1 className="font-dm-serif-display mb-2 text-xl sm:text-2xl md:text-4xl md:mb-3 lg:text-[46px] lg:leading-none lg:mb-3 xl:text-[60px] xl:leading-[1.10]">
                        We create art for modern life
                    </h1>
                    <p className="text-sm mb-5 md:text-base md:mb-5 lg:text-lg lg:max-w-[70%]">
                        There are many variations of the passages of lorem Ipsum from
                        available, majority.
                    </p>
                    <div className="flex gap-x-3 items-center mb-5">
                        <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center md:w-14 md:h-14">
                            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.0012 26.0749C30.7796 24.8442 27.8211 23.0482 26.3857 22.3243C24.5164 21.3828 24.3625 21.3059 22.8933 22.3974C21.9133 23.1258 21.2617 23.7766 20.1148 23.532C18.9678 23.2874 16.4754 21.9082 14.2931 19.7329C12.1107 17.5576 10.6514 14.9931 10.4061 13.8501C10.1607 12.7071 10.8222 12.0632 11.5438 11.081C12.5607 9.69642 12.4838 9.46566 11.6145 7.59651C10.9368 6.14273 9.08833 3.21208 7.85291 1.99675C6.53134 0.691421 6.53134 0.92218 5.67979 1.27601C4.98652 1.56768 4.32141 1.92222 3.69281 2.3352C2.46201 3.15285 1.77892 3.83206 1.30122 4.85278C0.823513 5.87351 0.608893 8.26648 3.07588 12.7478C5.54286 17.2292 7.27367 19.5206 10.8561 23.0928C14.4385 26.6649 17.1931 28.5856 21.2202 30.844C26.2018 33.6339 28.1126 33.09 29.1365 32.6131C30.1604 32.1362 30.8427 31.4593 31.662 30.2286C32.076 29.6011 32.4314 28.9368 32.7235 28.2441C33.0781 27.3957 33.3089 27.3957 32.0012 26.0749Z" fill="white" fillOpacity="0.92" stroke="#CDA274" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-bold">
                                012345678
                            </h5>
                            <p className="font-medium text-sm">
                                Call Us Anytime
                            </p>
                        </div>
                    </div>
                    <Button className="flex items-center gap-x-2">
                        Get Free Estimate
                        <div className="w-[14px] h-[12px]">
                            <svg className="w-full h-full" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Button>
                </div>
            </Background>
        </SectionLayout>
    );
}

const Background = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className="relative w-full aspect-video bg-white">
            <div className="absolute z-[3] w-[55%] h-full overflow-hidden rounded-tr-[50%]">
                <div className="relative w-full h-full">
                    <Image
                        className="absolute z-[1] w-full h-full object-cover"
                        src={assetsImage.callUsImg[1]}
                        alt="call-us"
                        width={1000}
                        height={1000} />
                    <div className={`absolute z-[2] w-full h-full bg-transparent ${className}`}>
                        {children}
                    </div>
                </div>
            </div>
            <div className="absolute z-[2] h-full w-[25%] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    rounded-tr-[60%]"/>
            <div className="absolute z-[1] w-full h-full ">
                <Image
                    className="w-full h-full object-cover"
                    src={assetsImage.callUsImg[2]}
                    alt="call-us"
                    width={1000}
                    height={1000} />
            </div>
        </div>
    );
}

export default CallUsSection;