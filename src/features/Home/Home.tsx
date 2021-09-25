import { FormEvent, useState } from "react";
import googleIconImage from "../../assets/images/google-icon.svg";
import meetAndAnswerLogo from "../../assets/branding/meetanswer-logo-light.svg";
import General from "../../shared/components/General";
import { useAuth } from "../../shared/hooks/useAuth";
import HomeAside from "../../shared/components/HomeAside";
import DataEntry from "../../shared/components/DataEntry";
import { database } from "../../services/firebaseService";
import { useHistory } from "react-router-dom";

export function Home() {
  const { logInWithGoogle } = useAuth();
  const history = useHistory();
  const [roomCode, setRoomCode] = useState("");

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === "") return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("La sala no existe");
      return;
    }

    history.push(`/rooms/${roomRef.key}`);
  }

  return (
    <div className="mx-auto h-screen sm:flex content-center ">
      <HomeAside />
      <main className="flex flex-col flex-1 justify-center p-8 items-center ">
        <img
          className="w-full sm:w-1/2 mb-10"
          src={meetAndAnswerLogo}
          alt="Logo de Meet and Answer"
        />
        <button
          onClick={logInWithGoogle}
          type="button"
          aria-label="Crea tu sala con Google"
          className="w-full sm:w-1/2 py-2 flex items-center font-medium justify-center rounded-md bg-red-500 hover:bg-red-600 text-white"
        >
          <img
            className="pr-2"
            width={24}
            src={googleIconImage}
            alt="Logo de Google"
          />{" "}
          Crea tu sala con Google
        </button>
        <div className="my-4 text-base  text-gray-400">o entra en una sala</div>
        <form onSubmit={handleJoinRoom} className="w-full sm:w-1/2">
          <DataEntry.Input
            type="text"
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Digita el código de la sala"
          />
          <General.Button type="submit">Entrar a la sala</General.Button>
        </form>
      </main>
    </div>
  );
}
