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
    
    let newMeaningArray = []

 for (let j = i+1; myModule[j].fontname.includes("Regular") ;j++) {

        
        newMeaningArray.push(myModule[j].text);
        
    }
 createNewEntry["meaning" + [i]] = newMeaningArray;
    console.log(createNewEntry)

return newMeaningArray
    
}



    

    }
   
     
    }
    formatTheBeautifulObject()
    