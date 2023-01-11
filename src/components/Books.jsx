// title, subtitle, isbn13, image, price
import Book from "../components/Book";

const Books = ({ books }) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-center">
      {books.map(({ subtitle, title, price, isbn13 }) => (
        <Book
          description={subtitle}
          title={title}
          price={price}
          id={isbn13}
          key={isbn13}
        />
      ))}
    </div>
  );
};

export default Books;
