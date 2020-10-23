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
          <div className="container mtb-50">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src={img} className="img-fluid" alt="product"></img>
              </div>
              <div className="col-sm-6">
                <h3>Model: {title}</h3>
                <h5 className="text-uppercase text-muted">Made By: {company}</h5>
                <strong>Price: {price}$</strong>
                <p>Details:<br></br>{info}</p>
                <div>
                  <Link to="/">
                    <button className="btn btn-default btn-lg">
                      back to homepage
                    </button>
                  </Link>
                    <button className="btn btn-info btn-lg" disabled={inCart?true:false}
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
