import React from "react";
import Slider from "react-slick";

//import Poster from "../Poster/poster.component";
import Poster from "../Poster/Poster.component";


//config
import settings from "../../config/PosterCarousal.config";

//images
import PremierImages from "../../config/TempPosters.config";

export const Premier = (props) => {
  



  return (
      <>
      <div className="flex flex-col items-start gap-1 py-4">
        <h3 className="text-white text-xl font-bold">Premieres</h3>
        <p className="text-white text-sm">Brand New releases every friday</p>
      </div>
        <Slider {...settings} >
        {props.PremierImages.map((image)=> (
          <Poster {...image} isDark/>
        ))}
        </Slider>
      </>
  );
};

export default Premier;
