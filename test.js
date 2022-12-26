const jsonFile = require('./python-extractor')


 function test() {
 for(i=0; jsonFile.length; i++) {
    console.log(jsonFile[i].text)
 }
}

test()