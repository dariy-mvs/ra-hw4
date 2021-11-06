import React from 'react';

export default function ValuteItem(props) {
  const { valute, value, classString, corr } = props;
  return (
    <li className={classString}>
      <span className="valuteName">{valute}</span>
      <span className="valuteValue">{value} руб.</span>
      <span className="valuteCorr">{corr}</span>
    </li>
  )
}
