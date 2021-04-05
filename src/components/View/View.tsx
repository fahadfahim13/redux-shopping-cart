import Cart from "./Cart"
import Products from "./Products"
import { Row, Col } from 'antd';
import CartTotal from "../CartItem/CartTotal";


const View = () => {
    return(
        <div>
            <Row justify="space-around">
                <Col span={6}></Col>
                <Col span={12}>
                    <Products /> 
                    <Cart />
                </Col>
                <Col span={6}>
                    <CartTotal />
                </Col>
            </Row>
            
        </div>
    )
}

export default View;