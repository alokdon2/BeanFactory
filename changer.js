let c1 = document.getElementById("hello");


let txtss = ["Just <span style='color:orange'>Hodl</span>", "10% <span style='color:orange'>BnB</span> Rewards"];


async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}



async function changes() {

    c1.style.bottom = "0";

    c1.innerHTML = txtss[0];

    await sleep(2);
    c1.style.bottom = "-7vh";
    await sleep(1);
    c1.innerHTML = txtss[1];
    c1.style.bottom = "0";
    await sleep(2);
    c1.style.bottom = "-7vh";
    await sleep(1)




    changes();




}

changes();

