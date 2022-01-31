import React from "react";

const Poster = (props) => {
    return (
        <>
          <div className="px-4">
              <div className="h-80">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} className="w-full h-full rounded-xl"/>
              </div>

              <h3
              className={`text-lg font-bold ${
                  props.isDark ? "text-white" : "text-gray-800"
              }`}
              >
                {props.original_title}
              </h3>

              <p
              className={`text-sm font-bold ${
                  props.isDark ? "text-white" : "text-gray-700"
              }`}
              >
                {props.original_language}
              </p>
          </div>
        </>
    )
};

export default Poster;