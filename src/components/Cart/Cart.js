import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns'
import CartTotals from './CartTotals'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList';


export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {
            value => {
              const {cart} = value;
              if(cart.length>0){
                return(
                  <div>
                    <Title name="Cart"/>
                    <CartColumns/>
                    <CartList value={value}/>
                    <CartTotals value={value}/>
                  </div>
                );
              }
              else {
                return <EmptyCart/>
              }
            }
          }
        </ProductConsumer>
      </div>
    );
  }
}
