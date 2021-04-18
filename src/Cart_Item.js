import React from 'react';
import './Cart_Item.css';

const Cart_Item=(props)=>
{
    const {price,title,qty}=props.product;
    const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={style.image} className="cart-item-pic" src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'black'}}>RS {price}</div>
                <div style={{color:'black'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*buttons*/}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1618510288~hmac=e457827b6d1afd05ab103ca58e6d3be2" 
                        style={{height:25,width:25,flaot:'left',display:'inline',paddingRight:13}}
                        onClick={()=>onIncreaseQuantity(product)}/>
                        
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618510237~hmac=315a5f4b92abe864d973562cc7775fc1" 
                        style={{height:25,width:25,flaot:'left',display:'inline',paddingRight:13}}
                        onClick={()=>onDecreaseQuantity(product)}/>
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1618510349~hmac=b14085be99c0cc3f2016734bd4e63488" 
                        style={{height:25,width:25,flaot:'left',display:'inline',paddingRight:13}}
                        onClick={()=>onDeleteProduct(product.id)}/>
                </div>
            </div>
        </div>
    );
    

}
const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default Cart_Item;