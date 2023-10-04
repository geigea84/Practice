// https://edabit.com/challenge/48EJWLhF224na8po3

function generation(x, y) {
    const map = createGenerationMap();

    const key = x.toString().concat(y);

    console.log(map.get(key));
}

function createGenerationMap() {
    const map = new Map();

    map.set("-3m", "great grandfather");
    map.set("-3f", "great grandmother");
    map.set("-2m", "grandfather");
    map.set("-2f", "grandmother");
    map.set("-1m", "father");
    map.set("-1f", "mother");
    map.set("0m", "me");
    map.set("0f", "me");
    map.set("1m", "son");
    map.set("1f", "daughter");
    map.set("2m", "grandson");
    map.set("2f", "granddaughter");
    map.set("3m", "great grandson");
    map.set("3f", "great granddaughter");

    return map;
}

generation(2, "f") // "granddaughter"

generation(-3, "m") // "great grandfather"

generation(1, "f") // "daughter"
