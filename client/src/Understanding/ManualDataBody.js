// by manually putting dummy data

// import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/MockData";
// import SearchBar from "./SearchBar.js";
// import Footer from "./Footer.js"
// import { useState , useEffect } from "react";

// const Body = () => {

//   const [restaurants , setRestaurants] = useState(restaurantList);

//   const filterTopRated = () => {
//     const filtered = restaurantList.filter(res => parseFloat(res.rating) > 4);
//     setRestaurants(filtered);
//   };

//   return (
//     <div className="body">
//       <div className="search">
//         <SearchBar onFilter={filterTopRated}/>
//       </div>

//        <div className="res-container">
//          {restaurants.map((res) => (
//           <RestaurantCard
//           key = {res.id}
//           name = {res.name}
//           image = {res.image}
//           rating = {res.rating}
//           cuisine = {res.cuisine}
//           />
//         ) )}
//       </div>

//       <Footer/>

//     </div>
//   )

// }

// export default Body;
