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
var button_exports = {};
__export(button_exports, {
  Button: () => Button,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(button_exports);
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const buttonVariants = (0, import_class_variance_authority.cva)(
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
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React.createElement(
      Comp,
      {
        className: (0, import_utils.cn)(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  buttonVariants
});
//# sourceMappingURL=button.js.map