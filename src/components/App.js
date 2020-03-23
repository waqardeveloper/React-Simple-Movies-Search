import React from "react";
import axios from "axios";
import SearchComponent from "./SearchComponent";
import MoviesCardComponent from "./MoviesCardComponent";
import "./app.css";

class App extends React.Component {
  state = {
    moviesData: [],
    notFound: false
  };

  submitSearch = term => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json", {
        params: {
          query_term: term
        }
      })
      .then(response => {
        if (response.data.data.movie_count > 0) {
          this.setState({
            moviesData: response.data.data.movies,
            notFound: false
          });
        } else {
          this.setState({
            notFound: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    let display;
    if (this.state.notFound) {
      display = <h2 className="center">0 Result Found</h2>;
    } else {
      display = this.state.moviesData.map(item => {
        return (
          <div className="column" key={item.id}>
            <MoviesCardComponent
              image={item.large_cover_image}
              title={item.title}
              year={item.year}
              id = {item.id}
            ></MoviesCardComponent>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="ui center aligned ">
          <div className="ui text container">
            <div style={{ marginTop: "4em" }}>
                <h1>React Movies</h1><br/>
              <SearchComponent onSubmit={this.submitSearch}></SearchComponent>
            </div>
          </div>
        </div>

        <div className="ui four column doubling stackable grid container margin3em">
          {display}
        </div>
      </div>
    );
  }
}

export default App;
