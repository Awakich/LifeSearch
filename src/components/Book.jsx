const Book = ({ id, description, title, price }) => {
  const rating = id.split("").map((i) => +i);
  const rating_summ = rating.reduce((acc, i) => (acc += i), 0);
  const rate = (rating_summ / rating.length - 0.4).toFixed(2);
  return (
    <div className="w-full lg:w-1/4 md:w-1/3 bg-[#222222] mb-4 md:py-10 py-12 px-8 rounded-md text-white hover:cursor-pointer hover:bg-[#222222]/95">
      <div className="mb-5">
        <h2 className="md:text-2xl text-3xl font-mono mb-5">{title}</h2>
        <p className="text-base font-light md:text-base">{description}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl md:text-xl">{price}</p>
        <p className="font-semibold text-base md:text-sm">{`raiting: ${rate}`}</p>
      </div>
    </div>
  );
};

export default Book;
