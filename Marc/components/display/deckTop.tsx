import React from 'react'
import colors from '../../util/colors';

const DeckTop = () => {
    return (
        <div id="top">
            <style jsx>{`
            #top {
                height: 55px;
                background-color: ${colors.textBackground};
                z-index: 2;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin: 0;
            }    
            `}</style>
            Deck Overview
        </div>
    )
}

export default DeckTop
