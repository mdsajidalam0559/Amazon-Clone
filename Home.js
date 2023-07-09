import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className="home">
    
     <img className="home_image" 
  src ="https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200"
    alt="it's_ok" />
     
     
     <div className="home_row">
      <Product 
        id='12321'
        title="Gear Vintage2 28L Faux Leather Water Resistant Anti Theft Laptop Bag/Backpack for Men/Women-Brown"
        price={12.78}
        rating={3}
        image="https://m.media-amazon.com/images/I/915AQLq4QWL._UX679_.jpg"
        />
         <Product 
        id='29358'
        title="Amazon Echo Dot (3rd Gen) - New and Improved Smart Speaker with Alexa, Black"
        price={67.99}
        rating={4}
        image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"
        />
        </div>
         <div className="home_row">
         <Product 
        id='67323'
        title="boAt Wave Neo with 1.69 inch , 2.5D Curved Display & Multiple Sports Modes Smartwatch  (Black Strap, Free Size)"
        price={50}
        rating={5}
        image="https://rukminim1.flixcart.com/image/416/416/l3ahpjk0/smartwatch/m/k/a/-original-imagegyhhxaszhn9.jpeg?q=70"
        />
        <Product 
        id='34521'
        title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cyan Cider)"
        price={35}
        rating={4}
        image="https://images-eu.ssl-images-amazon.com/images/I/41zr73E-+9L._AC_SX184_.jpg"
        />
        <Product 
        id='98765'
        title="ASIAN Men's FUTURE-01 Sports Running,Walking & Gym Shoes with Eva Sole Extra Jump Casual Sneaker Shoes for Men's & Boy's"
        price={15}
        rating={3}
        image="https://m.media-amazon.com/images/I/610fN3RyKFL._AC_UL480_FMwebp_QL65_.jpg"
        />
        </div>
        <div className="home_row">
        <Product 
        id='12326'
        title="Scott International Men's Regular Fit T-Shirt (Pack of 3)"
        price={12.5}
        rating={3}
        image="https://m.media-amazon.com/images/I/71HBNT3R66L._UX679_.jpg"
        />
    
        <Product 
        id='12320'
        title="Apple iPhone 14 (128 GB) - Blue"
        price={800}
        rating={3}
        image="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
        />


        <Product 
        id='13326'
        title="EYEBOGLER Men Regular Fit T-Shirt T304_Wine Red_S_Wine Melange_SEYEBOGLERMenRegularT-Shirt"
        price={8}
        rating={4}
        image="https://m.media-amazon.com/images/I/41F4PxpXoFL._AC_UL480_FMwebp_QL65_.jpg"
        />
       


     </div>
      </div>
  
    
  );
}

export default Home;