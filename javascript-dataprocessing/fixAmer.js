const extractedJSON = require('./python-extractor.json');
const fs = require('fs');

function fixAmer () {
    fixedJSON = extractedJSON;

    for (i=0; i< extractedJSON.length; i++) {

        if(fixedJSON[i].text.includes("(amer.)")){
           concatenatedText = fixedJSON[i-1].text + fixedJSON[i].text
           fixedJSON[i-1].text = concatenatedText;


           /* deletes the entry with amer */
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


fixAmer()