import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";


const buttonVariants = cva('active:scale-95 inline-flex items-center justify-center', {
    variants: {
        variant: {
            primary: 'bg-[#fff] border border-lightBorder font-semibold rounded-sm px-4 py-3 text-black hover:text-white',
            circle: 'bg-white text-4xl rounded-full w-14 h-14 shadow-circleShadow',
            ghost: 'mr-2 text-3xl text-black dark:text-white'
        }
    }
})


const Button = forwardRef(({ children, variant, className, ...props }, ref) => {
    return (
        <>
            <button
                ref={ref}
                className={buttonVariants({ variant, className })}
                {...props}>
                    
                {children}
            </button>
        </>
    )
});

export default Button;
