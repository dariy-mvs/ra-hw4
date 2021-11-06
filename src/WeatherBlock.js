import React from 'react';

export default function WeatherBlock(props) {
  const { temperature, mTemp, dTemp, img, altImg } = props;
  return (
    <div className="WeatherBlock">
      <img src={img} alt={altImg} />
      <span className="temperature">{temperature}°</span>
      <span>Утром {mTemp}°</span>
      <span>Днём {dTemp}°</span>
    </div>
  )
}
