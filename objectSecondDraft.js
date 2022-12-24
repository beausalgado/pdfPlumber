const myModule = require('./words.json');

// Create a massive JSON object through Python and then format it in Javascript. This is going to take a while.

 function formatTheBeautifulObject() {
    outerArray = []

     
for (let i=0; i<myModule.length; i++) {

/*     Creates new object when fontname includes bold word and pushes to array */
if (myModule[i].fontname.includes("Bold")) {
/*     remove the let to createNewEntry so that it's accessible outside the function */
     createNewEntry = {
     entry:myModule[i].text
    }
    
}
if (myModule[i].fontname.includes("Regular")) {
    let newMeaningArray = []

    for (let j = i; myModule[j].fontname.includes("Regular") ;j++) {

        
        newMeaningArray.push(myModule[j].text);
        
    }
    console.log(newMeaningArray)
        
        

        
 
    
    // console.log(createNewEntry)
    // createNewEntry.meaning1 = "test"
    // console.log(createNewEntry)
} 


    

    }
    console.log(outerArray)
     
    }
    formatTheBeautifulObject()
    