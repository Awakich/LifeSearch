import { Routes, Route } from "react-router-dom";
import Landing from "../src/components/Landing";
import BookInfo from "./components/BookInfo";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const GetBooks = async () => {
      const res = await fetch("https://api.itbook.store/1.0/new").then((res) =>
        res.json()
      );
      setBooks(res.books);
    };
    GetBooks();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing books={books} />} />
        <Route path="/:id" element={<BookInfo />} />
      </Routes>
    </div>
  );
}

export default App;
