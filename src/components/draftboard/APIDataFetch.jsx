import React, {Component} from 'react'
import axios from 'axios'

// https://api.myfantasyleague.com/$2019/login?USERNAME=$username&PASSWORD=$password&XML=1
// https://api.myfantasyleague.com/2019/export?TYPE=players&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&JSON=1
// https://api.myfantasyleague.com/2019/export?TYPE=players&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&JSON=1

// const API = 'https://api.myfantasyleague.com/2019/export?TYPE=players&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&DETAILS=1&SINCE=1514764800&PLAYERS=&JSON=1'
const API = 'https://api.myfantasyleague.com/2019/export?TYPE=leagueStandings&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&JSON=1'
const DEFAULT_QUERY = 'redux'

class APIDataFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagueStandings: [],
      error: null,
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(API, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin'
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            leagueStandings: result.leagueStandings
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
      // .then((response) => {
      //   if (response.status === 200) {
      //     return response.json()
      //   }
      //   return null
      // })
      // .then(data => this.setState({ players: data.players }))
      // .then((data) => {
      //   this.setState({
      //     isLoaded: true,
      //     leagueStandings: data.players
      //   })
      // })

    // axios.get(API, {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
    //   withCredentials: true,
    //   credentials: 'same-origin'
    // })
    // .then(results => this.setState({
    //   players: results.data.players
    // }))
    // .catch(error => this.setState({
    //   error,
    // }))
  }

  render() {
    const { error, isLoaded, leagueStandings } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
      return (
        <div leagueStandings={leagueStandings}/>
        // <ul>
        //   {leagueStandings.map(franchise => (
        //     <li key={franchise.h2hl}>
        //       <h1>Hiiiiii</h1>
        //     </li>
        //     ))}
        // </ul>
      )
    }
    // return (
    //   <ul>
    //     {players.map(player =>
    //       <li key={player.objectID}>
    //         <h1>{player.position}</h1>
    //       </li>
    //       )}
    //   </ul>
    // )
  }
}

export default APIDataFetch