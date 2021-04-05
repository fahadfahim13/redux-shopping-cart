import { useSelector} from 'react-redux'
import { CartItem } from '../../static/cart';
import {Store} from '../../static/store'


const CartTotal = () => {
    const cartReducer = useSelector((state: Store) => state.cartReducer);

    const total = () => {
        let sum = 0;
        cartReducer.map((item: CartItem) => sum+=(item.product.price*item.quantity))
        return sum
    }

    return (
        <div>
            Total Price: {total()}
        </div>
    )
}

export default CartTotal
