import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sportsDay from "../assets/images/sports_day.jpeg";
import scienceExhibition from "../assets/images/science_exhibhition.jpg";
import culturalFest from "../assets/images/culture_fest.jpg";
import Aos from "aos";

const CarouselComponent = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} className="relative">
      <div className="relative">
        <img
          src={sportsDay}
          alt="Sports Day"
          className="w-full h-[550px] object-cover"
          data-aos="flip-left"
        />
        <p className="legend absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black text-white text-center py-2">
          Annual Sports Day - Celebrating Excellence in Sports
        </p>
      </div>
      <div className="relative">
        <img
          src={scienceExhibition}
          alt="Science Exhibition"
          className="w-full h-[550px] object-cover"
          data-aos="flip-left"
        />
        <p className="legend absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black text-white text-center py-2">
          Science Exhibition - Showcasing Student Innovations
        </p>
      </div>
      <div className="relative">
        <img
          src={culturalFest}
          alt="Cultural Fest"
          className="w-full h-[550px] object-cover"
          data-aos="flip-left"
        />
        <p className="legend absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black text-white text-center py-2">
          Cultural Fest - Embracing Diversity and Creativity
        </p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
