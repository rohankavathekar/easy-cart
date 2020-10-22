import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment, decrement,removeItem} = value;
    console.log(value)
    return (
        <div className="row mtb-10 text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem'}} 
                className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className='d-lg-none'>Product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className='d-lg-none'>price : </span>
                {price}$
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                    <span>{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className='d-lg-none'>remove : </span>
                <div className="cart-icon"><i className="fa fa-trash" onClick={()=>removeItem(id)}/></div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className='d-lg-none'>total : </span>
                {total}$  
            </div>
        </div>
    ) 
}
