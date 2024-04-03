"use client"

import SectionLayout from "@/components/layout/SectionLayout";
import Image from "next/image";
import assetsImage from "@/utils/constants";
import Button from "@/components/elements/Button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imgRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const imgClassList = imgRef.current?.classList;
        const headerClassList = headerRef.current?.classList;
        const taglineClassList = taglineRef.current?.classList;
        const btnClassList = btnRef.current?.classList;
        imgClassList?.remove("opacity-0");
        imgClassList?.remove("scale-110");
        setTimeout(() => {
            headerClassList?.remove('opacity-0');
            headerClassList?.remove('-translate-x-10');
            taglineClassList?.remove('opacity-0');
            taglineClassList?.remove('-translate-x-10');
            btnClassList?.remove('opacity-0');
            btnClassList?.remove('translate-y-5');
        }, 400);
    }, []);

    return (
        <SectionLayout>
            <div ref={imgRef} className="relative w-full h-60 bg-white overflow-hidden rounded-tl-[40px] rounded-br-[40px] opacity-0 scale-110 transition-all duration-500 md:mt-5 md:h-[400px] md:rounded-tl-[60px] md:rounded-br-[60px] lg:h-[544px] 2xl:h-[600px]">
                <Image
                    className="absolute z-1 w-full h-full object-cover filter brightness-95"
                    src={assetsImage.heroImage}
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                    priority />
                <div className="absolute z-2 py-6 px-4 max-w-[80%] text-white md:py-10 md:px-6 sm:max-w-[60%] lg:py-14 lg:px-[26px] lg:max-w-[70%] 2xl:px-8">
                    <h1 ref={headerRef} className="-translate-x-10 font-dm-serif-display text-xl mb-1 opacity-0 transition-all duration-500 sm:text-2xl md:text-4xl md:mb-3 lg:text-[46px] lg:leading-none lg:mb-3 xl:text-[60px] xl:leading-[1.10]">
                        Let's make your home beautiful together
                    </h1>
                    <p ref={taglineRef} className="-translate-x-10 text-sm mb-2 opacity-0 transition-all duration-500 delay-150 md:text-base md:mb-5 lg:text-lg lg:max-w-[70%] ">
                        There are many variations of the passages of lorem Ipsum fromavailable, majority.
                    </p>
                    <Button ref={btnRef} className="translate-y-5 flex items-center gap-x-2 opacity-0 transition-all duration-500 delay-300">
                        Get Started
                        <div className="w-[14px] h-[12px]">
                            <svg className="w-full h-full" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Button>
                </div>
            </div>
        </SectionLayout>
    );
}

export default HeroSection;