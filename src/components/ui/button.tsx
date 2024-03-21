import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "redshield-inline-flex redshield-items-center redshield-justify-center redshield-whitespace-nowrap redshield-rounded-md redshield-text-sm redshield-font-medium redshield-ring-offset-background redshield-transition-colors redshield-focus-visible:outline-none redshield-focus-visible:ring-2 redshield-focus-visible:ring-ring redshield-focus-visible:ring-offset-2 redshield-disabled:pointer-events-none redshield-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "redshield-bg-primary redshield-text-primary-foreground redshield-hover:bg-primary/90",
        destructive:
          "redshield-bg-destructive redshield-text-destructive-foreground redshield-hover:bg-destructive/90",
        outline:
          "redshield-border redshield-border-input redshield-bg-background redshield-hover:bg-accent redshield-hover:text-accent-foreground",
        secondary:
          "redshield-bg-secondary redshield-text-secondary-foreground redshield-hover:bg-secondary/80",
        ghost: "redshield-hover:bg-accent redshield-hover:text-accent-foreground",
        link: "redshield-text-primary redshield-underline-offset-4 redshield-hover:underline",
      },
      size: {
        default: "redshield-h-10 redshield-px-4 redshield-py-2",
        sm: "redshield-h-9 redshield-rounded-md redshield-px-3",
        lg: "redshield-h-11 redshield-rounded-md redshield-px-8",
        icon: "redshield-h-10 redshield-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }