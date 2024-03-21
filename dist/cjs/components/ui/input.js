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
var input_exports = {};
__export(input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(input_exports);
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      "input",
      {
        type,
        className: (0, import_utils.cn)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
//# sourceMappingURL=input.js.map