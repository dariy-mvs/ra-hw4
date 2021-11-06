import React from 'react'

export default function PreviewBlock(props) {
  const { img, href, linkText, previewText, altImg } = props;
  return (
    <div className="preview__block">
      <img src={img} alt={altImg} />
      <a href={href}>{linkText}</a>
      <span>{previewText}</span>
    </div>
  )
}
