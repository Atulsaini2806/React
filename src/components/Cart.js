import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";


const Cart = () => {
const Cartitems = useSelector((store) => store.cart.items);
console.log(Cartitems);

const dispatch = useDispatch();
const handleClearCart = () => {
   dispatch(clearCart());
}

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2  bg bg-green-200 rounded-lg"
            onClick = {handleClearCart}>
                Clear cart
                </button>
                {Cartitems.length === 0 ? (
                <h1 className="text-xl font-semibold">Your Cart is empty. Add Items to the card!</h1>
            ) : null}
                <ItemList items={Cartitems} />
            </div>
             </div>
    );
};

export default Cart;