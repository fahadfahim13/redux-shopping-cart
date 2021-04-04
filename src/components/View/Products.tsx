import { connect, useDispatch } from 'react-redux'
import ProductType from '../../static/products'
import { Select } from 'antd';
import { selectProduct } from '../../redux/actions/productActions'

const { Option } = Select;

type Props = {
    products: typeof ProductType;
}

const Products: React.FC<Props> = ({ products }) => {
    const dispatch = useDispatch()

    return(
        <div>
            <Select style={{ width: 120 }}
            onChange={(value: number) => dispatch(selectProduct(value))}
            >
            {products.map((product: any) => (
                <Option value={product.id} key={product.id} 
                // onClick={() => dispatch(selectProduct(product.id))}
                >{product.name}</Option>
                )
            )}
            </Select>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return{
        products: state.allProductsfromState
    }
  }

export default connect(mapStateToProps)(Products);