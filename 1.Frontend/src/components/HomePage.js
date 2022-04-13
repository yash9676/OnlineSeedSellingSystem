import React from "react";
import HomePageNavBar from "./HomePageNavBar"
import img1 from './images/12_2_Onions_In_Dirt.jpg';
import img2 from './images/12_4_Grandfather_Grandson_Hands_Gardening.jpg';
import img3 from './images/markus-spiske-4PG6wLlVag4-unsplash.jpg';
import img4 from './images/megan-thomas-xMh_ww8HN_Q-unsplash.jpg';
import img5 from './images/sandie-clarke-q13Zq1Jufks-unsplash.jpg';


const HomePage = () => {
  return (
    
    <div >
        <HomePageNavBar/> 
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          <li data-target="#carouselExampleIndicators" data-slide-to={4} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" width="100%" height="550" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" width="100%" height="550" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide" width="100%" height="550" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="fourth slide" width="100%" height="550" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img5} alt="fifth slide" width="100%" height="550" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>

    </div>
  );
}
export default HomePage;