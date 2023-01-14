import Header from "../components/Header";
import Advantage from "../components/Advantage";
import Books from "../components/Books";
import Footer from "../components/Footer";
import SearchField from "../components/SearchField";
import { useState } from "react";

const Landing = ({ books }) => {
  const [userInput, setUserInput] = useState("");

  const ChangeValue = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <Header />
      <Advantage />
      <SearchField onChanging={ChangeValue} />
      <Books books={books} userInput={userInput} />
      <Footer />
    </div>
  );
};

export default Landing;
