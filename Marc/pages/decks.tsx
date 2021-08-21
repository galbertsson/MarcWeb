import React from 'react';
import { withRouter, Router } from 'next/router';
import DeckPicker from '../components/display/DeckPicker';
import Colors from '../util/colors';
import User from '../util/User';
import Deck from '../util/Deck';
import { getDecks } from '../services/deck/Deck';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
  root: {
    backgroundColor: Colors.backgroundColor,
    minHeight: '100vh',
  },
});

interface DeckProps extends WithStyles<typeof styles> {
  router: Router;
  user: User;
}

interface DeckState {
  decks: Deck[];
}

class Decks extends React.Component<DeckProps, DeckState> {
  constructor(props: DeckProps) {
    super(props);
    this.state = {
      decks: [],
    };
  }

  componentDidMount() {
    getDecks((decks) => this.setState({ decks: decks ?? [] }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <DeckPicker decks={this.state.decks} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Decks));
