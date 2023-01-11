import Header from "../src/components/Header";
import Advantage from "../src/components/Advantage";
import Books from "../src/components/Books";
import Footer from "../src/components/Footer";
import { useState } from "react";
import { useEffect } from "react";

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
      <Header />
      <Advantage />
      <Books books={books} />
      <Footer />
    </div>
  );
}

export default App;
