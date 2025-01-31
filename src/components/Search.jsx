import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search,this.state.type);
    }
  };

  handleClick = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}),() => {
        this.props.searchMovies(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input
              placeholder="Искать"
              id="email_inline"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button className="btn" onClick={this.handleFilter}>
              искать
            </button>
          </div>

          <div className="radioboxes">
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group3"
                  type="radio"
                  checked={this.state.type === "all"}
                  data-type="all"
                  onChange={this.handleFilter}
                />
                <span>Все</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group3"
                  type="radio"
                  checked
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === "movie"}
                />
                <span>Только фильмы</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group3"
                  type="radio"
                  checked
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === "series"}
                />
                <span>Только серии</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
