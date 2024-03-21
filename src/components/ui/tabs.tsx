"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "redshield-inline-flex redshield-h-10 redshield-items-center redshield-justify-center redshield-rounded-md redshield-bg-muted redshield-p-1 redshield-text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "redshield-inline-flex redshield-items-center redshield-justify-center redshield-whitespace-nowrap redshield-rounded-sm redshield-px-3 redshield-py-1.5 redshield-text-sm redshield-font-medium redshield-ring-offset-background redshield-transition-all focus-visible:redshield-outline-none focus-visible:redshield-ring-2 focus-visible:redshield-ring-ring focus-visible:redshield-ring-offset-2 disabled:redshield-pointer-events-none disabled:redshield-opacity-50 data-[state=active]:redshield-bg-background data-[state=active]:redshield-text-foreground data-[state=active]:redshield-shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "redshield-mt-2 redshield-ring-offset-background focus-visible:redshield-outline-none focus-visible:redshield-ring-2 focus-visible:redshield-ring-ring focus-visible:redshield-ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
