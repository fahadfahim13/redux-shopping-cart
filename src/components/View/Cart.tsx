import { useSelector} from 'react-redux'
import {Store} from '../../static/store'
import { List, Divider } from 'antd';
import CartListItem from '../CartItem/CartListItem';

const Cart = () => {
    const cartReducer = useSelector((state: Store) => state.cartReducer);

    return (
        <div>
            <Divider />
            <List
                header={<div>Cart </div>}
                bordered
                dataSource={cartReducer}
                renderItem={item => (
                    <CartListItem {...item} />
                )}
            />
        </div>
    )
}

export default Cart
