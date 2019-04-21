// import React, {Component} from 'react'
// import axios from 'axios'

// // https://api.myfantasyleague.com/$2019/login?USERNAME=$username&PASSWORD=$password&XML=1
// // https://api.myfantasyleague.com/2019/export?TYPE=players&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&JSON=1
// // https://api.myfantasyleague.com/2019/export?TYPE=players&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&JSON=1

// // const API = 'https://api.myfantasyleague.com/2019/export?TYPE=players&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&DETAILS=1&SINCE=1514764800&PLAYERS=&JSON=1'
// const API = 'https://api.myfantasyleague.com/2019/export?TYPE=leagueStandings&L=14957&APIKEY=bBJv2MiVvuKmx1emOV3IZDUeF7ox&JSON=1'
// const DEFAULT_QUERY = 'redux'

// class APIDataFetch extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: [],
//       leagueStandings: [],
//       error: null,
//       isLoaded: false
//     }
//   }

//   // EXAMPLE FETCH
//   // getDataFromDb = () => {
//   //   fetch("http://localhost:3001/api/getData")
//   //     .then(data => data.json())
//   //     .then(res => this.setState({ data: res.data }));
//   // };

//   componentDidMount(data = {}) {
//   //   fetch(API, {
//   //     method: 'GET',
//   //     // body: JSON.stringify(data),
//   //     mode: 'no-cors',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       'html-mime-type': 'text/html',
//   //       'json': 'application/json',
//   //       'text': 'text/html',
//   //       'Access-Control-Allow-Origin': '*',
//   //       }
//   //     })
//   //     .then(response => response.json())
//   //     .then(response => console.log('--Success: ', JSON.stringify(response)))
//   //     .catch(error => console.error('--Error: ', error))
//   //     .then(
//   //       (data => {
//   //         this.setState({
//   //           data,
//   //           isLoaded: true,
//   //           // leagueStandings: data.leagueStandings
//   //         })
//   //       },
//   //       (error) => {
//   //         this.setState({
//   //           isLoaded: true,
//   //           error
//   //         })
//   //       })
//   //     )
//       // .then((response) => {
//       //   if (response.status === 200) {
//       //     return response.json()
//       //   }
//       //   return null
//       // })
//       // .then(data => this.setState({ players: data.players }))
//       // .then((data) => {
//       //   this.setState({
//       //     isLoaded: true,
//       //     leagueStandings: data.players
//       //   })
//       // })

//     // axios.get(API, {
//     //   method: 'POST',
//     //   mode: 'no-cors',
//     //   body: JSON.stringify({data}),
//     //   headers: {
//     //     'Accept': 'application/json',
//     //     'Content-Type': 'application/json',
//     //     // 'Authorization': 'test',
//     //     // 'html-mime-type': 'text/html',
//     //     // 'json': 'application/json',
//     //     // 'text': 'text/html',
//     //     'Access-Control-Allow-Origin': '*',
//     //   }
//     // })
//     // .then(response => console.log(response))
//     // .then(response =>
//     //   response.data.results.map(leagueStandings => ({
//     //     franchise: leagueStandings.franchise,
//     //   }))
//     // )
//     // .then(results => this.setState({
//     //   results,
//     //   isLoading: false
//     //   // players: results.data.players
//     // }))
//     // .catch(error => this.setState({ error, isLoading: false }))
//  }

//   render() {
//     const { error, isLoaded, leagueStandings } = this.state
//     if (error) {
//       return <div>Error: {error.message}</div>
//       } else if (!isLoaded) {
//         return <div>Loading...</div>
//       } else {
//       return (
//         <div/>
//         // <ul>
//         //   {leagueStandings.map(franchise => (
//         //     <li key={franchise.h2hl}>
//         //       <h1>Hiiiiii</h1>
//         //     </li>
//         //     ))}
//         // </ul>
//       )
//     }
//     // return (
//     //   <ul>
//     //     {players.map(player =>
//     //       <li key={player.objectID}>
//     //         <h1>{player.position}</h1>
//     //       </li>
//     //       )}
//     //   </ul>
//     // )
//   }
// }

// export default APIDataFetch