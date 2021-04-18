import React from 'react';

const Navbar=(props)=> {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1618682610~hmac=759e52b0690a1e5762e156ab50cec306"
            alt=""
            style={styles.cartIcon}/>
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}
const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#FF335B',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cartIconContainer:{
        position:'relative',
        // fontSize:20,
        // fontStyle:'cursive'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9

    }
}
export default Navbar;
