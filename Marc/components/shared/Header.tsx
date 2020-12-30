import React, { useContext } from 'react'
import Link from 'next/link'
import SigninContainer from '../auth/SignInContainer'
import Colors from '../../util/colors'
import Signup from '../auth/Signup'
import { AuthContext } from '../../services/auth/AuthProvider';
import LogoutContainer from '../auth/LogoutContainer'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

const styles = createStyles({
    navText: {
        color: Colors.textColorPrimary,
        marginLeft: 10,
        textDecoration: 'none'
    },
    navBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.primaryColor,
        minHeight: 55
    }
});

interface HeaderProps {

}

const Header = ({ classes }: HeaderProps & WithStyles<typeof styles>) => {
    const user = useContext(AuthContext);

    return (
        <nav className={classes.navBar}>
            <div>
                <Link href="/">
                    <a className={classes.navText}>
                        Home
                        </a>
                </Link>
                <Link href="/decks">
                    <a className={classes.navText}>
                        Decks
                        </a>
                </Link>
                <Link href="/create">
                    <a className={classes.navText}>
                        Create Deck
                        </a>
                </Link>
            </div>
            <div>
                {!user && <>
                    <SigninContainer />
                    <Signup />
                </>
                }
                {user &&
                    <LogoutContainer />
                }

            </div>
        </nav>
    )
}

export default withStyles(styles)(Header)
