import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../lib/context/user';

import Ideas from './Ideas';


const Home = () => {
  const user = useUser();

  return (
    <>
      <div className='home-container'>
        {user.current ? (
          <>
            <section className='ideas-container-section'>
              <h2>Latest Ideas</h2>
              <Ideas />
            </section>
          </>
        ) : (
          <section className='login-to-container'>
            <h2>Please login to submit an idea</h2>
            <p><Link to="/login">Login or Register</Link></p>
          </section>
        )}
      </div>
    </>
  )
}

export default Home;