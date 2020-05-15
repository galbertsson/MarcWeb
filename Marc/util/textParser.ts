import ClozeNote from "./ClozeNote";
import BasicNote from "./BasicNote";

/**
 * 
 * @param {String} text The text to be parsed
 * @returns Returns a JSON array which represent the notes, invalid input will return null
 */
export function textParser(text: string, splitChar: string): (ClozeNote | BasicNote)[] {

    let rows = text.split("\n")

    let parsedNotes: (ClozeNote | BasicNote)[] = []
    rows.forEach(row => {
        let splittedRow = row.split(splitChar)

        //Detect Cloze Note
        if (splittedRow.length === 1) {
            parsedNotes.push(new ClozeNote(splittedRow[0]))
        }
        //Basic Note
        else if (splittedRow.length === 2) {
            parsedNotes.push(new BasicNote(splittedRow[0], splittedRow[1]))
        }
    });

    return parsedNotes;
}