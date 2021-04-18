import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
class App extends React.Component
{
  constructor(){
    super();
    this.state={
        products:[
            {
                price:18999,
                title:'MiPhone',
                qty:1,
                img:'https://4.imimg.com/data4/IG/VT/ANDROID-45483305/product-500x500.jpeg',
                id:1
            },
            {
                price:1699,
                title:'Smart Watch',
                qty:1,
                img:'https://static.bhphoto.com/images/images2000x2000/1580989838_1543970.jpg',
                id:2
            },
            {
                price:999,
                title:'Laptop Bag',
                qty:1,
                img:'https://images-na.ssl-images-amazon.com/images/I/81IXNnXyGmL._SL1500_.jpg',
                id:3
            },
            {
                price:2999,
                title:'Headphone',
                qty:1,
                img:'https://cdn57.androidauthority.net/wp-content/uploads/2020/09/Sony-WH-1000XM4-vs-bose-noise-cancelling-headphones-700-AA-hero.jpg',
                id:4
            },
            {
                price:899,
                title:'Power Bank',
                qty:1,
                img:'https://www.businessinsider.in/thumb/msid-77868634,width-960,resizemode-4,imgsize-117908/tech-buying-guides/best-mobile-charger-power-banks-under-1000-rs-in-2020/power-bank.jpg',
                id:5
            }
        ]
    }
    
}
handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products
    })
    
}
handleDecreaseQuantity=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products
    })
}
handleDeleteProduct=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
}
getCartCount=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach((product) => {
    count+=product.qty;
  });
  return count
}
getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal+=product.qty*product.price;
  })
  return cartTotal;
}
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <h1 style={{textAlign:"center"}}>Cart</h1>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:45,fontFamily:'cursive',background:'#FF335B',float:'right',margin:'auto',border:'2px solid black'}}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>
      
    );
  }
}

export default App;
