// Given an overworld origin, overworld destination, and nether origin,
// returns a nether destination

function wherePortal(oox, ooy, odx, ody, nox, noy) {
    let xDiff = odx - oox;
    let yDiff = ody - ooy;

    let xDiv = Math.floor(xDiff / 8);
    let yDiv = Math.floor(yDiff / 8);

    console.log((xDiv + nox) + ", " + (yDiv + noy));
}

wherePortal(-171, -128, -5100, -2700, -22, -29);
