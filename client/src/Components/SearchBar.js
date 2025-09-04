import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

  // whenever state variable updates, react triggers a reconciliation cycle (re-render its component)

  // react is rerendering the whole component but is just updating the part of the component that has changed


const SearchBar = ({ onFilter }) => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");

  console.log("SearchBar rendered");

  return (
    <div className="Search-container mt-[8.5%] gap-4 flex flex-col items-center m-6">
      
      <div className="flex items-center gap-2 mt-4">
        <label className="font-bold text-[#ff2b85]">User Name:</label>
        <input
          type="text"
          className="search-input"
          placeholder="User Name"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>


      <div className="flex gap-4">
        <input
          type="text"
          className="search-input"
          placeholder="Search the food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-button"
          onClick={() => onFilter(searchText)}
        >
          Search
        </button>

        <button
          className="search-button"
          onClick={() => onFilter("topRated")}
        >
          Top Restaurants
        </button>
      </div>
    </div>
  );
};

export default SearchBar;


