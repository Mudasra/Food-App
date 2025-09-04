import { useState, useEffect } from "react";

const useFetchRecipes = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/swiggy");
        const json = await res.json();
        console.log("🍽️ Swiggy data from proxy:", json);

        const cardData = json?.data?.cards?.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
        );

        const restaurants = cardData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const formatted = restaurants.map((r) => ({
          id: r.info.id,
          name: r.info.name,
          image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${r.info.cloudinaryImageId}`,
          rating: r.info.avgRating,
          costForTwo: r.info.costForTwo,
          cuisines: r.info.cuisines.join(", "),
          locality: r.info.locality,
          area: r.info.areaName,
        }));

        setAllRestaurants(formatted);
        setLoading(false);
      } catch (err) {
        console.error("❌ Failed to fetch from proxy:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allRestaurants, loading };
};

export default useFetchRecipes;
