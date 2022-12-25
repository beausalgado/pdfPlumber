let array = [
    {
        "text": "atizar",
        "x0": 84.5748,
        "x1": 111.9078,
        "top": 139.35689999999988,
        "doctop": 139.35689999999988,
        "bottom": 148.35689999999988,
        "upright": true,
        "direction": 1,
        "fontname": "AAAAAC+Futura-Bold"
    },
    {
        "text": "avivar",
        "x0": 84.5748,
        "x1": 104.8563,
        "top": 150.21989999999994,
        "doctop": 150.21989999999994,
        "bottom": 159.21989999999994,
        "upright": true,
        "direction": 1,
        "fontname": "AAAAAB+AGaramond-Regular"
    },
    {
        "text": "excitar",
        "x0": 84.5748,
        "x1": 107.208,
        "top": 161.03790000000004,
        "doctop": 161.03790000000004,
        "bottom": 170.03790000000004,
        "upright": true,
        "direction": 1,
        "fontname": "AAAAAB+AGaramond-Regular"
    },
    {
        "text": "fomentar de frente",
        "x0": 84.5748,
        "x1": 116.3052,
        "top": 258.39989999999995,
        "doctop": 258.39989999999995,
        "bottom": 267.39989999999995,
        "upright": true,
        "direction": 1,
        "fontname": "AAAAAB+AGaramond-Regular"
    },
    {
        "text": "incitar a las canchas",
        "x0": 84.5748,
        "x1": 106.902,
        "top": 269.21789999999993,
        "doctop": 269.21789999999993,
        "bottom": 278.21789999999993,
        "upright": true,
        "direction": 1,
        "fontname": "AAAAAB+AGaramond-Regular"
    },
    {
        "text": "moderar",
        "x0": 84.5748,
        "x1": 112.02300000000001,
        "top": 283.01489999999995,
        "doctop": 283.01489999999995,
        "bottom": 292.01489999999995,
        "upright": true,
        "direction": 1,
        "fontname": "AAAAAD+AGaramond-Italic"
    },
]



function test () {
    
    let hi = "hi I have spaces";
    // console.log("no phrase")
for (i=0; i<array.length; i++){

    if (/\s/.test(array[i].text)){
        console.log("true")
    }
    else {
        
        console.log("false")
    }

}


//     let text = "The best things in life are free";
// let pattern = /\s/;
// let result = pattern.test(hi);
// console.log(result)
}

test()