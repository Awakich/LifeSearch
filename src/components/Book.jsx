const Book = ({description, title, price }) => {
  return (
    <div className="">
      <div className="mb-5">
        <h2 className="md:text-2xl text-3xl font-mono mb-5">{title}</h2>
        <p className="text-base font-light md:text-base">{description}</p>
      </div>

      <div className="flex items-center justify-end">
        <p className="font-semibold text-xl md:text-xl">{price}</p>
      </div>
    </div>
  );
};

export default Book;
