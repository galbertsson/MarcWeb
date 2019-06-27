import ClozeNote from "../../util/ClozeNote";

test('Cloze Note', () => {
    let note = new ClozeNote("[a::Hello] Bob")
    
    expect(note.type).toStrictEqual("ClozeNote")
    expect(note.properties.text).toStrictEqual("[a::Hello] Bob")
});