import React from 'react'

export const Cart = () =>{
  const user_cart = JSON.parse(localStorage.getItem('swixavo')) || null;
  let totalPrice = localStorage.getItem('nxavo');

  const RemoveFromCart = (id)=>{
    const cart = JSON.parse(localStorage.getItem('swixavo'));

    let isProductExisting = false;
    let cartItem;
    for (let i=0; i<cart.length;i++){
      if (cart[i]._id === id){
        isProductExisting = true;
        cartItem = cart[i]
      }
    }

    const updatedCart = cart.filter(item=> JSON.stringify(item) !== JSON.stringify(cartItem));
    let total = 0;
    for (let i=0; i<updatedCart.length;i++){
      let productPrice = parseInt(updatedCart[i].prodPrice)
      let quantity = parseInt(updatedCart[i].qty);

      total += productPrice * quantity;
    }
    localStorage.setItem('swixavo', JSON.stringify(updatedCart));
    localStorage.setItem('nxavo', total);
    window.location.reload(false)

  }

  if (user_cart === null || user_cart.length === 0){
    return <h1 style={{textAlign:'center', marginTop:'4rem', marginBottom:'4rem'}}>Cart is Empty continue shopping</h1>
  }else{
    return (
      <div
       className="cart"
       style={{display:'flex', justifyContent:'space-around', marginTop:'4rem', padding:'2rem'}}>
        <div>
          {
            user_cart.map(item=>{
              return <div
                      class="cart-items"
                      key={item._id}
                      style={{display:'flex', flexFlow:'column', alignItems:'center', marginBottom:'1.5rem'}}>
                <div className="cart-left">
                  <img style={{width:'100px'}} src={item.image}/>
                  <h4 style={{marginBottom:'1rem'}}>{item.name}</h4>
                  <button
                    onClick={()=>RemoveFromCart(item._id)}
                    style={{backgroundColor:'red', display:'block', color:'white', fontSize:'1.1rem', fontWeight:'bolder'}}
                    className="btn">DELETE ITEM</button>
                </div>
              </div>
            })
          }
        </div>
        <div
          className="cart_summary"
          style={{display:'flex', flexFlow:'column', padding:'1rem'}}>
          <h3>Cart Summary</h3>
          <h4 style={{marginTop:'1rem'}}>{`Subtotal: Rs${totalPrice}`}</h4>
          <button style={{marginTop:'1rem', backgroundColor:'#fed700'}} className="btn">Proceed To Checkout</button>
        </div>
      </div>
    )
  }
}
