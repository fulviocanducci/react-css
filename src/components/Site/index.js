import React, { useState } from 'react';

import './index.css';
import img1 from './img/lobo1.jpg';
import img2 from './img/lobo1.jpg';
import img3 from './img/lobo1.jpg';
import img4 from './img/lobo1.jpg';

function Section({ name, imgs, css }) {
  return (
    <>
      <h1>{name}</h1>
      <section className={css}>
        {imgs.map((img, index) => (
          <div key={index}>
            <img src={img.photo} border="0" alt="" />
            <p>Legenda</p>
          </div>
        ))}
      </section>
    </>
  );
}

function Site() {
  const [imgs] = useState([
    {
      photo: img1,
    },
    {
      photo: img2,
    },
    {
      photo: img3,
    },
    {
      photo: img4,
    },
    {
      photo: img1,
    },
    {
      photo: img2,
    },
  ]);
  return (
    <>
      <header className="header">
        <a href="/">Logo</a>
        <nav>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
      <Section name="Section Flexbox" imgs={imgs} css="flex" />
    </>
  );
}

export default Site;
