import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
      {
        (value) => {
        const {id,company,img,info,price,title,inCart} = value.detailProduct;
        return(
          <div className="container mtb-40">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <img src={img} className="img-fluid" alt="product"></img>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <h3>Model: {title}</h3>
                <h5 className="text-uppercase text-muted">Made By: {company}</h5>
                <strong>Price: {price}$</strong>
                <p>Details:<br></br>{info}</p>
                <div>
                  <Link to="/">
                    <button>
                      back to homepage
                    </button>
                  </Link>
                    <button disabled={inCart?true:false}
                    onClick={()=>{
                      value.addToCart(id)
                    }}>
                      {inCart?"Already in Cart":"Add to Cart"}
                    </button>
                </div>
              </div>
            </div>
          </div>
        ) 
      }}
    </ProductConsumer>
    )
  }
}
