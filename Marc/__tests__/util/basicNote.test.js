import BasicNote from "../../util/BasicNote";

test('Basic Note', () => {
    let note = new BasicNote("Bob", "Ed")
    
    expect(note.type).toStrictEqual("BasicNote")
    expect(note.properties.front).toStrictEqual("Bob")
    expect(note.properties.back).toStrictEqual("Ed")
});