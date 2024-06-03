import { DeleteOutlined } from "@ant-design/icons";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";

const Cards: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cards);
  const { deleteCard } = useActions();
  const navigate = useNavigate();

  const cardsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  useEffect(() => {
    if (!currentCards.length) {
      setCurrentPage(1);
    }
  }, [currentCards]);

  // function switchPage(pageNumber: number) {
  //   setCurrentPage(pageNumber)
  // }

  return (
    <>
      <div className="cards">
        {currentCards?.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-img" onClick={() => deleteCard(card)}>
              <img src={card.image} alt="none" />
              <DeleteOutlined className="icon" />
            </div>
            <div className="card-h3">
              <h3>{card.name}</h3>
              <h3>{card.price} &#8381;</h3>
            </div>
            <h5>{card.description}</h5>
          </div>
        ))}

        {!cards.length && (
          <p className="cards-navigate-p" onClick={() => navigate("/addCard")}>
            Добавьте первую карточку
          </p>
        )}
      </div>
      <Pagination
        cards={cards}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Cards;
