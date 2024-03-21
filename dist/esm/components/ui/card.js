import * as React from "react";
import { cn } from "../../lib/utils";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "div",
  {
    ref,
    className: cn(
      "redshield-rounded-lg redshield-border redshield-bg-card redshield-text-card-foreground redshield-shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "div",
  {
    ref,
    className: cn("redshield-flex redshield-flex-col redshield-space-y-1.5 redshield-p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "h3",
  {
    ref,
    className: cn(
      "redshield-text-2xl redshield-font-semibold redshield-leading-none redshield-tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "p",
  {
    ref,
    className: cn("redshield-text-sm redshield-text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement("div", { ref, className: cn("redshield-p-6 redshield-pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "div",
  {
    ref,
    className: cn("redshield-flex redshield-items-center redshield-p-6 redshield-pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};
//# sourceMappingURL=card.js.map