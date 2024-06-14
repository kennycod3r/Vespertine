import React, { Suspense } from 'react';
import ErrorBoundary from '../Errorboundary/ErrorBoundary'; // Correct import path
import './Blacksection.css';


//import chef from '../../img/chef.webp';
import blackWhite from '../../img/blackWhite.webp';
import dinnerF from '../../img/dinnerF.webp';

const BlackSection = ({dinner}) => {
  return (
    <ErrorBoundary>
      <section className='main blacksection'>
        <div className="header-text footer-header">
          <h2>Better Experiences</h2>
          <h2>since<i>“17”.</i></h2>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <img src={dinner ? dinnerF : blackWhite} alt='black and white' loading="lazy" />
          </Suspense>
        </div>
        <div className='white-cutaway'>
          <p className='boldp'>{dinner ? "viewsocials" :"vespertine"}</p>
          <div className='white-cutaway-inner'></div>
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default BlackSection;

