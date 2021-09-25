import React from "react";
import illustrationImage from "../../../assets/images/illustration.svg";

type HomeAsideProps = {};

export default function HomeAside({}: HomeAsideProps) {
  return (
    <aside className=" flex-1 mx-auto bg-brand flex flex-col p-8 justify-center">
      <img
        className="w-3/5"
        src={illustrationImage}
        alt="Ilustración simbolizando preguntas y respuestas"
      />
      <h1 className="text-3xl font-bold text-blue-50">
        Crea salas de Q&A en vivo
      </h1>
      <p className="text-blue-300 font-medium">
        Resuelve las dudas de tu audiencia en tiempo real.
      </p>
    </aside>
  );
}
