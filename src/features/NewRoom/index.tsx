import illustrationImage from "../../assets/images/illustration.svg";
import General from "../../shared/components/General";
import { Link } from "react-router-dom";

export function NewRoom() {
  return (
    <div className="mx-auto h-screen sm:flex content-center ">
      <aside className=" flex-1 mx-auto bg-purple-600 flex flex-col p-8 justify-center">
        <img
          className="w-3/5"
          src={illustrationImage}
          alt="Ilustración simbolizando preguntas y respuestas"
        />
        <h1 className="text-3xl font-bold text-purple-50">
          Crea salas de Q&A en vivo
        </h1>
        <p className="text-purple-300 font-medium">
          Resuelve las dudas de tu audiencia en tiempo real.
        </p>
      </aside>
      <main className="flex flex-col flex-1 justify-center p-8 items-center ">
        <h2 className="mb-3 font-bold text-3xl text-gray-700">
          Crear una sala
        </h2>
        <form className="w-full sm:w-1/2">
          <input
            className="w-full bg-purple-100 py-2 px-4 placeholder-gray-500 rounded-md mb-3 placeholder-purple-400 "
            type="text"
            placeholder="Nombre de la sala"
          />
          <General.Button type="submit">Crear sala</General.Button>
        </form>
        <div className="my-4" />
        <p className="text-sm text-gray-500">
          Quieres entrar en una sala que ya existe?{" "}
          <Link to="/" className="text-green-500 font-bold">
            Clic aqui
          </Link>
        </p>
      </main>
    </div>
  );
}
