import React, { useContext } from 'react';
import Link from 'next/link';
import SignInContainer from '../auth/SignInContainer';
import Colors from '../../util/colors';
import { AuthContext } from '../../services/auth/AuthProvider';
import LogoutContainer from '../auth/LogoutContainer';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import SignUpContainer from '../auth/SignUpContainer';

const styles = createStyles({
  navText: {
    color: Colors.textColorPrimary,
    marginLeft: 10,
    textDecoration: 'none',
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryColor,
    minHeight: 55,
  },
  userButton: {
    margin: '0 5px',
  },
  rightActions: {
    display: 'flex',
  },
});

interface HeaderProps {}

const Header = ({ classes }: HeaderProps & WithStyles<typeof styles>) => {
  const user = useContext(AuthContext);

  return (
    <nav className={classes.navBar}>
      <div>
        <Link href="/">
          <a className={classes.navText}>Home</a>
        </Link>
        <Link href="/decks">
          <a className={classes.navText}>Decks</a>
        </Link>
        <Link href="/create">
          <a className={classes.navText}>Create Deck</a>
        </Link>
      </div>
      <div className={classes.rightActions}>
        {!user && (
          <>
            <div className={classes.userButton}>
              <SignInContainer />
            </div>
            <div className={classes.userButton}>
              <SignUpContainer />
            </div>
          </>
        )}
        {user && <LogoutContainer />}
      </div>
    </nav>
  );
};

export default withStyles(styles)(Header);
