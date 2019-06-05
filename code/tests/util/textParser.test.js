let textParser = require("../../util/textParser")

test('Basic Note', () => {
    let input = "Bob - Ed"

    expect(textParser.textParser(input, " - ")).toStrictEqual([{front : "Bob", back : "Ed"}]);
});

test('Cloze Note', () => {
    let input = "[a::Hello] Bob"

    expect(textParser.textParser(input, " - ")).toStrictEqual([{text : "[a::Hello] Bob"}]);
});

test('Multiple Basic Notes', () => {
    let input = "Bob - Ed\nYes - No"

    expect(textParser.textParser(input, " - ")).toStrictEqual([{front : "Bob", back : "Ed"}, {front : "Yes", back : "No"}]);
});

test('Multiple Cloze Notes', () => {
    let input = "[a::Hello] Bob\n[a::Hello], what is [b::hej]"

    expect(textParser.textParser(input, " - ")).toStrictEqual([{text : "[a::Hello] Bob"}, {text : "[a::Hello], what is [b::hej]"}]);
});

test('Multiple Mixed Notes', () => {
    let input = "Bob - Ed\nYes - No\n[a::Hello] Bob\n[a::Hello], what is [b::hej]"

    expect(textParser.textParser(input, " - ")).toStrictEqual([{front : "Bob", back : "Ed"}, {front : "Yes", back : "No"}, {text : "[a::Hello] Bob"}, {text : "[a::Hello], what is [b::hej]"}]);
});