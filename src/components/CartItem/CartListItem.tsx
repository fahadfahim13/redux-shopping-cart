import { Button, List } from 'antd';
import { CartItem } from '../../static/cart'
import { addToCart, deleteFromCart, removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from 'react-redux';

const CartListItem = (item: CartItem) => {

    const dispatch = useDispatch();
    return (
        <div>
            <List.Item>
                <List.Item.Meta 
                title={item.product.name}
                description={`Quantity: ${item.quantity}   Price: ${item.product.price}    Total: ${item.product.price * item.quantity}`}
                />
                <div><Button type="default" onClick={() => dispatch(addToCart(item.product.id))}> + </Button></div>
                <div><Button type="primary" onClick={() => dispatch(removeFromCart(item.product.id))}> - </Button></div>
                <div><Button type="link" onClick={() => dispatch(deleteFromCart(item.product.id))}> X </Button></div>
                
            </List.Item>
        </div>
    )
}

export default CartListItem
