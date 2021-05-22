import { Paper } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import Deck, { Note } from '../../util/Deck';
import { letterCase } from '../../util/TextUtil';
import { GameSelector } from './GameSelector';
import { GameType, GameComponent, GameComponentProps } from './gameTypes';

interface GamesProps {
  deck: Deck;
}

const Games = (props: GamesProps) => {
  const { deck } = props;

  const onGameDone = useCallback<GameComponentProps['onDone']>((result) => {
    console.log('Game done!');
  }, []);
  const onGameAborted = useCallback(() => {
    console.log('Game aborted!');
  }, []);

  const [activeGameType, setActiveGameType] = useState<GameType | undefined>();

  let ActiveGameComponent;
  if (activeGameType) {
    ActiveGameComponent = GameComponent[activeGameType];
  }

  return (
    <div>
      {deck.title}
      {!ActiveGameComponent && <GameSelector onGameSelected={setActiveGameType} />}
      {ActiveGameComponent && <ActiveGameComponent onDone={onGameDone} onAbort={onGameAborted} />}
    </div>
  );
};

export default Games;
