// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../hooks/redux";
import { MyFormData } from "../models/models";

type PaginationProps = {
  cards: MyFormData[];
  setCurrentPage(pageNumber: number): void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  cards,
  setCurrentPage,
  currentPage,
}) => {
  //   const navigate = useNavigate();
  // const { cards } = useAppSelector((state) => state.cards);

  const cardsPerPage = 4;

  const pageNumbers = [];
  for (let c = 1; c <= Math.ceil(cards.length / cardsPerPage); c++) {
    pageNumbers.push(c);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <div
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage == page ? "active" : ""}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
