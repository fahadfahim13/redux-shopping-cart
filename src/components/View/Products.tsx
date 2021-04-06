import { connect, useDispatch } from 'react-redux'
import { Product } from '../../static/products'
import { Select, Space } from 'antd';
import { useState } from 'react';
import { Button } from "antd";
import { addToCart } from "../../redux/actions/cartActions";


const { Option } = Select;

type Props = {
    products: Product[]|[];
}

const Products: React.FC<Props> = ({ products }) => {
    
    const [productId, setProductId] = useState(0)
    const dispatch = useDispatch()

    return(
        <Space>
            Select Product: 
            <Select style={{ width: 120 }} onChange={(value: number) => setProductId(value)}>
            {products.map((product: Product) => (
                <Option value={product.id} key={product.id}>{product.name}</Option>
                )
            )}
            </Select>
            <Button type="primary" onClick={() => dispatch(addToCart(productId))}> Add </Button>
        </Space>
    )
}

const mapStateToProps = (state: any) => {
    return{
        products: state.allProductsfromState
    }
  }

export default connect(mapStateToProps)(Products);