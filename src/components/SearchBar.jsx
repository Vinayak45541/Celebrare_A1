const SearchBar = ({ searchTerm, setSearchTerm }) => {

  return (

    <div className="p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search events by name..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }

          className=" w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition "
        />
      </div>
    </div>

  );

};

export default SearchBar;