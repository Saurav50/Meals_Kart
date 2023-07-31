// src/OrderMessagesCarousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OrderMessagesCarousel.css";

const OrderMessagesCarousel = () => {
  const messages = [
    {
      title: "Your Order is Being Placed",
      text: "It will be Delivered Shortly",
    },
    {
      title: "Hooray! Your Order is on the Way",
      text: "It's being shipped to your location",
    },
    {
      title: "Delivery in Progress",
      text: "Sit back and relax, your order will arrive soon",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the transition speed (in milliseconds)
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set the time between slides (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="order-messages-carousel">
      <Slider {...settings}>
        {messages.map((message, index) => (
          <div key={index} className="message-slide">
            <h2>{message.title}</h2>
            <p>{message.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OrderMessagesCarousel;
