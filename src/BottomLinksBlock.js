import React from 'react'

export default function BottomLinksBlock(props) {
  const { title, href } = props
  return (
    <div>
      <a href={href}>{title}</a>
      <div className="bottom__wrapper">
        {props.children}
      </div>
    </div>
  )
}
