import React from "react";
import Header from "../../shared/components/Header";
import General from "../../shared/components/General";

export default function Room() {
  return (
    <>
      <Header roomId="45" />
      <main className="flex flex-col mt-16 h-screen mx-8 sm:mx-60">
        <div className="flex items-center mb-4">
          <h1 className="text-gray-700 font-bold text-3xl  mr-8">Sala</h1>
          <span className="bg-pink-500 text-pink-100 rounded-full py-2 px-3 text-xs">
            4 preguntas
          </span>
        </div>

        <form>
          <textarea
            className="w-full bg-pink-50 placeholder-pink-300 px-2 py-3 rounded-md"
            placeholder="Haz tu pregunta"
          />

          <div className="flex justify-between items-center">
            <p className="sm:w-3/4 w-full text-sm text-gray-500">
              Para enviar una pregunta,{" "}
              <button type="button" className="text-blue-500 underline">
                haz login
              </button>
            </p>
            <General.Button type="submit" disabled>
              Enviar Respuesta
            </General.Button>
          </div>
        </form>
      </main>
    </>
  );
}
