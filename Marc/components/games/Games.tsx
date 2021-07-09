import React, { useCallback, useState } from 'react';
import Deck, { Note } from '../../util/Deck';
import { letterCase } from '../../util/TextUtil';
import { GameSelector } from './GameSelector';
import { GameType, GameComponent, GameComponentProps, GameResult } from './gameTypes';

interface GamesProps {
  deck: Deck;
}

const Games = (props: GamesProps) => {
  const { deck } = props;

  const [activeGameType, setActiveGameType] = useState<GameType | undefined>();
  const [gameResult, setGameResult] = useState<GameResult | undefined>();

  const onGameDone = useCallback<GameComponentProps['onDone']>((result) => {
    setGameResult(result);
    console.log('Game done!');
  }, []);

  const onGameAborted = useCallback(() => {
    console.log('Game aborted!');
  }, []);

  let ActiveGameComponent;
  if (activeGameType) {
    ActiveGameComponent = GameComponent[activeGameType];
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column',  }}>
      {deck.title}
      {!ActiveGameComponent && <GameSelector onGameSelected={setActiveGameType} />}
      {ActiveGameComponent && <ActiveGameComponent onDone={onGameDone} onAbort={onGameAborted} deck={deck} />}
      {gameResult && 'We have result!'}
    </div>
  );
};

export default Games;
