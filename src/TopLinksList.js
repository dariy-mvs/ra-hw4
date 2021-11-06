import React from 'react';
import TopLinkItem from './TopLinkItem';

export default function TopLinksList(props) {
  return (
    <ul className={props.classString}>
      {props.children}
    </ul>
  )
}
