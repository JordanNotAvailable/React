import React from 'react';
import './Gamebar.css';

export default function Gamebar() {
  return (
    <>
      <aside className="solo-panel">
        <a href="#">Solo</a>
      </aside>
      
      <aside className="multiplayer-panel">
      <a href="#">Multiplayer</a>
    </aside>
    </>
  )
}