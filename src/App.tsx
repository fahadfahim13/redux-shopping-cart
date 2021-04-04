import React from 'react';
import { PageHeader, Row, Col } from 'antd';
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { fetchAllProducts } from './redux/actions/productActions'
import View from './components/View/View';

function App() {
  return (
    <div className="App">
      <PageHeader className="site-page-header" title="Redux Shopping Cart" />
      <Row justify="space-around">
        <Col span={18}><View /></Col>
        <Col span={6}>col</Col>
      </Row>
    </div>
  );
}


const mapDispatchToProps = () => {
  return {
    fetchAllProducts: () => fetchAllProducts()
  }
}

export default connect(null, mapDispatchToProps)(App);
