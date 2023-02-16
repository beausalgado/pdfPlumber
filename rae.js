import { RAE } from 'rae-api';

const rae = new RAE();

// gets the first 'hola' definition as string


async function define (){
const search = await rae.searchWord('aballar');
const wordId = search.getRes()[1].getId(); // gets 'hola' word id

const result = await rae.fetchWord(wordId); // fetches the word as object
const definitions = result.getDefinitions(); // gets all 'hola' definitions as Defintion[]
const first = definitions[0].getDefinition(); 
        


    for (let index = 0; index < definitions.length; index++) {
        console.log(definitions[index].getDefinition())
        
    }
}

define()

