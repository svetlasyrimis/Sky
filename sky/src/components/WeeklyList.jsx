import React from 'react'
import { uid } from 'react-uid'
import { Redirect } from 'react-router-dom'

import WeeklyCard from './WeeklyCard'

const WeeklyList = (props) => {
  let weekly = JSON.parse(localStorage.getItem("weeklyWeather"));


  return (
    <div className='flex-center-row weekly-list'>
      {(weekly && weekly.length) ? (weekly).map((item) =>
        <WeeklyCard item={item} key={uid(item)} />
      ) : <Redirect to='/' />}
    </div>
  )
}

export default WeeklyList