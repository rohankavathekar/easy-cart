import React from 'react'
import {Link} from "react-router-dom";

export default function CartTotals({value}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10  col-sm-8 text-capitalize text-right">
                        <Link to ="/">
                            <button className="btn btn-danger" type="button"
                            onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                            <div className="mtb-100">
                                <h5>subTotal: $<strong>{cartSubtotal}</strong></h5>
                                <h5>Cart Tax: $<strong>{cartTax}</strong></h5>
                                <h5>Total: $<strong>{cartTotal}</strong></h5>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
