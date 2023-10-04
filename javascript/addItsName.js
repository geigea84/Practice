// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

function addName(obj, name, value) {
    let pair = {"key" : value}
    renameKey(pair, "key", name);
    console.log(obj = {...obj, ...pair});
}

function renameKey(obj, oldKey, newKey) {
    if (oldKey !== newKey) {
        Object.defineProperty(
            obj,
            newKey,
            Object.getOwnPropertyDescriptor(obj, oldKey)
        );

        delete obj[oldKey];
    }
}

addName({}, "Brutus", 300) // { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) // { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) // { piano: 500, stereo: 300, Caligula: 440 }
