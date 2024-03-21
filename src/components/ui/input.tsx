import * as React from "react"

import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "redshield-flex redshield-h-10 redshield-w-full redshield-rounded-md redshield-border redshield-border-input redshield-bg-background redshield-px-3 redshield-py-2 redshield-text-sm redshield-ring-offset-background redshield-file:border-0 redshield-file:bg-transparent redshield-file:text-sm redshield-file:font-medium redshield-placeholder:text-muted-foreground redshield-focus-visible:outline-none redshield-focus-visible:ring-2 redshield-focus-visible:ring-ring redshield-focus-visible:ring-offset-2 redshield-disabled:cursor-not-allowed redshield-disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }