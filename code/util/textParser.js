/**
 * 
 * @param {String} text The text to be parsed
 * @returns Returns a JSON object which represent notes, invalid input will return Null
 */
function textParser(text, splitChar){
    let rows = text.split("\n")
    
    let parsed = rows.map(row => {
            let splittedRow = row.split(splitChar)
            //Detect Cloze Note
            if(splittedRow.length === 1){
                console.log("Deteted Cloze Note")
                return JSON.stringify(splittedRow)
            }
            //Basic Note
            else if(splittedRow.length === 2){
                console.log("Deteted Basic Note")
                return JSON.stringify(splittedRow)
            }
            //Something is wrong, return Null
            else{
                return null; //This might now work, might just return null to the map
            }
        })


    console.log(parsed)
}

textParser("Hello - Man\nYes - Portugal", " - ")