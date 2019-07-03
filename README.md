![storm](https://media3.giphy.com/media/l0IykeVYHggzcLB6g/giphy.gif)
# Project Overview
Weather web app built with React.js

## Project Description

Sky is a location-aware weather web app that displays weather forecast as a short summary with the option to get more detailed information about the forecast in different formats(currently, hourly, daily).

[View website](https://skyproject.surge.sh/)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

### Instructions
- Fork and clone this repo
- Run ```npm i```
- Start the server with ```npm start``` 

## MVP / PostMVP
 

### MVP 
- Use [OpenCage API](https://opencagedata.com/) to get coordinates of a place or address
- Use [DarkSky API](https://darksky.net/dev) to get the weather for the coordinates
- Display the current weather
- Allow the user to see the weekly weather forecast
- Allow the user to see an hourly forecast for the same day

### PostMVP

- Setup the app on a secure HTTPS site
- Enable Location Services for mobile devices 
- Include HTML Geolocation API to get user's current location and fetch weather data
- Include location details component

## React Component Hierarchy

Define the the React components and the architectural design of your app.

## Components
This is the list of components I will be building and using.

| Component | Description | 
| --- | :---: |  
| Home | This will render the home screen | 
| WeatherCard | This will render the weather for a given day | 
| HourlyCard | This will render the weather for a given hour| 
| HourlyList | This will render multiple HourlyWeatherCard components |
| WeeklyList | This will render multiple DailyWeatherCard components |
| WeatherIcon | This will render the weather icon from the [react-animated-weather](https://www.npmjs.com/package/react-icons-weather) npm package| 


## Time Estimates
These are some rough estimates on how long it will take to code each component and API

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home | H | 3h| TBD | TBD |
| [OpenCage API](https://opencagedata.com/) | H | 3h| TBD | TBD |
| [DarkSky API](https://darksky.net/dev) | H | 3h| TBD | TBD |
| [react-icons-weather](https://www.npmjs.com/package/react-icons-weather) | H | 3h| TBD | TBD |
| DailyWeatherCard | H | 1.5h| TBD | TBD |
| HourlyWeatherCard | H | 3.5h| TBD | TBD |
| HourlyWeatherList | H | 4h| TBD | TBD |
| WeeklyWeatherList | H | 3h| TBD | TBD |
| Total | - | 24h| TBD | TBD |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| timeCoverter | This will convert UNIX timestamp to 12-hour format units. |
| dateConverter | This will convert UNIX timestamp to a date. |
| URLify | This will convert a string into a proper format for the API call.|

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

| Library | Function | 
| --- | :---: |  
| [react-icons-weather](https://www.npmjs.com/package/react-icons-weather) | Allows me to render good looking icons based on the DarkSky API icon values | 
|[react-animated-weather](https://www.npmjs.com/package/react-animated-weather)| Allows me to render animated icons based on the DarkSky API icon values | |[uid] (https://www.npmjs.com/package/react-uid)| Allows me to generate unique key necessary for React unique key property | 




## Code Snippet

componentDidMount() uses geolocation API to pass coordinates on a callback function which fetches the data and set it state. 

```
componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(async position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let coordinates = `${lat},${lon}`
        this.getDataFromCoordinates(coordinates, false)
      },
        error => {
          console.log("Error: ", error)
        },
        { enableHighAccuracy: true });
    }
 }
```

## Issues and Resolutions
 A major issue for me was passing state from a controlled component to other children components. Initially I didn't lift state to App.js and I decided to go a different route - I used local storage to save and retrieve state. It was a good practice, however this is not optimal for buildin a final prototype.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object