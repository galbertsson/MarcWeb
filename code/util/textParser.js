/**
 * 
 * @param {String} text The text to be parsed
 * @returns Returns a JSON array which represent the notes, invalid input will return null
 */
exports.textParser = function textParser(text, splitChar){
    
    let rows = text.split("\n")

    let parsed = rows.map(row => {
            let splittedRow = row.split(splitChar)
            
            //Detect Cloze Note
            if(splittedRow.length === 1){
                return {text: splittedRow[0]}
            }
            //Basic Note
            else if(splittedRow.length === 2){
                return {front: splittedRow[0], back: splittedRow[1]}
            }
            //Something is wrong, return null
            else{
                return null;
            }
        })

    //Remove any invalid notes
    parsed = parsed.filter((e) =>  e !== null)

    return parsed
}