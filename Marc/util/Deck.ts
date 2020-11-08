import ClozeNote from "./ClozeNote";
import BasicNote from "./BasicNote";

class Deck {
    _id: string
    title: string
    notes: (ClozeNote|BasicNote)[]

    constructor(id: string, title: string, notes: (ClozeNote | BasicNote)[]) {
        this._id = id;
        this.title = title;
        this.notes = notes;
    }
}

export default Deck;