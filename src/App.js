import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MovieContainer from './components/MovieContainer/MovieContainer';
import { fetchMovies } from './api/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recentMovies: []
    }
  }
  
  async componentDidMount() { 
    await fetchMovies()
      .then(recentMovies => this.setState({ recentMovies }))
  }

  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <MovieContainer recentMovies={this.state.recentMovies}/>
      </div>
    );
  }
}

  const mapStateToProps = (state) => ({
    movies: state.movies,
    login: state.login
  })

  const mapDispatchToProps = (dispatch) => ({
    showMovies: (movies) => dispatch (showMovies(movies))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
