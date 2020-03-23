import React from "react";

const MoviesCardComponent = (props) => {
  console.log(props);
 
  
    return (
      <div className="column">
        <div className="ui card">
          <div className="image">
            <img alt="" src={props.image} />
          </div>
          <div className="content">
            <a href="/" className="header">
              {props.title}
            </a>
            <div className="meta">
              <span className="date">{props.year}</span>
            </div>
          </div>
        </div>
      </div>
    );



  // return <React.Fragment>{movie}</React.Fragment>


};

export default MoviesCardComponent;
