
import React from 'react';

export default function Album(props) {
  return <ul key={props.id}>
      <li fontSize="18px">{props.title}</li>
      <li fontSize="9px">{props.userId}</li>
  
  </ul>;
}
