import { useParams } from "react-router-dom";

type RoomParams = {
  id: string;
};

export default function useRoom() {
  const params = useParams<RoomParams>();

  const roomId = params.id;
  return { roomId };
}
