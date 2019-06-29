import React from 'react';

import { uid } from 'react-uid'

const HourlyList = (props) => {
  console.log(props.hourlyWeather)
  return (
    <div>
      {props.hourlyWeather.length > 0 && (props.hourlyWeather).map((item) => <div key={uid(item)}>
        <li>Date: {props.dateMaker(item.time)}{' '}
          Time:{props.timeConverter(item.time)} {' '}
          Temperature : {item.temperature} {' '}
          Feels like : {item.apparentTemperature}</li>
      </div>
      )}
    </div>
  )
}

export default HourlyList