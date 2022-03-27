import React from 'react';
import globe from '../images/path.png';

export default function Card() {
  return (
    <nav className="navbar">

        <img src={globe} />
        <h1 className="nav-header">my travel journal.</h1>

    </nav>
  )
}
