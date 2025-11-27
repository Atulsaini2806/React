import RestaurantCard,{withPureVeg} from "./RestaurantCard";
import { useState,useEffect, useContext} from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  //local state variable - super powerful variable   
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const PureVegRestaurantCard = withPureVeg(RestaurantCard);

  //whenever state variable update - react triggers a reconciliation cycle(re-rendering of the component)
  //console.log('body rendered,listOfRestaurants');
  
 useEffect(()=>{
  fetchData();
 },[])

 const fetchData =async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.8640501&lng=77.8887761&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );

    const json = await data.json();
    console.log(json);  
    console.log(data.cards);

    //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
 };

const onlineStatus = useOnlineStatus();

if(onlineStatus === false)
  return ( 
  <h1>
    Looks like you're Offline!! Please check your internet connection;
    </h1>
  );

  const {loggedInUser, setUserName } = useContext(UserContext);


  return listOfRestaurants.length === 0 ? (
  <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" search m-3 p-3">
          <input type="text" className="border border-solid border-black" 
          value={searchText}
           onChange={(e) => {
            setSearchText(e.target.value);
           }} />
          <button className="px-4 py-1 m-2 bg-green-100 rounded-lg"
          onClick={() => {
            //filter the restaurant cards and update the UI
            //searchText
            console.log(searchText);

            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}> 
          Search</button>
        </div>
        <div className = "search m-4 p-4">
          <button className="px-4 py-1  bg-green-100 rounded-lg"
        onClick ={() => {
          //Filter Logic Here      
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setFilteredRestaurants(filteredList);
        }}> 
          Top Rated Restaurants
          </button>
        </div>
        <div className = "search m-4 p-4">
          <label> UserName : </label>

          <input className="border  border-black py-0.5" 
          value={loggedInUser}
          onChange={(e) =>
             setUserName(e.target.value)} 
          />
        </div>
        </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          //<RestaurantCard key={restaurant.info.id} resData={restaurant} />
          <Link 
          key={restaurant.info.id}
           to={"/restaurants/" + restaurant.info.id}>

             {restaurant?.info?.veg ? (
              <PureVegRestaurantCard key ={restaurant?.info?.id}resData={restaurant} />
            ) : (
            <RestaurantCard key ={restaurant?.info?.id}resData={restaurant} />
            )}
            
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

