import illustrationImage from "../../assets/images/illustration.svg";
import General from "../../shared/components/General";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../shared/hooks/useAuth";
import { FormEvent, useState } from "react";
import HomeAside from "../../shared/components/HomeAside";
import DataEntry from "../../shared/components/DataEntry";
import { database } from "../../services/firebaseService";

export function NewRoom() {
  const { userDetails } = useAuth();
  const history = useHistory();
  const firstName = userDetails?.name?.split(" ")[0];

  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === "") return;

    console.log(newRoom);
    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: userDetails.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }
  return (
    <div className="mx-auto h-screen sm:flex content-center ">
      <HomeAside />
      <main className="flex flex-col flex-1 justify-center p-8 items-center ">
        <h2 className="mb-3 font-bold text-2xl text-gray-700">
          {firstName}, crea tu primera sala
        </h2>
        <form className="w-full sm:w-1/2" onSubmit={handleCreateRoom}>
          <DataEntry.Input
            onChange={(e) => setNewRoom(e.target.value)}
            type="text"
            placeholder="Nombre de la sala"
          />
          <General.Button type="submit">Crear sala</General.Button>
        </form>
        <div className="my-4" />
        <p className="text-sm text-gray-500">
          Quieres entrar en una sala que ya existe?{" "}
          <Link to="/" className="text-blue-500 font-bold">
            Clic aqui
          </Link>
        </p>
      </main>
    </div>
  );
}
