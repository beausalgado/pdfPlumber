const extractedJSON = require('./python-extractor.json');
const fs = require('fs');

function fixSpacedPhrases () {
    fixedJSON = extractedJSON;

    for (i=0; i< fixedJSON.length - 1; i++) {

        if(fixedJSON[i].x0 - fixedJSON[i+1].x0 < -5 && fixedJSON[i].x0 - fixedJSON[i+1].x0 > -20){


            concatenatedText = fixedJSON[i].text + " " + fixedJSON[i+1].text;

           fixedJSON[i].text = concatenatedText;



            extractedJSON.splice(i+1, 1);

        }
    }

    try {
        fs.writeFileSync('python-extractor.json', JSON.stringify(fixedJSON));
        // file written successfully
      } catch (err) {
        console.error(err);
      }

}


fixSpacedPhrases()