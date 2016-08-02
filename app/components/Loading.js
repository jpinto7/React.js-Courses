import React, {Component, PropTypes} from 'react';
import styles from '../styles/styles.scss';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.originalText = props.text;
    this.state = {
      text: this.originalText
    };
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div className={styles.container}>
        <p className={styles.content}>{this.state.text}</p>
      </div>
    );
  }
}

Loading.propTypes = {
  speed: PropTypes.number,
  text: PropTypes.string
};

Loading.defaultProps = {
  speed: 300,
  text: 'Loading'
};

export default Loading;
