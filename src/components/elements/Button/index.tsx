import { ForwardedRef, forwardRef, ReactNode } from "react";

type ButtonProps = {
    children?: ReactNode,
    className?: string,
    onClick?: () => void,
}

const Button = forwardRef(({ children, className, onClick }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
        <button ref={ref} onClick={onClick} className={`text-sm py-3 px-6 bg-primary-light shadow-btn-shadow rounded-xl 
            transition-all duration-300 hover:brightness-105 active:brightness-95 lg:text-base ${className}`}>
            {children}
        </button>
    );
});

Button.displayName = "Custom Button";

export default Button;