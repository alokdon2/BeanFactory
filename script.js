//CREATING SLEEP FUNCTION
async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// ACTUAL CODE
// CHANGING TEXT EFFECT IN CSS & JS

let txt = document.getElementById("ctext");
// ADD CUSTOM WORD HERE
// DONT CHANGE ANY COMMAS OR STYLING

let data = ["10% BNB REWARDS...", "2% LIQUIDITY...", "4% MARKETING..."];

// END OF CHANGEABLE DATA



let finalTxt = "";
let index = 0;
let length = 0;
let i = 0;

async function textAnim() {
    length = data[index].length;
    for (i = 0; i < length; i++) {

        finalTxt = finalTxt + data[index][i];
        txt.innerHTML = finalTxt;
        await sleep(0.2);

    }
    i = 0;
    finalTxt = "";

    for (i = 0; i < length; i++) {
        for (j = 0; j < (length - i); j++) {
            finalTxt = finalTxt + data[index][j];
        }
        await sleep(0.2);

        txt.innerHTML = finalTxt;
        finalTxt = "";



    }


    txt.innerHTML = "";
    finalTxt = "";

    if (index == (data.length - 1)) {
        index = 0;
    }
    else {
        index++;
    }
    textAnim();

}

textAnim();
