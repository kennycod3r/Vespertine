import React from 'react';
import './Blacksection.css';
import chef from '../../img/chef.webp';
import blackWhite from '../../img/blackWhite.webp';

const BlackSection = () => {
  return (
    <section className='main blacksection'>
      <div className="header-text footer-header">
          <h2>Better Experiencees</h2>
          <h2>
            since<i>“17”.</i>
          </h2>
        </div>
        <div>
            <img src={blackWhite} alt='chef'/>
        </div>
        <div className='white-cutaway'>
          <p className='boldp'>vespertine</p>
          <div className='white-cutaway-inner'>
          </div>
        </div>
    </section>
  )
}

export default BlackSection