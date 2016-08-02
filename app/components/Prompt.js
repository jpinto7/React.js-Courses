import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from '../styles/styles.scss';

const Prompt = (props) =>
  <div className={classnames('jumbotron col-sm-6 col-sm-offset-3 text-center', styles.transparentBg)}>
    <h1>{props.header}</h1>
    <div className='col-sm-12'>
      <form onSubmit={props.onSubmitUser}>
        <div className='form-group'>
          <input className='form-control' placeholder='Github Username' type='text' onChange={props.onUpdateUser} value={props.username} />
        </div>
        <div className='form-group col-sm-4 col-sm-offset-4'>
          <button className='btn btn-block btn-success' type='submit'>Continue</button>
        </div>
      </form>
    </div>
  </div>

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
}

export default Prompt;
