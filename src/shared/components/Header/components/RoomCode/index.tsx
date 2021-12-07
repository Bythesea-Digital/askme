import React from "react";
import { ReactComponent as CopyIcon } from "../../../../../assets/icons/clipboard.svg";
import { toast } from "react-hot-toast";
type RoomCodeProps = {
  code: string;
};

export default function RoomCode({ code }: RoomCodeProps) {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("¡Copiado!");
  };

  return (
    <button
      onClick={copyRoomCodeToClipboard}
      className="border border-pink-600 rounded-md text-xs flex items-center"
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
