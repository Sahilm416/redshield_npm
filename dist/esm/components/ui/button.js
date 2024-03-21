import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const buttonVariants = cva(
  "redshield-inline-flex redshield-items-center redshield-justify-center redshield-whitespace-nowrap redshield-rounded-md redshield-text-sm redshield-font-medium redshield-ring-offset-background redshield-transition-colors focus-visible:redshield-outline-none focus-visible:redshield-ring-2 focus-visible:redshield-ring-ring focus-visible:redshield-ring-offset-2 disabled:redshield-pointer-events-none disabled:redshield-opacity-50",
  {
    variants: {
      variant: {
        default: "redshield-bg-primary redshield-text-primary-foreground hover:redshield-bg-primary/90",
        destructive: "redshield-bg-destructive redshield-text-destructive-foreground hover:redshield-bg-destructive/90",
        outline: "redshield-border redshield-border-input redshield-bg-background hover:redshield-bg-accent hover:redshield-text-accent-foreground",
        secondary: "redshield-bg-secondary redshield-text-secondary-foreground hover:redshield-bg-secondary/80",
        ghost: "hover:redshield-bg-accent hover:redshield-text-accent-foreground",
        link: "redshield-text-primary redshield-underline-offset-4 hover:redshield-underline"
      },
      size: {
        default: "redshield-h-10 redshield-px-4 redshield-py-2",
        sm: "redshield-h-9 redshield-rounded-md redshield-px-3",
        lg: "redshield-h-11 redshield-rounded-md redshield-px-8",
        icon: "redshield-h-10 redshield-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
export {
  Button,
  buttonVariants
};
//# sourceMappingURL=button.js.map