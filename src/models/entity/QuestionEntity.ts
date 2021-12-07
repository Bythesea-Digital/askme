import UserEntity from "./UserEntity";

type QuestionEntity = {
  content: string;
  author: UserEntity;
  isHighlighted: boolean;
  isAnswered: boolean;
};

export default QuestionEntity;
