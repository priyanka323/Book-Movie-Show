import React from "react";
import { Route } from "react-router-dom";

//Layouts
import Movie from "../pages/Movie.page";

const MovieHOC = ({ component: Component , ...rest }) => {
  return (
    <>
    <Route
    {...rest}
    component = {(props) => (
      <MovieLayout>
        <Component {...props} />
      </MovieLayout>
    )}
     />
    </>
  );
};

export default MovieHOC;