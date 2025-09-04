
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantInfo from "./swiggyRecipeInfo";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/swiggy");
        const json = await res.json();

        const cardData = json?.data?.cards.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
        );

        const restaurants =
          cardData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const match = restaurants.find((r) => r.info.id === id);

        if (match) setRestaurant(match.info);

        const menuRes = await fetch(`http://localhost:5000/api/menu/${id}`);
        const menuJson = await menuRes.json();

        const menuCards =
          menuJson?.data?.cards?.find((c) => c.groupedCard)?.groupedCard
            ?.cardGroupMap?.REGULAR?.cards || [];

        const categories = menuCards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        setMenuItems(categories);
      } catch (err) {
        console.error("❌ Failed to load restaurant detail or menu:", err);
      }
    };

    fetchDetails();
  }, [id]);

  if (!restaurant)
    return <h2 className="p-4">Loading restaurant details...</h2>;

  return (
    <RestaurantInfo restaurant={restaurant} menuItems={menuItems} />
  );
};

export default RestaurantDetails;
