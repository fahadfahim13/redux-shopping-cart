import { useDispatch } from 'react-redux'
import { Product } from '../../static/products'
import { Select, Space } from 'antd';
import { useState } from 'react';
import { Button } from "antd";
import { addToCart } from "../../redux/actions/cartActions";
import { useSelector} from 'react-redux'
import {Store} from '../../static/store'

const { Option } = Select;


const Products = () => {
    
    const [productId, setProductId] = useState(0)
    const dispatch = useDispatch()

    const products = useSelector((state: Store) => state.allProductsfromState);
    const handleClick = () => {dispatch(addToCart(productId))}
    return(
        <Space>
            Select Product: 
            <Select style={{ width: 120 }} onChange={(value: number) => setProductId(value)}>
            {products && products.map((product: Product) => (
                <Option value={product.id} key={product.id}>{product.name}</Option>
                )
            )}
            </Select>
            <Button type="primary" name="Add" id="button" onClick={handleClick}>Add</Button>
        </Space>
    )
}



export default Products;