import React from 'react';
import DeckCreationContainer from '../components/creation/DeckCreationContainer';
import { ClozeNote } from '../util/Notes/ClozeNote';
import { BasicNote } from '../util/Notes/BasicNote';
import { createDeck } from '../services/deck/Deck';

interface CreateProps {}

const callback = (title: string, notes: (ClozeNote | BasicNote)[]) => {
  createDeck(title, notes);
};

const create = ({}: CreateProps) => {
  return (
    <div>
      <DeckCreationContainer context="create" callback={(title, notes) => callback(title, notes)} />
    </div>
  );
};

export default create;
