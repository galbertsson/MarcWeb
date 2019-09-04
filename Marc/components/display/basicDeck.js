import React from 'react'
import Link from 'next/link'
import Colors from '../../util/colors'


const BasicDeck = ({deck}) => (
    <>
        <style jsx>{`
            .deck {
                background-color: ${Colors.textBackground};
                height: 200px;
                width: 200px;
                margin-bottom: 20px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        `}</style>
            <Link href={`/edit/${deck.id}`}>
                <a>
                    {deck.title}
                    <br/>
                    {deck.nrNotes} {deck.nrNotes !== 1 ? "notes" : "note"}
                </a>
            </Link>
    </>
)

export default BasicDeck