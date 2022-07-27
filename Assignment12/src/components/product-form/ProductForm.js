import React, {useState} from 'react';
import './product-form.css';

export const ProductForm = (props)=>{

    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productConductedBy:''
    })
    
    const productNameHandler = (event)=>{
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productName:event.target.value
            }
        })
    }
    const productPriceHandler = (event)=>{
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productPrice:event.target.value
            }
        })
    }
    const productImageHandler = (event)=>{ 
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productImage:event.target.value
            }
        })
    }
    // console.log(formInput)
    // console.log(`Product Name: ${formInput.productName} Product Price: ${formInput.productPrice}`)
    const [errorMessage, setErrorMessage] = useState('');
    const formSubmitHandler = (event)=>{
        let valid = 1;
        if(formInput.productName =='' && valid == 1){
            setErrorMessage ('No name found');
            valid =0;
     
        }
        if(formInput.productPrice =='' && valid == 1){
            setErrorMessage ('No price found');
            valid =0;
        }

        if(valid == 1){
            props.onProductAdded(formInput); 
        }
        event.preventDefault();}
    return(
        <div className = 'form-container'>
            <h1>Add New Product</h1>
            <form onSubmit={formSubmitHandler}>
                <div className = 'error'>{errorMessage}</div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Name' onChange={productNameHandler}/>
                </div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Price'onChange={productPriceHandler}/>
                </div>
                <div className = 'clearfix'></div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Image'onChange={productImageHandler}/>
                </div>
                <div className = 'clearfix'></div>
                <div className = 'form-input'>
                    <button className="btn_add_product">Add Product</button>
                </div>
                <div className = 'clearfix'></div>
            </form>
        </div>
    )
}

export default ProductForm;