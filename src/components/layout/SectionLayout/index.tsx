import { ReactNode } from "react";

type SectionLayoutProps = {
    children?: ReactNode,
    className?: string
}

const SectionLayout = ({ children, className }: SectionLayoutProps) => {
    return (
        <section className={`container px-5 md:px-7 lg:px-28 xl:px-40 2xl:px-64 ${className}`}>
            {children}
        </section>
    );
}

export default SectionLayout;