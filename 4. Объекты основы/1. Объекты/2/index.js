function isEmpty(obj) {
    let count = 0;

    for (key in obj) {
        count++;
    }

    if (count != 0){
        return false;
    }

    return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false