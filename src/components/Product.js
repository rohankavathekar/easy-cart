import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div>
                <div className="col-9 mx-auto ptb-30">
                    <div className="card">
                        <div className="img-container ptb-10">
                            <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                            </Link>
                            <button className='btn-cart' disabled={inCart?true:false}
                            onClick={()=>{console.log("added");}}>
                            {
                                inCart?
                                (<p className="mb-0" disabled>in Cart</p>):
                                (<i className="fa fa-shopping-cart" aria-hidden="true"></i>)
                            }
                            </button>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="mr-1">{price}$</h5>
                        </div>
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