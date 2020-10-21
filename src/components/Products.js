import React, { Component } from 'react';
import Title from "./Title";
import Product from './Product';
import { ProductConsumer } from '../context';

export default class Products extends Component {
  render() {
    return (
      <div>
        <div className="mtb-50">
          <div className="container">
            <Title name="product"/>
              <div className="row">
                <ProductConsumer>
                  {
                    (value)=>{
                    return value.products.map(product =>{
                      return <Product key={product.id} product={product}/>
                    })
                    }
                  }
                </ProductConsumer>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
