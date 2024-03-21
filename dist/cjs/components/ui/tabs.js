"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tabs_exports = {};
__export(tabs_exports, {
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger
});
module.exports = __toCommonJS(tabs_exports);
var React = __toESM(require("react"));
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_utils = require("../../lib/utils");
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  TabsPrimitive.List,
  {
    ref,
    className: (0, import_utils.cn)(
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
    className: (0, import_utils.cn)(
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
    className: (0, import_utils.cn)(
      "redshield-mt-2 redshield-ring-offset-background redshield-focus-visible:outline-none redshield-focus-visible:ring-2 redshield-focus-visible:ring-ring redshield-focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
});
//# sourceMappingURL=tabs.js.map