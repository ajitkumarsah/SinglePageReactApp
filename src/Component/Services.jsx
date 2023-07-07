import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";
import img6 from "../assests/img6.jpg";
import img7 from "../assests/img7.jpg";
import img8 from "../assests/img8.jpg";
import img9 from "../assests/img9.jpg";
import img10 from "../assests/img10.jpg";
import img11 from "../assests/img11.jpg";
import img12 from "../assests/img12.jpg";

alert("Thank you because of you I could complete this one.");
const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img3} alt="item1" />
          <p className="legend">Om Namah Shivay</p>
        </div>
        <div>
          <img src={img4} alt="item1" />
          <p className="legend">Jay Jaganath</p>
        </div>
        <div>
          <img src={img5} alt="item1" />
          <p className="legend">Rose</p>
        </div>
        <div>
          <img src={img6} alt="item1" />
          <p className="legend">Sand Mountain</p>
        </div>
        <div>
          <img src={img7} alt="item1" />
          <p className="legend">Pond</p>
        </div>
        <div>
          <img src={img8} alt="item1" />
          <p className="legend">Rose</p>
        </div>
        <div>
          <img src={img9} alt="item1" />
          <p className="legend">Sun Temple</p>
        </div>
        <div>
          <img src={img10} alt="item1" />
          <p className="legend">Full Moon</p>
        </div>
        <div>
          <img src={img11} alt="item1" />
          <p className="legend">Cloud</p>
        </div>
        <div>
          <img src={img12} alt="item1" />
          <p className="legend">Rose plant</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
