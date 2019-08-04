import React from 'react';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router'
import DeckPicker from '../components/display/deckPicker';

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
    return <>
        <style jsx>{`
        .style{
            color: green;
        }
        `}
        </style>

        <div>
            <DeckPicker decks={this.state.decks} />
        </div>
    </>
    }
}

export default withRouter(Decks);