import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import General from "../../shared/components/General";
import { useAuth } from "../../shared/hooks/useAuth";
import { toast } from "react-hot-toast";
import { database } from "../../services/firebaseService";
import useRoom from "../../shared/hooks/useRoom";
import QuestionEntity from "../../models/entity/QuestionEntity";
import QuestionFirebase from "../../models/firebase/QuestionFirebase";
import DataDisplay from "../../shared/components/DataDisplay";

export default function Room() {
  const { userDetails, logInWithGoogle } = useAuth();

  const { roomId } = useRoom();
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<QuestionEntity[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: QuestionFirebase = databaseRoom.questions ?? {};

      const parsedQuestions: QuestionEntity[] = Object.entries(
        firebaseQuestions
      ).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isAnswered: value.isAnswered,
          isHighlighted: value.isHighlighted,
        };
      });
      console.log(parsedQuestions);
      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    });
  }, [roomId]);

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
      const question: QuestionEntity = {
        content: newQuestion,
        author: {
          id: userDetails.id,
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

  const renderNumberOfQuestions =
    questions.length === 1
      ? `${questions.length} pregunta`
      : `${questions.length} preguntas`;

  const isSendQuestionButtonDisabled: boolean = !newQuestion.length;

  return (
    <>
      <Header />
      <main className="flex flex-col mt-16  mx-8 sm:mx-60">
        <div className="flex items-center mb-4">
          <h1 className="text-gray-700 font-bold text-3xl  mr-8">
            Sala {title}
          </h1>
          {questions.length ? (
            <span className="bg-pink-500 text-pink-100 rounded-full py-2 px-3 text-xs">
              {renderNumberOfQuestions}
            </span>
          ) : null}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
            className="w-full bg-pink-50 placeholder-pink-300 px-2 py-3 rounded-md "
            placeholder="Haz tu pregunta"
          />

          <div className="flex justify-between items-center">
            {!userDetails.id ? (
              <p className="sm:w-3/4 w-full text-sm text-gray-500">
                Para enviar una pregunta,{" "}
                <button
                  onClick={logInWithGoogle}
                  type="button"
                  className="text-blue-500 underline"
                >
                  haz login
                </button>
              </p>
            ) : (
              <DataDisplay.User user={userDetails} />
            )}
            <div className="flex-1">
              <General.Button
                type="submit"
                disabled={!userDetails || isSendQuestionButtonDisabled}
              >
                Enviar Pregunta
              </General.Button>
            </div>
          </div>
        </form>
        <div className="mt-16">
          <h3 className="font-bold text-2xl text-brand mb-4">Preguntas</h3>
          {questions.map((question) => (
            <section
              key={question.content}
              className="shadow-lg rounded-md w-full mt-4 p-4"
            >
              <p className="text-sm">{question.content}</p>
              <div className="flex justify-between mt-4">
                <DataDisplay.User user={question.author} />
                <p>45</p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
