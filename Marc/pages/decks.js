import React from 'react';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router'
import DeckPicker from '../components/display/deckPicker';
import Colors from '../util/colors'

class Decks extends React.Component {

    constructor(props){
        super(props)
        this.state = {decks : []}
    }

    fetchDecks(){
      return new Promise((resolve, reject) =>{
        this.props.user.getIdToken()
        .then((token) => fetch("http://localhost:8080/decks/basic", {
          method : 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }))
        .then((res) => res.json())
        .then((data) => resolve(data))
      })
    }

    componentDidMount(){
      if(this.props.user){
        this.fetchDecks()
        .then((jsonRes) => this.setState({decks : jsonRes}))
      }
    }

    componentDidUpdate(prevProps){
      if(this.props.user && !prevProps.user){
        this.fetchDecks()
        .then((jsonRes) => this.setState({decks : jsonRes}))
      }
    }

    render(){
      let testDecks =
        [
          {title: "T1", id:1},
          {title: "T2", id:2},
          {title: "T3", id:3},
          {title: "T4", id:4},
          {title: "T5", id:5},
          {title: "T6", id:6},
        ]

    return <>
        <style jsx>{`
        .root{
            background-color: ${Colors.backgroundColor};
            min-height: 100vh;
        }
        `}
        </style>

        <div className="row root">
            <DeckPicker decks={testDecks} />
        </div>
    </>
    }
}

export default withRouter(Decks);