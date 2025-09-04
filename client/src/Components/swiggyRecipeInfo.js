import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItems , removeItem} from "../utils/CartSlice"


const SwiggyRecipeInfo = ({
  restaurant,
  menuItems,
  showAddButton = true,
  showRemoveButton = false,
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };


  if (!restaurant) {
    return (
      <ul className="space-y-6 mt-6 max-w-3xl mx-auto p-4">
        {menuItems.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="border-b border-gray-300 pb-6 flex items-center gap-6"
          >
            <div className="w-9/12">
              <span className="pb-2 font-bold text-gray-900 text-lg block">
                {item.name}
              </span>
              <p className="font-semibold text-gray-800">
                ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
              </p>
              <p className="text-gray-600 text-sm">
                {item.description || "No description"}
              </p>
            </div>

            <div className="w-3/12 relative rounded-2xl shadow-md">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_700,h_400,c_fill/${item.imageId}`}
                alt={item.name}
              />

              {showRemoveButton && (
                <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 z-20">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-white cursor-pointer text-green-600 font-semibold border border-gray-300 px-6 py-1 rounded-lg shadow-md hover:bg-gray-100 transition"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }



  return (
    <div className="mt-[9%] p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <img
        className="w-full h-64 object-cover rounded"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_700,h_400,c_fill/${restaurant.cloudinaryImageId}`}
        alt={restaurant.name}
      />
      <h2 className="text-2xl font-bold mt-4">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.cuisines?.join(", ")}</p>
      <p className="text-gray-700 mt-2">
        {restaurant.locality}, {restaurant.areaName}
      </p>
      <p className="text-lg mt-2 font-medium">⭐ {restaurant.avgRating}</p>
      <p className="mt-1 text-sm">{restaurant.costForTwo}</p>

      <div className="mt-8">
        {menuItems.map((category, index) => (
          <div key={category.card.card.title} className="mb-6">
            <h4
              onClick={() => handleClick(index)}
              className="cursor-pointer text-lg font-bold bg-gray-100 p-4 rounded mb-2 justify-between flex"
            >
              {category.card.card.title} ({category.card.card.itemCards.length})
              <i
                className={`fa-solid fa-chevron-${
                  openIndex === index ? "up" : "down"
                }`}
              ></i>
            </h4>

            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <ul className="space-y-2 justify-around">
                {category.card.card.itemCards?.map((itemCard) => {
                  const item = itemCard.card.info;
                  return (
                    <li
                      key={item.id}
                      className="m-3 border-b border-gray-400 my-9 pb-6 flex items-center gap-6"
                    >
                      <div className="w-9/12">
                        <span className="pb-3 font-bold text-gray-900">
                          {item.name}
                        </span>
                        <p className="font-semibold py-2">
                          ₹
                          {item.price
                            ? item.price / 100
                            : item.defaultPrice / 100}
                        </p>
                        <span className="text-gray-700">
                          {item.description}
                        </span>
                      </div>

                      <div className="w-3/12 relative rounded-2xl shadow-md">
                        <img
                          className="w-full h-full object-cover transition-transform z-0 duration-300 hover:scale-105 rounded-2xl"
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_700,h_400,c_fill/${item.imageId}`}
                          alt={item.name}
                        />

                        {showAddButton && (
                          <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 z-20">
                            <button
                              onClick={() => handleAddItem(item)}
                              className="bg-white cursor-pointer text-green-600 font-semibold border border-gray-300 px-11 py-1 rounded-lg shadow-md hover:bg-gray-100 transition"
                            >
                              Add
                            </button>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiggyRecipeInfo;

