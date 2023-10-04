// https://edabit.com/challenge/b7iHQDw72zzkmgCun

function countBoomerangs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 2]) {
            if (arr[i] !== arr[i + 1]) {
                count++;
            }
        }
    }

    console.log(count);
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) // 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) // 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) // 0
