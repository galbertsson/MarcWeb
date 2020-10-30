import BasicNote from "../../util/BasicNote";

test('Basic Note', () => {
    let note = new BasicNote("Bob", "Ed")
    
    expect(note.type).toStrictEqual("basicNote")
    expect(note.front).toStrictEqual("Bob")
    expect(note.back).toStrictEqual("Ed")
});