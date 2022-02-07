
import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
      <>
        <div className="w-full h-30 px-2">
          <img
            className = "w-full h-full rounded-xl"
            src={props.src}
            alt="Entertainment Card"
          />
          {props.children}
        </div>
      </>
  );
};

const EntertainmentCardSlider = (props) => {
  const EntertainmentImage = [
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTMwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png"
  ];

  const settings = {
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    InitialSlide: 0
  }

  return (
    <>
    
      <Slider {...settings}>
      {EntertainmentImage.map((image)=> (
        <EntertainmentCard src={image} />
      ))}
      </Slider>
      {props.children}
    
    </>
  )
};

export default EntertainmentCardSlider;
