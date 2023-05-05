import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        primary:
          "bg-[#fff] relative z-[1] transtion-all duration-[.6s] ease-btnCubic before:bg-btnHover before:transition-all before:duration-[.6s] before:ease-btnCubic before:rounded-sm before:absolute before:-z-[1] before:inset-0 before:right-full hover:before:right-0 border border-lightBorder font-semibold rounded-sm px-4 py-3 text-black hover:text-white",
        circle: "bg-white text-taxonomyBlack text-3xl rounded-full w-14 h-14 shadow-circleShadow",
        ghost: "text-2xl text-taxonomyBlack dark:text-white hover:bg-lightBorder/70 p-3 rounded-full dark:hover:bg-darkBorder/70",
      },
    },
  }
);

const Button = forwardRef(({ children, variant, className, ...props }, ref) => {
  return (
    <>
      <button
        ref={ref}
        className={buttonVariants({ variant, className })}
        {...props}
      >
        {children}
      </button>
    </>
  );
});

export default Button;
