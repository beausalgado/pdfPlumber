const extractedJSON = require('./python-extractor.json');
const fs = require('fs');

function deleteSingleLetterEntries () {
    fixedJSON = extractedJSON;

    for (i=0; i< extractedJSON.length; i++) {

        if(fixedJSON[i].text.length < 2){

            extractedJSON.splice(i, 1);

        }
    }

    try {
        fs.writeFileSync('python-extractor.json', JSON.stringify(fixedJSON));
        // file written successfully
      } catch (err) {
        console.error(err);
      }

}


deleteSingleLetterEntries()