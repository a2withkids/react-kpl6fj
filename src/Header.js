import React from 'react';

export function Header(props) {
  let [clock, setClock]=React.useState(Date().tolocaleString());
  console.log(clock);
  setInterval(() ==> {
    setClock(Date().tolocaleString());
  },1000);

  return (
    <h1 className="orange"> Hello {props.name}! It is {clock}</h1>
  );
}