import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/search_bar';
import CurrentWeather from './components/current_weather';


const API_KEY = 'ba0e864d292642d09ca154859172505';
const ROOT_URL = `http://api.apixu.com/v1/current.json?key=${API_KEY}`;

class App extends Component {


  state = {
    /**
     condition:
        {text: "Light rain", icon: "//cdn.apixu.com/weather/64x64/day/296.png", code: 1183}

     feelslike_c: 9.5

     humidity:94

     temp_c:12

     */
    weatherData: {},
    currentCityString: ''
};
// function that fires get request for weather data//
  getWeatherData(city){
    axios.get(`${ROOT_URL}&q=${city}`)
      .then(result => this.setState({weatherData: result.data.current}));

  }

  render() {
    return (
      <div className="App">

        <h1>Local Weather</h1>
        <SearchBar handleChange={event => this.setState({currentCityString: event.target.value})} />


        <button onClick={() => this.getWeatherData(this.state.currentCityString)}>Search</button>
          {
              this.state.weatherData.temp_c ?

          <CurrentWeather   condition={this.state.weatherData.condition}
                            conditionImg={this.state.weatherData.condition}
                            temp={this.state.weatherData.temp_c}
                            feelsLike={this.state.weatherData.feelslike_c}
                            humidity={this.state.weatherData.humidity}

        />
                  : ''
        }

      </div>
    );
  }
}

/*  button: passing in uncalled getWeatherData function, if it were called, it would be resolved on render
 * of button, not on click */

export default App;
