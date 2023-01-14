const SearchField = ({ onChanging }) => {
  return (
    <div className="flex mb-12">
      <input
        placeholder="search book"
        className="hover:outline-none border-[1px] border-black/50 w-full rounded-md text-4xl font-light pl-10 py-5"
        onChange={onChanging}
      />
    </div>
  );
};

export default SearchField;
