import { generateCards as generateClozeCards } from './ClozeNote';
import { generateCards as generateBasicCards } from './BasicNote';
import { Note } from '../Deck';
import { NoteType } from './NoteTypes';

export function generateCards(note: Note) {
  if (note.type === NoteType.BasicNote) {
    return generateBasicCards(note);
  } else if (note.type === NoteType.ClozeNote) {
    return generateClozeCards(note);
  }

  return [];
}
