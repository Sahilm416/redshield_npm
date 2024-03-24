import { Options } from "tsup";

const common: Options = {
  entry: ["./src/**/*.{ts,tsx,js,jsx}", "./src/styles/tailwind.css"],
  bundle: false,
  clean: true,
  minify: false,
  sourcemap: true,
  legacyOutput: true,
};

const esm: Options = {
  ...common,
  format: 'esm',
};


export default [esm];