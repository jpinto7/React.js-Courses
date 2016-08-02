import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import styles from '../styles/styles.scss';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import UserDetails from '../components/UserDetails';
import MainContainer from '../components/MainContainer';
import Loading from '../components/Loading';

const ConfirmBattle = (props) =>
  props.isLoading === true
  	? <Loading speed={800} text='Waiting' />
  	: <MainContainer>
  		  <h1>{props.header}</h1>
    		<div className='col-sm-8 col-sm-offset-2'>
    		  <UserDetailsWrapper header='Player One'>
    		    <UserDetails info={props.playersInfo[0]} />
    		  </UserDetailsWrapper>
    		  <UserDetailsWrapper header='Player Two'>
    		    <UserDetails info={props.playersInfo[1]} />
    		  </UserDetailsWrapper>
    		</div>
    		<div className='col-sm-8 col-sm-offset-2'>
    		  <div className={classnames('col-sm-12', styles.space)}>
    		    <button className='btn btn-lg btn-success' type='button' onClick={props.onInitiateBattle}>Initiate Battle!</button>
    		  </div>
    		  <div className={classnames('col-sm-12', styles.space)}>
    		  	<Link to='/playerOne'>
    		  	  <button className='btn btn-lg btn-danger' type='button'>Reselect Players</button>
    		    </Link>
    		  </div>
    		</div>
  	  </MainContainer>

ConfirmBattle.propTypes = {
  header: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};

export default ConfirmBattle;
