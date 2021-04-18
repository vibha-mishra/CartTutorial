import React from 'react';
import Cart_Item from './Cart_Item';

const Cart=(props)=>
{
    const {products}=props;
    return(
        <div className='cart'>
            {products.map((product)=>{
                return <Cart_Item 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}
                        />
                    }
                )
            }
        </div>

    );
}
export default Cart;