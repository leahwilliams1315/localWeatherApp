import React from 'react';

export default (props) => {
    return ( <div>
            <h3>Weather condition: {props.condition.text}</h3>
            <img src={props.conditionImg.icon} alt="weather icon"/>
            <h3>Temperature: {props.temp} c</h3>
            <h3>Feels like: {props.feelsLike} c</h3>
            <h3>Humidity: {props.humidity}%</h3>

        </div>
    )
}