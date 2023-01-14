// title, subtitle, isbn13, image, price
import { Link } from "react-router-dom";
import Book from "../components/Book";

const Books = ({ books, userInput }) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-center mb-5">
      {books
        .filter((item) => {
          return userInput.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(userInput);
        })
        .map(({ subtitle, title, price, isbn13 }) => (
          <Link
            key={isbn13}
            to={`/${isbn13}`}
            className="w-full lg:w-1/4 md:w-1/3 bg-[#222222] mb-4 md:py-10 py-12 px-8 rounded-md text-white hover:cursor-pointer hover:bg-[#222222]/95"
          >
            <Book
              description={subtitle}
              title={title}
              price={price}
              id={isbn13}
              key={isbn13}
            />
          </Link>
        ))}
    </div>
  );
};

export default Books;
