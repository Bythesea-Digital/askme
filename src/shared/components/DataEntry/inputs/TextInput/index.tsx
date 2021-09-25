import React from "react";

export default function TextInput({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full bg-pink-100 py-2 px-4 placeholder-gray-500 rounded-md mb-3 placeholder-pink-600 "
      {...props}
    />
  );
}
