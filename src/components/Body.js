import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  //local state variable - super powerful variable   
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  //whenever state variable update - react triggers a reconciliation cycle(re-rendering of the component)
  console.log('body rendered');
  
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
  )


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
        }}
        > 
          Top Rated Restaurants</button>
        </div>
        
        </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          //<RestaurantCard key={restaurant.info.id} resData={restaurant} />
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

