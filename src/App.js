import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../app.css";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./About";
const About = lazy(() => import("./About"));
import Contact from "./Contact";
import ErrorEleme from "./ErrorEleme";
import ResMenu from "./ResMenu";
import AccComp from "./AccComp";
import { UserCon } from "./UserCon";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
// import AboutClass from "./AboutClass";

let AppLayout = () => {
  let [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: "ajay" };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserCon.Provider value={{ LoggedUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Body /> */}
        </div>
      </UserCon.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/accordian",
        element: <AccComp />,
      },
      {
        path: "/restaurants/:id",
        element: <ResMenu />,
      },
    ],
    errorElement: <ErrorEleme />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=312

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
