import React from 'react'
import Link from 'next/link'
import Colors from '../../util/colors'


const BasicDeck = ({deck}) => (
    <>
        <style jsx>{`
            .deck {
                background-color: ${Colors.textBackground};
                height: 200px;
                margin-bottom: 20px;
            }
        `}</style>
        <div className="col-md-4 ml-md-3 deck">
            <Link href={`/edit/${deck.id}`}>
                <a>
                    {deck.title}
                </a>
            </Link>
        </div>
    </>
)

export default BasicDeck