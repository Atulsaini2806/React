import React,{lazy,Suspense,useState,useEffect}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";

//import Grocery from "./components/Grocery";

//chunking
//code splitting
//dynamic loading
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
 

const AppLayout = () => {

 const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an API call and send username and passward
  const data = {
    name : "Atul Saini",
  };
  setUserName(data.name);
  },[]);
 
  return (
    <div>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app"></div>
      <Header />
      <Outlet />
       </UserContext.Provider>
    </div>

    
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
     {
       path: "/about",
       element: <AboutUs/>,
     },
     {
      path: "/contact",
       element: <ContactUs/>,
     },
     {
       path: "/grocery",
       element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
     },
     {
       path: "/restaurants/:resId",
       element: <RestaurantMenu/>,
     }
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(<RouterProvider router={appRouter} />);