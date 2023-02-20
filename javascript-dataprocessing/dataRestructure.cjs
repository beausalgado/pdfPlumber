const database = require('./database.json');
const fs = require('fs');

function databaseRestructure () {

    for (i=0; i< database.length; i++) {
      database[i].meanings = []


      if (database[i].meaning1) {
        database[i].meanings.push(database[i].meaning1)
        delete database[i].meaning1
      }

      if (database[i].meaning2) {
        database[i].meanings.push(database[i].meaning2)
        delete database[i].meaning2
      }

      if (database[i].meaning3) {
        database[i].meanings.push(database[i].meaning3)
        delete database[i].meaning3
      }
      if (database[i].meaning4) {
        database[i].meanings.push(database[i].meaning4)
        delete database[i].meaning4
      }
      if (database[i].meaning5) {
        database[i].meanings.push(database[i].meaning5)
        delete database[i].meaning5
      }

      if (database[i].meaning6) {
        database[i].meanings.push(database[i].meaning6)
        delete database[i].meaning6
      }

      if (database[i].meaning7) {
        database[i].meanings.push(database[i].meaning7)
        delete database[i].meaning7
      }

      if (database[i].meaning8) {
        database[i].meanings.push(database[i].meaning8)
        delete database[i].meaning8
      }

      if (database[i].meaning9) {
        database[i].meanings.push(database[i].meaning9)
        delete database[i].meaning9
      }



    }

    try {
        fs.writeFileSync('databaseRestructured.json', JSON.stringify(database));
        // file written successfully
      } catch (err) {
        console.error(err);
      }

}


databaseRestructure()