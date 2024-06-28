import React from "react";
import {cn} from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className = "", children, ...props}, ref) => {
    return (
      <button
        className={cn("h-9 px-4 py-2 inline-flex items-center", className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
});

Button.displayName = "Button";

export { Button };
