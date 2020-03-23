import React from "react";

class SearchComponent extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui fluid icon input">
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder="Search ......"
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}

export default SearchComponent;
