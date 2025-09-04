import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo w-40"
          src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"
          alt="FoodPanda Logo"
        />
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      <nav className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul className="flex gap-6 justify-self-center">
          <li>Online Staus {onlineStatus ? "🟢" : "🔴"}</li>

          <li className="header-li ">
            <Link to="/">Home</Link>
          </li>
          <li className="header-li ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="header-li ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="header-li ">
            <Link to="/Grocery">Grocery</Link>
          </li>

          <li>
            <Link to="/cart" className="header-li flex items-center gap-2 font-bold bg-white py-1 px-2 rounded-lg text-[#ff2b85] ">
              <i className="fa-solid fa-cart-shopping "></i>
              <span className="">{cartItems.length}</span>
            </Link>
          </li>

          <li>
            <button
              className="header-btn"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
          <li className="header-li ">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
