import React from 'react';
import DeckCreationContainer from '../components/creation/deckCreationContainer';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router'

class Edit extends React.Component {

    constructor(props){
        super(props)

        this.state = {data : {title : "", notes : []}}

        this.callback = this.callback.bind(this)
        this.fetchDeck = this.fetchDeck.bind(this)
    }

    /**
     * @param {string} title The title of the deck being created
     * @param {Array} notes The notes in the deck
     */
    callback(title, notes){
        this.props.user.getIdToken()
        .then((token) => 
            fetch("http://localhost:8080/decks/edit", {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body : JSON.stringify({
                id : this.props.data.id,
                title : title,
                notes : notes})
            }))
        .then(() => console.log("Got it!"))
    }

    fetchDeck(){
        return new Promise((resolve, reject) =>{this.props.user.getIdToken()
        .then((token) => 
            fetch(`http://localhost:8080/decks/${this.props.id}`, {
                method : 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        )
        .then((res) => res.json())
        .then((data) => resolve(data))
        })
    }

    componentDidMount(){
        if(this.props.user){
          this.fetchDeck()
          .then((jsonRes) => this.setState({data : jsonRes}))
        }
      }
  
    componentDidUpdate(prevProps){
    if(this.props.user && !prevProps.user){
        this.fetchDeck()
        .then((jsonRes) => this.setState({data : jsonRes}))
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
            <DeckCreationContainer title={this.state.data.title} notes={this.state.data.notes} callback={this.callback}/>
        </div>
    </>
    }

    static async getInitialProps(context){
        return {
          id : context.query.id
        }
    }
}

export default withRouter(Edit);

