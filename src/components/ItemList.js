import {CDN_URL} from "../utils/constant";

const ItemList = ({ items }) => {
    return <div>
        {items.map((item) => ( 
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-amber-100 text-left flex justify-between">
                <div className="py-1 w-10/12" >
                    <span className="font-semibold">{item.card?.info.name}</span>
                    <p className="text-sm">- ₹{item.card?.info.price/100 || item.card?.info.defaultPrice/100} </p>
                    
                    <p className="text-xs ">{item.card?.info.description}</p>                    
                </div>
                <div className="w-2/12 p-3 relative">
                    <img className=" w-full h-18 rounded-lg" src={CDN_URL + item.card?.info.imageId} alt="item image"/>
                    <button 
                      className="shadow-lg rounded-lg absolute bottom-0.5 left-1/2 -ml-5 px-2 bg-green-600 text-white"
                    >
                  Add+
                    </button>
                    
                </div>
                
                
            </div>
            
          ))}

        
    
    
    
    </div>
};

export default ItemList;