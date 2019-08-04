import React from 'react'
import Link from 'next/link'

const Header = () => {
    

    return (
        <>
            <style jsx>{`
                a {
                    margin-left: 10px;
                }
                `}</style>
            <div>
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>

                <Link href="/decks">
                    <a>
                        Decks
                    </a>
                </Link>

                <Link href="/create">
                    <a>
                        Create Deck
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Header
