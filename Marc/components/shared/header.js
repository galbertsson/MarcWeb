import React from 'react'
import Link from 'next/link'

import Colors from '../../util/colors'

const Header = () => {
    
    return (
        <>
            <style jsx>{`
                .nav-text {
                    color: ${Colors.textColorPrimary} !important; /*Needed to overwrite bootstrap*/
                }
                #navbar{
                    background-color: ${Colors.primaryColor};
                    min-height: 55px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
                `}</style>
            <nav className="nav align-items-center col-md-12" id="navbar">
                <Link href="/">
                    <a className="nav-link nav-text">
                        Home
                    </a>
                </Link>
                <Link href="/decks">
                    <a className="nav-link nav-text">
                        Decks
                    </a>
                </Link>
                <Link href="/create">
                    <a className="nav-link nav-text">
                        Create Deck
                    </a>
                </Link>
                <a href="#" className="nav-link nav-text ml-auto">
                    Login
                </a>
                <a href="#" className="nav-link nav-text">
                    Register
                </a>
            </nav>
        </>
    )
}

export default Header
