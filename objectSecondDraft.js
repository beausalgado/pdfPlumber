const myModule = require('./wordOG.json');

// Create a massive JSON object through Python and then format it in Javascript. This is going to take a while.

 function formatTheBeautifulObject() {
    outerArray = []

for (let i=0; i<myModule.length; i++) {

/*     Creates new object when fontname includes bold word and pushes to array */
if (myModule[i].fontname.includes("Bold")) {
/*     remove the let to createNewEntry so that it's accessible outside the function */
     createNewEntry = {
     entry:myModule[i].text,
     meaning1: {}
    }
    /* An empty array to add meanings to */
    let newMeaningArray = []
/* a counter to determine which meaning per word */
    let meaningCount = 1;
    let words = [];
    let phrases = [];
    let americanisms = [];
    let antonyms = [];
/* Runs a second for loop to push synonyms to array and then attaches the array to the object */ 
/* Starts on i plus 1 so that it doesn't include the bold word */ 
 for (let j = i+1; !myModule[j].fontname.includes("Bold") ;j++) {



     /* This is to filter for the second meaning of a word. Here the text is always regular and there's a gap between 12 and 14 between the start and the word before it and isn't a phrase */
     if((myModule[j].top - myModule[j-1].top > 12 && myModule[j].top - myModule[j-1].top < 14) && (myModule[j].fontname.includes("Regular") && !/\s/.test(myModule[j].text))) {
        /* First it adds the previous meaning to the entry object */
        meaningCount = meaningCount + 1;
        /* adds another meaning to the entry object */
        createNewEntry["meaning" + meaningCount] = {};

/* sets the arrays equal to zero to catch another group */
         words = [];
         phrases = [];
         americanisms = [];
         antonyms = [];
        }
        
        /*    if it doesn't have spaces and has regular text, then it's a normal entry */
        if (myModule[j].fontname.includes("Regular") && !/\s/.test(myModule[j].text)){
            /* collects the words into an array */
            words.push(myModule[j].text);
        }
        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!createNewEntry["meaning" + meaningCount].words){

            createNewEntry["meaning" + meaningCount].words = words;
        }
        /* clears the array for the second meaning */

        /* If it has spaces and doesn't have the text (amer.), then it's a phrase */
        if (/\s/.test(myModule[j].text) && !myModule[j].text.includes("(amer.)")){
            phrases.push(myModule[j].text);
        }

        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!createNewEntry["meaning" + meaningCount].phrases){

            createNewEntry["meaning" + meaningCount].phrases = phrases;
        }
        if (myModule[j].text.includes("(amer.)")) {
            americanisms.push(myModule[j].text);
        }

        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!createNewEntry["meaning" + meaningCount].americanisms){

            createNewEntry["meaning" + meaningCount].americanisms = americanisms;

        }


        if (myModule[j].fontname.includes("Italic")) {
            antonyms.push(myModule[j].text);
            
        }


        /* Adds the array onto the object but first checks to see if it exists so that it doesn't execute it every time round*/
        if (!createNewEntry["meaning" + meaningCount].antonyms){


            createNewEntry["meaning" + meaningCount].antonyms = antonyms;
        }
    }

    console.log(createNewEntry)

/* stop the for loops  */
 return createNewEntry
    
}

    }
   
    }

formatTheBeautifulObject()
    