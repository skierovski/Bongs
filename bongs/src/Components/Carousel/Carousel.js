import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import './Carousel.css'
import photo_1 from '../../images/Bjurfors.JPG'
import photo_2 from '../../images/Ask.JPG'
import photo_3 from '../../images/Connect.JPG'
import photo_4 from '../../images/Stelara.JPG'
import photo_5 from '../../images/Sudd-Lee.JPG'

export default function Carousel(content) {
  const image1 = {
    photo: photo_1
  }
  const image2 = {
    photo: photo_2
  }
  const image3 = {
    photo: photo_3
  }
  const image4 = {
    photo: photo_4
  }
  const image5 = {
    photo: photo_5
  }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow:  1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false
              }
            }
          ]
      };
    return (
      <div className="Container">
        <span className="Header">{content.content.SecondHeader}</span>
        <Slider {...settings} >
            <Card photo={image1.photo}/>
            <Card photo={image2.photo}/>
            <Card photo={image3.photo}/>
            <Card photo={image4.photo}/>
            <Card photo={image5.photo}/>
            <Card photo={image1.photo}/>
            <Card photo={image2.photo}/>
            <Card photo={image3.photo}/>
            <Card photo={image4.photo}/>
            <Card photo={image5.photo}/>
        </Slider>
        </div>
    )
}