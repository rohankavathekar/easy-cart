import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
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
            <p>Name <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img  className="img" alt="catagory" src= {'img/2.png'}/>
            <p>Name <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img  className="img" alt="catagory" src= {'img/3.png'}/>
            <p>Name <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img  className="img" alt="catagory" src= {'img/4.png'}/>
            <p>Name <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img className="img" alt="catagory" src= {'img/5.png'}/>
            <p>Name <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div>  
          <div>
            <img className="img" alt="catagory" src= {'img/6.png'}/>
            <p>Name <i class="fa fa-angle-down" aria-hidden="true"></i></p>
          </div> 
        </OwlCarousel>  
      </div>  
    </div>  
  )  
};

export default Catagories;