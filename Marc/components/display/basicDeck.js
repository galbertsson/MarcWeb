import React from 'react'
import Link from 'next/link'
import Colors from '../../util/colors'


const BasicDeck = ({deck}) => (
    <>
        <style jsx>{`
            .deck {
                background-color: ${Colors.textBackground};
                width: 430px;
                height: 250px;
                margin: 10px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        <Link href={`/edit/${deck.id}`}>
            <a>
                <div className={'deck'}>    
                    {deck.title}
                    <br/>
                    {deck.nrNotes} {deck.nrNotes !== 1 ? "notes" : "note"}
                </div>
            </a>
        </Link>
    </>
)

export default BasicDeck