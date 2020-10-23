import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import {Link} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Catagories = () => {
  return (  
    <div>  
      <div className='container owl' >            
        <OwlCarousel items={6}  
          className="owl-theme"  
          loop  
          nav  
          margin={8}
          autoplay={true}
         >  
          <div >
            <img  className="img" alt="catagory" src= {'img/1.png'}/>
            <p>Travel Accessories <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img  className="img" alt="catagory" src= {'img/2.png'}/>
            <p>Health and Grocary <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <Link to="/products">
            <div data-testid="mobile">
              <img className="img" alt="catagory" src= {'img/5.png'}/>
              <p>Mobile Phones <i class="fa fa-angle-down" aria-hidden="true"></i></p>
            </div> 
          </Link>
          <div>
            <img  className="img" alt="catagory" src= {'img/3.png'}/>
            <p>Kindle and Books <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img  className="img" alt="catagory" src= {'img/4.png'}/>
            <p>Home Furniture <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
           
        </OwlCarousel>  
      </div>  
      <marquee >Due To Maintainence Issue Only Mobiles Catagory Is Live Today</marquee>
    </div>  
    
  )  
};

export default Catagories;