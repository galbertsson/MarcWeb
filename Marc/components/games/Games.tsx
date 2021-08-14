import React, { useCallback, useState } from 'react';
import Deck, { Note } from '../../util/Deck';
import { letterCase } from '../../util/TextUtil';
import GameResultModal from './GameResultModal';
import { GameSelector } from './GameSelector';
import { GameType, GameComponent, GameComponentProps, GameResult } from './gameTypes';

interface GamesProps {
  deck: Deck;
}

const Games = (props: GamesProps) => {
  const { deck } = props;

  const [activeGameType, setActiveGameType] = useState<GameType | undefined>();
  const [gameResult, setGameResult] = useState<GameResult | undefined>();
  const [gameResultOpen, setGameResultOpen] = useState(false);
  const [gameKey, setGameKey] = useState(Date.now());

  const onGameDone = useCallback<GameComponentProps['onDone']>((result) => {
    setGameResult(result);
    setGameResultOpen(true);
    console.log('Game done!');
  }, []);

  const onGameAborted = useCallback(() => {
    console.log('Game aborted!');
  }, []);

  const restartGame = useCallback(() => {
    setGameKey(Date.now());
  }, []);

  const onReplay = useCallback(() => {
    setGameResultOpen(false);
    if (gameResult) {
      const newCards = gameResult.cards.map((card) => {
        const cardCopy = { ...card };

        if (card.correctlyAnswered === false) {
          cardCopy.correctlyAnswered = undefined; // Set the state back to prestine
        }

        return cardCopy;
      });

      setGameResult({ cards: newCards });
    }

    restartGame();
  }, [gameResult, restartGame]);

  const onRestart = useCallback(() => {
    setGameResult(undefined);
    restartGame();
  }, [restartGame]);

  let ActiveGameComponent;
  if (activeGameType) {
    ActiveGameComponent = GameComponent[activeGameType];
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {deck.title}
      {!ActiveGameComponent && <GameSelector onGameSelected={setActiveGameType} />}
      {ActiveGameComponent && (
        <ActiveGameComponent
          onDone={onGameDone}
          onAbort={onGameAborted}
          deck={deck}
          startData={gameResult}
          key={gameKey}
        />
      )}
      {gameResult && gameResultOpen && (
        <GameResultModal onReplay={onReplay} onRestart={onRestart} gameResult={gameResult} />
      )}
    </div>
  );
};

export default Games;
