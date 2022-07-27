import React from 'react';
import './product.css';
export const Product = (props)=>{
    return(
        <div>
            <div className='product_container'>
                <div className='product_name'>{props.pname}</div>
                <div className='product_image'>
                    <img src = {props.pimage}/>
                </div>
                <div className='product_price'>{props.price}</div>
                <div className='button_container'>
                    <button className='buy'>Buy</button>
                </div>
            </div>
        </div>
    )
}