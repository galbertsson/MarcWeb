import React from 'react'
import Link from 'next/link'
import SigninContainer from '../auth/signInContainer'
import Colors from '../../util/colors'

const Header = ({firebase}) => {
    return (
        <>
            <style jsx>{`
                .nav-text {
                    color: ${Colors.textColorPrimary};
                    margin-left: 10px;
                    text-decoration: none;
                }
                #navbar{
                    display: flex;
                    align-items: center;
                    justify-content: space-between; 
                    background-color: ${Colors.primaryColor};
                    min-height: 55px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
                .nav-end{
                    
                }
                .end{

                }
                `}</style>
            <nav id="navbar">
                <div className="start">
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
                </div>
                <div className="end">
                    <SigninContainer firebase={firebase}/>
                    <a href="#" className="nav-link nav-text">
                        Register
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header
