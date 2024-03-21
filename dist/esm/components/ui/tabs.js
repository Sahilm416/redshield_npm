import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "redshield-inline-flex redshield-h-10 redshield-items-center redshield-justify-center redshield-rounded-md redshield-bg-muted redshield-p-1 redshield-text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "redshield-inline-flex redshield-items-center redshield-justify-center redshield-whitespace-nowrap redshield-rounded-sm redshield-px-3 redshield-py-1.5 redshield-text-sm redshield-font-medium redshield-ring-offset-background redshield-transition-all redshield-focus-visible:outline-none redshield-focus-visible:ring-2 redshield-focus-visible:ring-ring redshield-focus-visible:ring-offset-2 redshield-disabled:pointer-events-none redshield-disabled:opacity-50 redshield-data-[state=active]:bg-background redshield-data-[state=active]:text-foreground redshield-data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "redshield-mt-2 redshield-ring-offset-background redshield-focus-visible:outline-none redshield-focus-visible:ring-2 redshield-focus-visible:ring-ring redshield-focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
};
//# sourceMappingURL=tabs.js.map