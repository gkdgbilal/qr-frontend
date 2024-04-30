import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "border-2 border-black bg-white text-black hover:bg-neutral-200",
      secondary:
        "border-2 border-white bg-black text-white hover:bg-neutral-800",
      danger: "border-none  bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-4 py-1",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// export default function Button({
//   children,
//   className,
//   variant,
//   size,
//   ...props
// }: ButtonProps) {
//   return (
//     <button
//       {...props}
//       className={cn(buttonVariants({ variant, size, className }))}
//     >
//       {children}
//     </button>
//   );
// }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
