import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

//&type=series

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&type=`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search , loading:false }));
  }

  searchMovies = (str, type = "all") => {
    this.setState({loading : true});
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search ,loading:false}));
  };

  render() {
    const { movies , loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        ) : (<Movies movies={movies} />)}
      </main>
    );
  }
}

export { Main };
