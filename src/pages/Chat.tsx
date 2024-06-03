import { CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Message } from "../models/models";

const Chat: React.FC = () => {
  const LS_CHAT_KEY = "localeStorageKeyOmegaChat";
  const arr = localStorage.getItem(LS_CHAT_KEY)

  const [chat, setChat] = useState<Message[]>(arr ? JSON.parse(arr) : [{ message: "Привет!", user: false }]);
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([
    { message: "Как дела?", user: false },
    { message: "Сколько тебе лет?", user: false },
    { message: "Хочешь полететь на море?", user: false },
    { message: "Может на Кубу?", user: false },
    { message: "Будем загорать?", user: false },
    { message: "Сколько евро берешь с собой?", user: false },
  ]);

  function chated() {
    if (answer.length == 0) {
      return;
    } else if (questions.length == 0) {
      setChat((prevArray2) => [...prevArray2, { message: answer, user: true }]);
      localStorage.setItem(LS_CHAT_KEY, JSON.stringify(chat));
    } else {
      const elementToMove = questions[0];
      setQuestions((prevArray1) => prevArray1.filter((_, i) => i !== 0));
      setChat((prevArray2) => [
        ...prevArray2,
        { message: answer, user: true },
        elementToMove,
      ]);
      localStorage.setItem(LS_CHAT_KEY, JSON.stringify(chat));
    }
    setAnswer("");
  }

  return (
    <>
      <div className="chat">
        {chat.map((el, i) => (
          <p key={i} className={el.user ? "user" : ""}>
            {el?.message}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Напишите сообщение..."
        />
        <CaretRightOutlined className="btn" onClick={chated} />
      </div>
    </>
  );
};

export default Chat;
