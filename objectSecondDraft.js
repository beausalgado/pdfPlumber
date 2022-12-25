const myModule = require('./words.json');

// Create a massive JSON object through Python and then format it in Javascript. This is going to take a while.

 function formatTheBeautifulObject() {
    outerArray = []

for (let i=0; i<myModule.length; i++) {

/*     Creates new object when fontname includes bold word and pushes to array */
if (myModule[i].fontname.includes("Bold")) {
/*     remove the let to createNewEntry so that it's accessible outside the function */
     createNewEntry = {
     entry:myModule[i].text,
/*      Create a first meaning object since all words have at least one meaning */
     meaning1: {}
    }
    
    let newMeaningArray = []
/* Runs a second for loop to push synonyms to array and then attaches the array to the object */ 
/* Starts on i plus 1 so that it doesn't include the bold word */ 
 for (let j = i+1; !myModule[j].fontname.includes("Bold") ;j++) {



/*    if it doesn't have spaces and has regular text, then it's a normal entry */
        if (myModule[j].fontname.includes("Regular") && !/\s/.test(myModule[j].text)){
            console.log("regular", j)
        }
        /* If it has spaces and doesn't have the text (amer.), then it's a phrase */
        if (/\s/.test(myModule[j].text) && !myModule[j].text.includes("(amer.)")){
            console.log("phrase", j)
        }
        if (myModule[j].text.includes("(amer.)")) {
            console.log("americanismo", j)

        }
        if (myModule[j].fontname.includes("Italic")) {
            console.log("italics", j)

        }


        
        // newMeaningArray.push(myModule[j].text);
        
    }
    /*     Labels the meaning so as to differenciate from other meanings */
    createNewEntry.meaning1.words = newMeaningArray;
    console.log(createNewEntry)


/* stop the for loops  */
 return newMeaningArray
    
}



    

    }
   
     
    }
    formatTheBeautifulObject()
    