import React from 'react'
import {Link} from "react-router-dom";

export default function CartTotals({value}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2 offset-10 text-capitalize text-right">
                        <Link to ="/">
                            <button className="btn btn-danger" type="button"
                            onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                            <div className="totals">
                                <p>subTotal: $<strong>{cartSubtotal}</strong></p>
                                <p>Cart Tax: $<strong>{cartTax}</strong></p>
                                <p>Total: $<strong>{cartTotal}</strong></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
