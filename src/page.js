import React from 'react';
import { Header } from './header';
import Counter from './counter';

export default function () {
  const name = 'Johhn';
  return (
    <>
      <Header name={name} />
      <p> Hey</p>
      <p>Hi</p>
      <Counter />
    </>
  );
}
