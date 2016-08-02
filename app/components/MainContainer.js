import React from 'react';
import classnames from 'classnames';
import styles from '../styles/styles.scss';

const MainContainer = (props) =>
  <div className={classnames('jumbotron col-sm-12 text-center', styles.transparentBg)}>
    {props.children}
  </div>

export default MainContainer;
