import React, {cloneElement} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import animations from '../styles/animations.scss';

const Main = (props) =>
  <div className='main-container'>
    <ReactCSSTransitionGroup
      transitionName={animations}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {cloneElement(props.children, {key: props.location.pathname})}
    </ReactCSSTransitionGroup>
  </div>

export default Main;
