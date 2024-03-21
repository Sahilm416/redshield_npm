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
var card_exports = {};
__export(card_exports, {
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle
});
module.exports = __toCommonJS(card_exports);
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "div",
  {
    ref,
    className: (0, import_utils.cn)(
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
    className: (0, import_utils.cn)("redshield-flex redshield-flex-col redshield-space-y-1.5 redshield-p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "h3",
  {
    ref,
    className: (0, import_utils.cn)(
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
    className: (0, import_utils.cn)("redshield-text-sm redshield-text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement("div", { ref, className: (0, import_utils.cn)("redshield-p-6 redshield-pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("redshield-flex redshield-items-center redshield-p-6 redshield-pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
});
//# sourceMappingURL=card.js.map