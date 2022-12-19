import React from 'react';

import '../components/Page.scss'

const Fandoms = () => {
  return (
    <React.Fragment>
      <h1>Fandoms</h1>
      <div className="content">
        <p>
          If you don't really like these,
          I don't think we'll get along very well.
        </p>
        <h3>Primary</h3>
        <ul className='primary'>
          <li>Ace Attorney</li>
          <li>BTS</li>
          <li>Final Fantasy XIV</li>
          <li>The Great Ace Attorney</li>
        </ul>
        <h3>Secondary</h3>
        <ul className='columns'>
          <li>Acca 13</li>
          <li>Acid Town</li>
          <li>Aldnoah.Zero</li>
          <li>Avatar: The Last Airbender</li>
          <li>Batman and the Bat Family</li>
          <li>Black Butler</li>
          <li>Code Geass</li>
          <li>Delicious in Dungeon</li>
          <li>Detective Lupin</li>
          <li>Fire Emblem: Awakening</li>
          <li>Fire Emblem: Fates</li>
          <li>Fullmetal Alchemist</li>
          <li>Free!</li>
          <li>Gundam</li>
          <li>Haikyuu!!</li>
          <li>Hoshiai no Sora</li>
          <li>How to Train Your Dragon</li>
          <li>Hunter x Hunter</li>
          <li>Jujutsu Kaisen</li>
          <li>Kill La Kill</li>
          <li>Legend of Korra</li>
          <li>Mawaru Penguindrum</li>
          <li>Noragami</li>
          <li>Reborn!</li>
          <li>Parks and Recreation</li>
          <li>Pokemon</li>
          <li>Promare</li>
          <li>Psycho Pass</li>
          <li>Sk8: The Infinity</li>
          <li>Yu-Gi-Oh 5Ds</li>
          <li>Yu-Gi-Oh VRAINs</li>
          <li>Yuri on Ice!!!</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Fandoms
