import React, {Component, PropTypes} from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: []
    };
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }

  componentDidMount() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) =>
        this.setState(
          {
            isLoading: false,
            playersInfo: players
          }
        )
      );
  }

  handleInitiateBattle(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });

  }

  render() {
    return(
      <ConfirmBattle
      	header = {this.props.route.header}
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ConfirmBattleContainer;
