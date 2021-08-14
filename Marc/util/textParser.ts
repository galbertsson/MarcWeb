import { ClozeNote } from './Notes/ClozeNote';
import { BasicNote } from './Notes/BasicNote';
import { NoteType } from './Notes/NoteTypes';

/**
 *
 * @param {String} text The text to be parsed
 * @returns Returns a JSON array which represent the notes, invalid input will return null
 */
export function textParser(text: string, splitChar: string): (ClozeNote | BasicNote)[] {
  const rows = text.split('\n');

  let parsedNotes: (ClozeNote | BasicNote)[] = [];
  rows.forEach((row) => {
    let splittedRow = row.split(splitChar);

    //Detect Cloze Note
    if (splittedRow.length === 1) {
      parsedNotes.push({ type: NoteType.ClozeNote, text: splittedRow[0] });
    }
    //Basic Note
    else if (splittedRow.length === 2) {
      parsedNotes.push({ type: NoteType.BasicNote, front: splittedRow[0], back: splittedRow[1] });
    }
  });

  return parsedNotes;
}
