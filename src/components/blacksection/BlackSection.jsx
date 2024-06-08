import React from 'react';
import './Blacksection.css';
import chef from '../../img/chef.webp';

const BlackSection = () => {
  return (
    <section className='main blacksection'>
        <div>
            <img src={chef} alt='chef'/>
        </div>
    </section>
  )
}

export default BlackSection