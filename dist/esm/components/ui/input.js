import * as React from "react";
import { cn } from "../../lib/utils";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      "input",
      {
        type,
        className: cn(
          "redshield-flex redshield-h-10 redshield-w-full redshield-rounded-md redshield-border redshield-border-input redshield-bg-background redshield-px-3 redshield-py-2 redshield-text-sm redshield-ring-offset-background file:redshield-border-0 file:redshield-bg-transparent file:redshield-text-sm file:redshield-font-medium placeholder:redshield-text-muted-foreground focus-visible:redshield-outline-none focus-visible:redshield-ring-2 focus-visible:redshield-ring-ring focus-visible:redshield-ring-offset-2 disabled:redshield-cursor-not-allowed disabled:redshield-opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
export {
  Input
};
//# sourceMappingURL=input.js.map