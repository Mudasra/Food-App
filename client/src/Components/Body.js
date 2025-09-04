import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect , useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useFetchRecipes from "../utils/useFetch";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "../utils/OfflineGame";
import UserContext from "../utils/UserContext";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const { allRestaurants, loading } = useFetchRecipes();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (!loading) {
      setRestaurants(allRestaurants);
    }
  }, [allRestaurants, loading]);

  if (onlineStatus === false) return <OfflineGame />;
  if (loading) return <ShimmerUI />;


  const handleFilter = (filterParam) => {
    if (filterParam === "topRated") {
      const filtered = allRestaurants.filter((r) => parseFloat(r.rating) > 4.3);
      setRestaurants(filtered);
    } else {
      const filtered = allRestaurants.filter((r) =>
        r.name.toLowerCase().includes(filterParam.toLowerCase())
      );
      setRestaurants(filtered);
    }
  };

  // const { loggedInUser , setUserName } = useContext(UserContext);

  return (
    <div className="body">

      <div className="search">
        <SearchBar onFilter={handleFilter} />
      </div>


      <div className="res-container">
        {restaurants.map((r) => (
  <Link key={r.id} to={`/restaurant/${r.id}`}>
    <RestaurantCard
      name={r.name}
      image={r.image}
      rating={r.rating}
      costForTwo={r.costForTwo}
      cuisines={r.cuisines}
      locality={r.locality}
      area={r.area}
    />
  </Link>
))}
      </div>
      
    </div>
  );
};

export default Body;













