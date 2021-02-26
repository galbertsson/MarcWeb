import React from 'react';
import BasicDeck from './BasicDeck';
import Deck from '../../util/Deck';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import SubHeader from '../shared/SubHeader';

const styles = createStyles({
  picker: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

interface DeckPickerProps extends WithStyles<typeof styles> {
  decks: Deck[];
}

const DeckPicker = ({ decks, classes }: DeckPickerProps) => {
  return (
    <div>
      <SubHeader leftData="Deck Overview" />
      <div className={classes.picker}>
        {decks.map((deck) => (
          <BasicDeck key={deck._id} deck={deck} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(DeckPicker);
