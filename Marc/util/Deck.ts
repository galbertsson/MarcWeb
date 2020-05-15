import ClozeNote from "./ClozeNote";
import BasicNote from "./BasicNote";

class Deck {
    id: string
    title: string
    notes: (ClozeNote|BasicNote)[]

    constructor(id: string, title: string, notes: (ClozeNote | BasicNote)[]) {
        this.id = id;
        this.title = title;
        this.notes = notes;
    }
}

export default Deck;