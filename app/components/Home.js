import React from 'react';
import {Link} from 'react-router';
import MainContainer from '../components/MainContainer';

const Home = () =>
  <MainContainer>
    <h1>Github Battle</h1>
    <p className='leader'>An epic battle</p>
    <Link to='/playerOne'>
      <button className='btn btn-lg btn-success' type='button'>Get Started</button>
    </Link>
  </MainContainer>

export default Home;
