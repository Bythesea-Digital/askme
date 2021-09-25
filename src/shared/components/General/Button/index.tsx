import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full py-2 flex items-center font-medium justify-center text-pink-50 rounded-md bg-pink-500 disabled:bg-pink-200 disabled:text-pink-300 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
}
