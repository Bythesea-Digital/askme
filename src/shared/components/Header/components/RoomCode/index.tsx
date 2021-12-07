import React from "react";
import { ReactComponent as CopyIcon } from "../../../../../assets/icons/clipboard.svg";
type RoomCodeProps = {
  code: string;
};

export default function RoomCode({ code }: RoomCodeProps) {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button
      onClick={copyRoomCodeToClipboard}
      className="border border-pink-600 rounded-md text-sm flex items-center"
    >
      <div className="border-r-2 bg-pink-600 p-2 rounded-tl-sm rounded-bl-sm">
        <CopyIcon className="w-5 fill-current text-pink-50" />
      </div>
      <span className="text-blue-900 ml-2 mr-2 w-50 font-medium">
        Sala #{code}
      </span>
    </button>
  );
}
