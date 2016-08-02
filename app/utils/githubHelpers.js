import axios from 'axios';

const CLIENT_ID = '55de716f84fd2319340c';
const CLIENT_SECRET = 'ec3ee3b69174e9c93104471ff89342a1181660b7';

const params = '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET;

const getUserInfo = (username) =>
  axios.get('https://api.github.com/users/' + username + params);


const getRepos = (username) =>
  axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');

const getTotalStars = (repos) =>
  repos.data.reduce((prev, current) =>
    prev + current.stargazers_count
  , 0);
 
const getPlayerData = (player) =>
  getRepos(player.login)
  	.then(getTotalStars)
  	.then((totalStars) => (
	   {
	     followers: player.followers,
	     totalStars: totalStars  	
	   }
  	 )
  	);

const calculateScores = (players) => (
  [
	players[0].followers * 3 + players[0].totalStars,
	players[1].followers * 3 + players[1].totalStars
  ]
)
  
const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(username =>
      getUserInfo(username))
    ).then((info) =>
      info.map(u => u.data)
    ).catch((err) =>
      console.warn('Error in getPlayersInfo', err)
    )
  },
  battle(players) {
	const playerOneData = getPlayerData(players[0]);
	const playerTwoData = getPlayerData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) =>
        console.warn('Error in battle', err)
      )	  
  }
};

export default helpers;
