let array1 = [1, 2, 'house', 4, 'barn']
let array2 = [1, 2, 3, 4, 5]
let array3 = ['house', 'barn', 3, 4, 5]
let object1 = [
    {
        element1: "bla1",
        element2: "one",
        element3: 2,
        element4: 3,
    },
    {
        element1: "bla1",
        element2: "two",
        element3: 2,
        element4: 3,
    },
    {
        element1: "bla1",
        element2: 2,
        element3: 2,
        element4: 3,
    }
]

// let array2 = [1, 2, 3, 4, 5]
function forloop () {

// for (i = 0; i<3; i++){
//     console.log(object1[i].element2)
// for (j = i; !Number.isInteger(object1[j].element2); j++){

//     console.log(object1[j].element2, "second")

// }
// // object1[i].element2
// // console.log(Number.isInteger(object1[i].element2))
// // console.log(object1[1].element2)
// }
array1.splice(2, 1)

console.log(array1)

}

forloop()