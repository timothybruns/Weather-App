import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Body from './components/Body';
import Weather from './components/Weather';

class App extends Component {
  constructor() {
    super()
      this.state = {
        apiData: null,
        apiDataLoaded: false
    }
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=06902&units=imperial&appid=7a279499f2ef484a434e0ebfde261dbc')
    .then(res => {
      console.log(res.data.id)
        this.setState({
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  /*renderWeatherInfo() {
    if (this.state.apiDataLoaded) {
      return
    }
  }*/

  render() {
    return (
      <div className="App">
        This is my app!
        <Search />
        <Body />
      </div>
    );
  }
}

export default App;
