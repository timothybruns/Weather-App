import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Loading from './components/Loading';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super()
      this.state = {
        currentZip: '06902',
        apiDataLoaded: false,
        weatherData: null,
    }
    this.handleZip = this.handleZip.bind(this);
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.currentZip}&units=imperial&appid=7a279499f2ef484a434e0ebfde261dbc`)
    .then(res => {
      console.log(this.state.currentZip)
        this.setState({
          weatherData: res.data,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  handleZip(zip) {
    this.setState({
      currentZip: zip,
    })
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
      <br/>
      <br/>
      <Header
        handleZip = {this.handleZip}
       />
        {this.renderResults()}
      </div>
    );
  }
}

export default App;
