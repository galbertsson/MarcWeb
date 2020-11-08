import React from 'react'
import Link from 'next/link'
import Colors from '../../util/colors'
import Deck from '../../util/Deck'

interface BasicDeckPros {
    deck: Deck
}

const BasicDeck = ({ deck }: BasicDeckPros) => (
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
        <Link href={`/edit/[id]`} as={`/edit/${deck._id}`}>
            <a>
                <div className={'deck'}>
                    {deck.title}
                    <br />
                    {deck.notes?.length ?? 0} {deck.notes?.length !== 1 ? 'notes' : 'note'}
                </div>
            </a>
        </Link>
    </>
)

export default BasicDeck