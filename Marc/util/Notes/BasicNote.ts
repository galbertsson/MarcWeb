import { NoteType } from './NoteTypes';

export interface BasicNote {
  type: NoteType.BasicNote;
  front: string;
  back: string;
}

export function generateCards(note: BasicNote) {
  return [{ front: note.front, back: note.back }];
}
