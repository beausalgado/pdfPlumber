let testObject = {
    entry: "house",
    meaning1: {},
    meanings: []
   }

function objectNoName () {

    let meaning0 = {
        synonyms: ["test1"],
        antonyms: [],
        americanisms: []
    }

    let meaning2 = {
        synonyms: ["test2"],
        antonyms: [],
        americanisms: []
    }

    let meaning3 = {
        synonyms: ["test3"],
        antonyms: [],
        americanisms: []
    }

    testObject.meanings.push(meaning0)
    testObject.meanings.push(meaning2)
    testObject.meanings.push(meaning3)
    console.log(testObject)
    console.log(testObject.meanings[0])
    console.log(testObject.meanings[1])
    console.log(testObject.meanings[2])


}



objectNoName()