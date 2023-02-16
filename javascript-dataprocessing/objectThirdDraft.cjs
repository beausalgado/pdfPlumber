const extractedJSON = require('./python-extractor.json');
const fs = require('fs');

// Create a massive JSON object through Python and then format it in Javascript. This is going to take a while.

 function formatTheBeautifulObject() {
    masterArray = []
for (let i=0; i<extractedJSON.length; i++) {

/*     Creates new object when fontname includes bold word and pushes to array */
if (extractedJSON[i].fontname.includes("Bold")) {
/*     remove the let to newEntry so that it's accessible outside the function */
     newEntry = {
     entry:extractedJSON[i].text,
     meanings: []
    }

    NewMeaning = {
        meaning1: {}
    }

/* a counter to determine which meaning per word */
    let meaningCount = 1;

    /* Arrays to catch the categorized data */
    let synonyms = [];
    let idioms = [];
    let americanisms = [];
    let antonyms = [];

/* Runs a second for loop to push synonyms to array and then attaches the array to the object */ 
/* Starts on i plus 1 so that it doesn't include the bold word */ 
 for (let j = i+1; (extractedJSON[j] ? !extractedJSON[j].fontname.includes("Bold") : extractedJSON[j]) ;j++) {
     


     /* This is to filter for the second meaning of a word. Here the text is always regular and there's a gap between 12 and 14 between the start and the word before it and isn't a phrase */
     if((extractedJSON[j].top - extractedJSON[j-1].top > 12 && extractedJSON[j].top - extractedJSON[j-1].top < 14) && (extractedJSON[j].fontname.includes("Regular") && !/\s/.test(extractedJSON[j].text))) {

        /* First it adds the previous meaning to the entry object */
        meaningCount = meaningCount + 1;

        /* adds another meaning to the entry object */
        NewMeaning["meaning" + meaningCount] = {};

/* sets the arrays equal to zero to catch another group */
         synonyms = [];
         idioms = [];
         americanisms = [];
         antonyms = [];
        }
        
        /*    if it doesn't have spaces and has regular text, then it's a normal entry */
        if (extractedJSON[j].fontname.includes("Regular") && !/\s/.test(extractedJSON[j].text)){
            /* collects the synonyms into an array */
            synonyms.push(extractedJSON[j].text);
        }
        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!NewMeaning["meaning" + meaningCount].synonyms && synonyms.length > 0){

            NewMeaning["meaning" + meaningCount].synonyms = synonyms;
        }
        /* clears the array for the second meaning */

        /* If it has spaces and doesn't have the text (amer.), then it's a phrase */
        if (/\s/.test(extractedJSON[j].text) && !extractedJSON[j].text.includes("(amer.)")){
            idioms.push(extractedJSON[j].text);
        }

        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!NewMeaning["meaning" + meaningCount].idioms && idioms.length > 0){

            NewMeaning["meaning" + meaningCount].idioms = idioms;
        }
        if (extractedJSON[j].text.includes("(amer.)")) {
            americanisms.push(extractedJSON[j].text);
        }

        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!NewMeaning["meaning" + meaningCount].americanisms && americanisms.length >0){

            NewMeaning["meaning" + meaningCount].americanisms = americanisms;

        }


        if (extractedJSON[j].fontname.includes("Italic")) {
            antonyms.push(extractedJSON[j].text);
            
        }


        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!NewMeaning["meaning" + meaningCount].antonyms && antonyms.length > 0 ){


            NewMeaning["meaning" + meaningCount].antonyms = antonyms;
        }
    }

    /* Pushes the new meaning to the newentry object according to the current meaning count */
  //  console.log(newEntry)
    newEntry.meanings.push(NewMeaning["meaning" + meaningCount])

    /* Pushes the entry to the master array */
    masterArray.push(newEntry)
    console.log(masterArray[0].meanings)
    /* stop the for loops  */
    
    
    
}

}
let json = JSON.stringify(masterArray)
try {
    fs.writeFileSync('database.json', json);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
   return masterArray
    }

formatTheBeautifulObject()
    