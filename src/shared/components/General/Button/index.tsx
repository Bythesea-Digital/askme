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
      className="w-full py-2 flex items-center font-medium justify-center text-purple-50 rounded-md bg-purple-600"
      {...props}
    >
      {children}
    </button>
  );
}
