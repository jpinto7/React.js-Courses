import React, {Component, PropTypes} from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      scores: []
    };
  }

  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then((scores) =>
        this.setState(
          {
            isLoading: false,
            scores: scores
          }
        )
      );
  }

  render() {
    return(
      <Results
        header={this.props.route.header}
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    );
  }
}

export default ResultsContainer;
