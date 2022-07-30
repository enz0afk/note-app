import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="searchcontainer">
      <div className="search">
        <MdSearch className="search-icons" size="1.3em" />
        <input
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text"
          placeholder="Type to search!"
        />
      </div>
    </div>
  );
};

export default Search;
