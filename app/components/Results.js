import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import styles from '../styles/styles.scss';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import MainContainer from '../components/MainContainer';
import Loading from '../components/Loading';

const StartOver = () =>
  <div className={classnames('col-sm-12', styles.space)}>
    <Link to='/playerOne'>
      <button className='btn btn-lg btn-danger' type='button'>Start Over</button>
    </Link>
  </div>

const Results = (props) => {
  if(props.isLoading === true) {
    return(
      <Loading speed={100} text='One Moment' />
    );
  }

  if(props.scores[0] === props.scores[1]) {
    return(
      <MainContainer>
        <h1>It's a tie</h1>
        <StartOver />
      </MainContainer>
    );
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const loserIndex = winningIndex === 0 ? 1: 0;
  return(
    <MainContainer>
      <h1>{props.header}</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <StartOver />
      </div>
    </MainContainer>
  );
}

Results.propTypes = {
  header: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
};

export default Results;
