import React, { FormEvent, useState } from "react";
import Header from "../../shared/components/Header";
import General from "../../shared/components/General";
import { useAuth } from "../../shared/hooks/useAuth";
import { toast } from "react-hot-toast";
import { database } from "../../services/firebaseService";
import useRoom from "../../shared/hooks/useRoom";

export default function Room() {
  const { userDetails } = useAuth();
  const { roomId } = useRoom();
  const [newQuestion, setNewQuestion] = useState("");

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();
    toast.loading("Enviando", { id: "sendQuestion" });
    try {
      console.log(newQuestion);
      if (newQuestion.trim() === "") return;

      if (!userDetails) {
        toast.error("Debes iniciar sesión", { id: "sendQuestion" });
        return;
      }
      const question = {
        content: newQuestion,
        author: {
          name: userDetails.name,
          avatar: userDetails.avatar,
        },
        isHighlighted: false,
        isAnswered: false,
      };

      await database.ref(`rooms/${roomId}/questions`).push(question);

      toast.success("Enviada!", { id: "sendQuestion" });
      setNewQuestion("");
    } catch (e) {
      toast.error("Ouch!", { id: "sendQuestion" });
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col mt-16 h-screen mx-8 sm:mx-60">
        <div className="flex items-center mb-4">
          <h1 className="text-gray-700 font-bold text-3xl  mr-8">Sala</h1>
          <span className="bg-pink-500 text-pink-100 rounded-full py-2 px-3 text-xs">
            4 preguntas
          </span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
            className="w-full bg-pink-50 placeholder-pink-300 px-2 py-3 rounded-md "
            placeholder="Haz tu pregunta"
          />

          <div className="flex justify-between items-center">
            {!userDetails ? (
              <p className="sm:w-3/4 w-full text-sm text-gray-500">
                Para enviar una pregunta,{" "}
                <button type="button" className="text-blue-500 underline">
                  haz login
                </button>
              </p>
            ) : (
              <div className="flex items-center flex-1">
                <img
                  src={userDetails.avatar}
                  alt={userDetails.name}
                  className="w-8 rounded-full"
                />
                <p className="mb-0 text-sm ml-2 font-medium text-gray-700">
                  {userDetails.name}
                </p>
              </div>
            )}
            <div className="flex-1">
              <General.Button type="submit" disabled={!userDetails}>
                Enviar Pregunta
              </General.Button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
