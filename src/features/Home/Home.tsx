import illustrationImage from "../../assets/images/illustration.svg";
import googleIconImage from "../../assets/images/google-icon.svg";
import General from "../../shared/components/General";
import { useAuth } from "../../shared/hooks/useAuth";

export function Home() {
  const { logInWithGoogle } = useAuth();

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
        <form className="w-full sm:w-1/2">
          <input
            className="w-full bg-purple-100  py-2 px-4 placeholder-gray-500 rounded-md mb-3 placeholder-purple-400 "
            type="text"
            placeholder="Digita el código de la sala"
          />
          <General.Button type="submit">Entrar a la sala</General.Button>
        </form>
      </main>
    </div>
  );
}
