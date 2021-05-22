import { Note } from '../../util/Deck';
import { FlashCardGame } from './flashCard/FlashCardGame';
import { QuizGame } from './quiz/QuizGame';

export enum GameType {
  FlashCard = 'flash_card',
  Quiz = 'quiz',
}

interface GameResult {
  cards: Note & { correctlyAnswered: boolean };
}

export interface GameComponentProps {
  onDone: (result: GameResult) => void;
  onAbort: () => void;
}

export const GameComponent = {
  [GameType.FlashCard]: FlashCardGame,
  [GameType.Quiz]: QuizGame,
};
