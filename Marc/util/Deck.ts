import { BasicNote } from './Notes/BasicNote';
import { ClozeNote } from './Notes/ClozeNote';

export type Note = ClozeNote | BasicNote;
export interface Card {
  front: string;
  back: string;
}

class Deck {
  _id: string;
  title: string;
  notes: Note[];

  constructor(id: string, title: string, notes: (ClozeNote | BasicNote)[]) {
    this._id = id;
    this.title = title;
    this.notes = notes;
  }
}

export default Deck;
