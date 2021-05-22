import { Paper } from '@material-ui/core';
import React from 'react';
import { letterCase } from '../../util/TextUtil';
import { GameType } from './gameTypes';

interface GameSelectorProps {
  onGameSelected: (gameType: GameType) => void;
}

export const GameSelector = ({ onGameSelected }: GameSelectorProps) => {
  return (
    <div>
      {Object.values(GameType).map((gameType) => (
        <Paper onClick={() => onGameSelected(gameType)}>{letterCase(gameType)}</Paper>
      ))}
    </div>
  );
};
