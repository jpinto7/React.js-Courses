import React, {cloneElement} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from '../styles/main.css';

const Main = (props) =>
  <div className='main-container'>
    <ReactCSSTransitionGroup
      transitionName={styles}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {cloneElement(props.children, {key: props.location.pathname})}
    </ReactCSSTransitionGroup>
  </div>

export default Main;
