import { CDN_URL } from "../utils/constant";


const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo,sla, cloudinaryImageId } = resData.info;

  return (
    <div className="m-3 p-3 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-300">
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
    </div>
  );
};

export default RestaurantCard;