const myModule = require('./words.json');

// Create a massive JSON object through Python and then format it in Javascript. This is going to take a while.

 function formatTheBeautifulObject() {
    newArray = []

    // let toJson = JSON.parse(myModule);
    // console.log(JSON.stringify(toJson))
    const mappingTheBeat = myModule.map(item => {return {
        name: (item.fontname.includes("Bold") ? item.text : "dick")}
    
        // if (item.fontname.includes("Bold")){
        //     return newArray.push(item.text)
        // }
        
        //  console.log(newArray)
    });

     console.log(mappingTheBeat)

     {atizar:[
        {meaning1: [
            word1: "word",
            word2: 'word',
            word3: "word"
        ]}
     ]}



}

formatTheBeautifulObject()