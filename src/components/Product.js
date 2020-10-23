import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div className="col-3 mx-auto ptb-30">
                <div className="card mx-20">
                    <ProductConsumer>
                        {(value)=>(
                        <div className="img-container ptb-10"
                        onClick={()=>value.handleDetail(id)}>
                            <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                            </Link>
                            
                            <button className='btn btn-default btn-block' disabled={inCart?true:false}
                            onClick={()=>{value.addToCart(id)}}>
                            {
                                inCart?
                                (<span className="mtb-0" disabled>in Cart</span>):
                                (<i className="fa fa-shopping-cart" aria-hidden="true"></i>)
                            }
                            </button>
                        </div>
                        )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                    <strong className="align-self-center mb-0">{title}</strong>
                    <p className="mb-0">$ {price}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes= {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool 
    }).isRequired
}