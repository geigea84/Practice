let str = "";

function clearStr() {
    str = "";
}

function repetition(txt, n) {
    if (n > 0) {
        n = n - 1;
        //str = str.concat(txt);
        console.log(txt);
        setTimeout(repetition, 1850, txt, n);

    }
    else {
        // console.log(str);
        //setTimeout(clearStr, 1000);
    }
}

repetition("I like to move it, move it \n", 3);
setTimeout(repetition, 5900, "You like to... \n", 1);
setTimeout(repetition, 7000, "Move it! \n", 1);