import React from "react";
import meetNAnswerLogo from "../../../assets/branding/meetanswer-logo-light.svg";
import RoomCode from "./components/RoomCode";
import { useParams } from "react-router-dom";
type HeaderProps = {
  roomId: string;
};

type RoomParams = {
  id: string;
};

export default function Header({ roomId }: HeaderProps) {
  const params = useParams<RoomParams>();
  return (
    <header className="flex justify-between items-center bg-blue-50 px-4 sm:px-32 py-4">
      <img
        className="w-1/2 sm:w-1/5"
        src={meetNAnswerLogo}
        alt="Logo de Meet and Answer"
      />
      <div className="flex justify-between">
        <RoomCode code={params.id} />
      </div>
    </header>
  );
}
