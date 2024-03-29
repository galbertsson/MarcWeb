import Deck, { Card } from '../../util/Deck';
import FlashCardGame from './flashCard/FlashCardGame';
import QuizGame from './quiz/QuizGame';

export enum GameType {
  FlashCard = 'flash_card',
  Quiz = 'quiz',
}

export interface GameResult {
  cards: (Card & { correctlyAnswered?: boolean, answerAlternatives?: string[] })[];
}

export interface GameComponentProps {
  deck: Deck;
  startData?: GameResult;
  onDone: (result: GameResult) => void;
  onAbort: () => void;
}

export const GameComponent = {
  [GameType.FlashCard]: FlashCardGame,
  [GameType.Quiz]: QuizGame,
};
