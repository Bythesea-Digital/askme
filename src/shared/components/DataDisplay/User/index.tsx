import React from "react";
import UserEntity from "../../../../models/entity/UserEntity";

type UserProps = {
  user: UserEntity;
};

export default function User({ user }: UserProps) {
  return (
    <div className="flex items-center flex-1">
      <img src={user.avatar} alt={user.name} className="w-6 rounded-full" />
      <p className="mb-0 text-sm ml-2 font-medium text-gray-600">{user.name}</p>
    </div>
  );
}
