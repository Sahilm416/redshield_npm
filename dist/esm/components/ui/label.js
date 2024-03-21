import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const labelVariants = cva(
  "redshield-text-sm redshield-font-medium redshield-leading-none redshield-peer-disabled:cursor-not-allowed redshield-peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
export {
  Label
};
//# sourceMappingURL=label.js.map