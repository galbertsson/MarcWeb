import React from 'react'
import Link from 'next/link'
import Colors from '../../util/colors'
import Deck from '../../util/Deck'
import { createStyles, Paper, withStyles, WithStyles } from '@material-ui/core';

interface BasicDeckPros {
    deck: Deck
}

const styles = createStyles({
    deck: {
        maxWidth: 430,
        width: '100%',
        height: 250,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const BasicDeck = ({ deck, classes }: BasicDeckPros & WithStyles<typeof styles>) => (
    <Link href={`/edit/[id]`} as={`/edit/${deck._id}`}>
        <a className={classes.deck}>
            <Paper className={classes.paper}>
                {deck.title}
                <br />
                {deck.notes?.length ?? 0} {deck.notes?.length !== 1 ? 'notes' : 'note'}
            </Paper>
        </a>
    </Link>
);

export default withStyles(styles)(BasicDeck)