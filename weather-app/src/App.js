import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Loading from './components/Loading';

class App extends Component {
  constructor() {
    super()
      this.state = {
        apiDataLoaded: false,
        weatherData: null,
    }
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=06902&units=imperial&appid=7a279499f2ef484a434e0ebfde261dbc')
    .then(res => {
      console.log(res.data.main.temp)
        this.setState({
          weatherData: res.data,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }


  renderResults() {
    if(this.state.apiDataLoaded) {
     return <Search
        weatherData={this.state.weatherData}/>;
    } else return <Loading />;
  }

  render() {
    return (
      <div className="App">
        This is my app!
        {this.renderResults()}
      </div>
    );
  }
}

export default App;
