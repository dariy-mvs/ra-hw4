import React from 'react'

export default function CardItem(props) {
  const {img, title, text} = props
  return (
    <div className="card">
      { img ? <img src={img} className="cardImg"/> : null}
      <div className="textWrapper">
        <span className="cardTitle">{title}</span>
        <p className="cardText">{text}</p>
        <button className="cardBtn">Go somewhere</button>
      </div>
    </div>
  )
}
