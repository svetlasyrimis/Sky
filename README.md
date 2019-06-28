![storm](https://media3.giphy.com/media/l0IykeVYHggzcLB6g/giphy.gif)
# Project Overview
Weather web app built with React.js

## Project Description

Sky is a location-aware weather web app that displays weather forecast as a short summary with the option to get more detailed information about the forecast in different formats(currently, hourly, daily).

## Wireframes

Wireframes are uploaded in the repo.

## MVP / PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

### MVP
- Use [OpenCage API](https://opencagedata.com/) to get coordinates of a place or address
- Use [DarkSky API](https://darksky.net/dev) to get the weather for the coordinates
- Display the current weather
- Allow the user to see the weekly weather forecast
- Allow the user to see an hourly forecast for the same day

### PostMVP

- Setup the app on a secure HTTPS site
- Enable Location Services for mobile devices

## React Component Hierarchy

### Components
This is the list of components I will be building and using.

| Component | Description | 
| --- | :---: |  
| Home | This will render the home screen | 
| DailyWeatherCard | This will render the weather for a given day | 
| HourlyWeatherCard | This will render the weather for a given hour| 
| HourlyWeatherList | This will render multiple HourlyWeatherCard components |
| WeeklyWeatherList | This will render multiple DailyWeatherCard components |
| WeatherIcon | This will render the weather icon from the [react-icons-weather](https://www.npmjs.com/package/react-icons-weather) npm package| 


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
| URLify | This will convert a string into a proper format for the API call.  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

| Library | Function | 
| --- | :---: |  
| [react-icons-weather](https://www.npmjs.com/package/react-icons-weather) | Allows me to render good looking icons based on the DarkSky API icon values | 



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```JavaScript
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object