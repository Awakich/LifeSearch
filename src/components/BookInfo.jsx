import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const BookInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const BackHandler = () => {
    navigate(-1);
  };

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(`https://api.itbook.store/1.0/books/${id}`).then(
        (res) => res.json()
      );
      setInfo(res);
    };
    getInfo();
  }, [id]);

  // authors, desc, pages, price, rating, title, year, url

  return (
    <div className="flex space-x-4">
      <ArrowUturnLeftIcon className="h-36 hover:cursor-pointer hover:opacity-80" onClick={BackHandler} />
      <div className="bg-black text-white flex px-12 py-32 items-center justify-between space-x-20">
        <p className="font-light text-9xl">{info.title}</p>
        <div>
          <p className="text-3xl font-light border-2 border-white rounded-md py-7 px-5">
            {info.desc}
          </p>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-5 flex-col">
              <p className="text-xl space-x-3">
                <span className="font-semibold">Author</span>
                <span className="font-light">{info.authors}</span>
              </p>

              <p className="text-xl space-x-3">
                <span className="font-semibold">Pages</span>
                <span className="font-light">{info.pages}</span>
              </p>

              <p className="text-xl space-x-3">
                <span className="font-semibold">Price</span>
                <span className="font-light">{info.price}</span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-xl space-x-3">
                <span className="font-semibold">Year Publishing</span>
                <span className="font-light">{info.year}</span>
              </p>

              <a
                href={info.url}
                target="_blank"
                rel="noreferrer"
                className="italic hover:font-semibold"
              >
                {info.url}
              </a>
            </div>

            <div className="flex flex-col space-y-5">
              <p className="font-semibold text-xl">Raiting</p>
              <p className="font-black text-6xl border-2 border-white rounded-full px-4 py-1 flex items-center justify-center">
                {info.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
