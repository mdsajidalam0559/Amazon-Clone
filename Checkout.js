import React from "react";
import './Checkout.css';
import {useStateValue} from './StateProvider.js' ;   
import CheckoutProduct from'./CheckoutProduct.js';
import CurrencyFormat from "react-currency-format";
import Subtotal from'./Subtotal.js';

   
function Checkout() {
	const [{basket}] = useStateValue();return (
		<div className="checkout">
				<div className="checkout_left">

	<img className="checkout_ad" src="https://tma-live.s3.ap-south-1.amazonaws.com/gallery/1631255694131/Pay%20Electricity%20Bill%20On%20Amazon%20%26%20Get%20Upto%20Rs%20125%20Rewards.jpg" alt=""/>
	{basket?.length === 0 ? (
		<div>
			<div className="basket">Your Shopping Basket Is Empty </div>

</div>
		):(
		<div>
		<h1 className="checkout_title">Your Shopping Basket</h1>
		{basket.map(item =>(
					<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					/>)) }
		</div>
		)
}
</div>
{basket.length >0 && (
		<div className="checkout_right">
		<Subtotal/>
		</div> 
)}
  </div>

);

}

export default Checkout;