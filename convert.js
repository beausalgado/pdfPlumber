const myModule = require('./words.json');

// Create a massive JSON object through Python and then format it in Javascript. This is going to take a while.

 function formatTheBeautifulObject() {
    outerArray = []

/* Tried to fashion object with map function  */

    // let toJson = JSON.parse(myModule);
    // console.log(JSON.stringify(toJson))
    // const mappingTheBeat = myModule.map(item => {return {
    //     entry: (item.fontname.includes("Bold") ? item.text : "dick")}
    
    //     if (item.fontname.includes("Bold")){
    //         return newArray.push(item.text)
    //     }
        
    //      console.log(newArray)
    // });

    //  console.log(mappingTheBeat)

/* Trying to fashion object with for loop  */
     
for (let i=0; i<myModule.length; i++) {

/*     Creates new object when fontname includes bold word and pushes to array */

    if (myModule[i].fontname.includes("Bold")) {
           let createNewEntry = {
            entry:myModule[i].text
           }

/* Add synonyms to the entry before pushing to array. A for loop within the for loop  */

   while (myModule[i].fontname.includes("Regular")) {
          let newMeaningArray = [];
          newMeaningArray.push(myModule[i].text);
          console.log(newMeaningArray)
          console.log("yay")
        }
        // createNewEntry.meaning.push(newMeaningArray)


           outerArray.push(createNewEntry)
        }

//    if (myModule[i].fontname.includes("Regular")){

//    }  

    }
    console.log(outerArray)
     
    }
    formatTheBeautifulObject()
    

//  {
    // entry: atizar,
//     meaning1: [
//         word1: "word",
//         word2: 'word',
//         word3: "word"
//         frase1: "frase",
//         frase2: "frase",
//         frase3: "frase",
//         italics1: "italics",
//         italics2: "italics",
//         italics3: "italics",
        
//     ],

//     meaning2: [
//         word1: "word",
//         word2: 'word',
//         word3: "word"
//         frase1: "frase",
//         frase2: "frase",
//         frase3: "frase",
//         italics1: "italics",
//         italics2: "italics",
//         italics3: "italics",
//     ]
// }