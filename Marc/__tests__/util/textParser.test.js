let textParser = require("../../util/textParser")
import BasicNote from "../../util/BasicNote"
import ClozeNote from "../../util/ClozeNote"

test('Basic Note', () => {
    let input = "Bob - Ed"

    expect(textParser.textParser(input, " - ")).toStrictEqual([new BasicNote("Bob", "Ed")]);
});

test('Cloze Note', () => {
    let input = "[a::Hello] Bob"

    expect(textParser.textParser(input, " - ")).toStrictEqual([new ClozeNote("[a::Hello] Bob")]);
});

test('Multiple Basic Notes', () => {
    let input = "Bob - Ed\nYes - No"

    expect(textParser.textParser(input, " - ")).toStrictEqual([new BasicNote("Bob", "Ed"), new BasicNote("Yes", "No")]);
});

test('Multiple Cloze Notes', () => {
    let input = "[a::Hello] Bob\n[a::Hello], what is [b::hej]"

    expect(textParser.textParser(input, " - ")).toStrictEqual([new ClozeNote("[a::Hello] Bob"), new ClozeNote("[a::Hello], what is [b::hej]")]);
});

test('Multiple Mixed Notes', () => {
    let input = "Bob - Ed\nYes - No\n[a::Hello] Bob\n[a::Hello], what is [b::hej]"

    expect(textParser.textParser(input, " - ")).toStrictEqual([
        new BasicNote("Bob", "Ed"),
        new BasicNote("Yes", "No"),
        new ClozeNote("[a::Hello] Bob"),
        new ClozeNote("[a::Hello], what is [b::hej]")])
    });