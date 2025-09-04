// // by api call

import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "../utils/OfflineGame"; 



const Body = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const onlineStatus = useOnlineStatus();
if (onlineStatus === false) return <OfflineGame />


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
      );
      const json = await response.json();
      console.log("Full JSON:", json);

      const cardList = json?.data?.cards || [];
      let restaurantArray = [];

      for (const cardObj of cardList) {
        const arr =
          cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(arr)) {
          restaurantArray = arr;
          break;
        }
      }

      console.log("Found restaurant array of length:", restaurantArray.length);

      const formatted = restaurantArray.map((res) => ({
        id: res.info.id,
        name: res.info.name,
        image: `https://media-assets.swiggy.com/swiggy/image/upload/${res.info.cloudinaryImageId}`,
        rating: res.info.avgRating,
        cuisine: res.info.cuisines.join(", "),
      }));

      setRestaurants(formatted);
      setAllRestaurants(formatted);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  

const handleFilter = (filterParam) => {
  if (filterParam === "topRated") {
    const filtered = allRestaurants.filter((r) => parseFloat(r.rating) > 4.2);
    setRestaurants(filtered);
  } else {
    const filtered = allRestaurants.filter((r) =>
      r.name.toLowerCase().includes(filterParam.toLowerCase())
    );
    setRestaurants(filtered);
  }
};





  return (
    <div className="body">
      <div className="search">
        <SearchBar onFilter={handleFilter} />
      </div>
      {/* conditional rendering - if you have a condition and you render according to the condition   */}
      <div className="res-container">
        {restaurants.length === 0 ? (
          // <p>Loading...</p>
          <ShimmerUI />
        ) : (
          restaurants.map((r) => (
            <RestaurantCard
              key={r.id}
              name={r.name}
              image={r.image}
              rating={r.rating}
              cuisine={r.cuisine}
            />
          ))
        )}
      </div>

    </div>
  );
};

export default Body;


