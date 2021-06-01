//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
    let sum = (n - 2) * 180;
    console.log(sum);
    return sum;
}

sumPolygon(3);
sumPolygon(4);
sumPolygon(6);