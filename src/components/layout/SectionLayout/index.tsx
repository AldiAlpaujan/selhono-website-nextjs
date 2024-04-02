import { ReactNode } from "react";

type SectionLayoutProps = {
    children?: ReactNode,
    className?: string
}

const SectionLayout = ({ children, className }: SectionLayoutProps) => {
    return (
        <section className={`container px-6 xl:px-40 ${className}`}>
            {children}
        </section>
    );
}

export default SectionLayout;