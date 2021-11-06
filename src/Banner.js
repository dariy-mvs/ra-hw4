import React from 'react'

export default function Banner(props) {
  const {href, img, altImg} = props;
  return (
    <div>
      <a href={href} className="banner_link">
        <img src={img} alt={altImg} />
      </a>
    </div>
  )
}
