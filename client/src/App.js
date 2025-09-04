import React, {useState , useEffect ,lazy, Suspense , useContext } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/CartStore";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));


const AppLayout = () => {

   const [UserName , setUserName] = useState("")

  useEffect(() => {
    const data = {
      name: "Mudasra",
    }
    setUserName(data.name)
  },[])

   const user = { loggedInUser: "Default User" };

    return (
      <Provider store={AppStore}>
    <UserContext.Provider value={{ loggedInUser: UserName , setUserName }}>
      <div className="app min-h-screen flex flex-col">
       <Header />
       <main className="content flex-1">
         <Outlet />
       </main>
       <Footer />
     </div>
    </UserContext.Provider>
  </Provider>
  );



};
 
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,      
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
           <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetails />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);





