import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {

  const {loggedInUser} = useContext(UserContext);

  const { name, cuisines, avgRating, costForTwo,sla, cloudinaryImageId } = resData.info;

  return (
    <div className="m-3 p-3 w-[200px] h-[450px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`} 
      />
      <h4 className="font-bold py-3 text-sm">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
       <h4>User : {loggedInUser} </h4> 
    </div>
  );
};

//higher order function
// inout - RestaurantCard =>> RestaurantCardWithpure veg

export const withPureVeg = (RestaurantCard) => {
  return (props) => {
    return(
      <div className="relative">
      <label className="bg-green-500 rounded-lg p-1 absolute top-0 left-0 z-10  text-white ">Pure Veg</label>
      <RestaurantCard {...props} />
      </div>
    )
  };
};


export default RestaurantCard;