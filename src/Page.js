import React from 'react';
import { Header } from './Header';
import Counter from './Counter';

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
