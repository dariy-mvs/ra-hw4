import React from 'react';

export default function SearchText(props) {
  const phrase = props.phrase
  return (
    <div className="search__text">
      <span>Найдётся всё. Например, </span><span className="searchPhrase">{phrase}</span>
    </div>
  )
}
