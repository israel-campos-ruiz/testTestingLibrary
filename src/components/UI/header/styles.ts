import { classnames } from "tailwindcss-classnames";

export const navWrap: string = classnames(
  "border-gray-200",
  "px-2",
  "sm:px-4",
  "py-2.5",
  "bg-gray-800"
);
export const nav: string = classnames(
  "container",
  "flex",
  "flex-wrap",
  "justify-between",
  "items-center",
  "mx-auto"
);
const navLink = classnames(
  "block",
  "py-2",
  "pr-4",
  "pl-3",
  "text-white",
  "rounded",
  "md:bg-transparent",
  "md:p-0"
);

const navActive = classnames("md:text-blue-700");

export const navLinkComposed = (isActive: boolean): string =>
  classnames(navLink, {
    [navActive]: isActive,
  });

export const logo: string = classnames(
  "self-center",
  "text-lg",
  "font-semibold",
  "whitespace-nowrap",
  "text-white"
);

export const btnNav: string = classnames(
  "inline-flex",
  "items-center",
  "p-2",
  "ml-3",
  "text-sm",
  "text-gray-500",
  "rounded-lg",
  "md:hidden",
  "hover:bg-gray-100",
  "focus:outline-none",
  "focus:ring-2",
  "text-gray-400",
  "hover:bg-gray-700"
);

export const btnHiden: string = classnames(
  "hidden",
  "w-full",
  "md:block",
  "md:w-auto"
);

export const navUl: string = classnames(
  "flex",
  "flex-col",
  "mt-4",
  "md:flex-row",
  "md:space-x-8",
  "md:mt-0",
  "md:text-sm",
  "md:font-medium"
);
