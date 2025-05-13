/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './app/app.css',
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  tailwindAttributes: ['myClassList'],
};

export default config;
