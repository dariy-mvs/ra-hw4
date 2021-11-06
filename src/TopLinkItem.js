import React from 'react'

export default function TopLinkItem(props) {
  const { href, text, classString, img, altImg, spanPreview, time } = props;
  return (
    <li className={classString}>
      {img ? <img src={img} alt={altImg} /> : null}
      {time ? <span className="time">{time}</span> : null }
      <a href={href}>{text}</a>
      {spanPreview ? <span className="spanPreview">{spanPreview}</span> : null }
    </li>
  )
}
