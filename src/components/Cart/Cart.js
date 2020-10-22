import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList';

const Cart = () => {
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
};

export default Cart;