function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42;
    }else if (someValue <42) {
        return 42 - someValue;
    }else {
        return 0;
    }
}


function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);

    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blocks;
    const feetInBlocks = 264;

    if (start > destination) {
        blocks = start - destination;
    }else if (start < destination) {
        blocks = destination - start;
    }else {
        blocks = 0;
    }

    return blocks * feetInBlocks;
}


function calculatesFarePrice(start, destination) {
    const freeRide = 0;
    const farePerFeet = 0.02;
    const flatRate = 25;
    let distanceTravelled = distanceTravelledInFeet(start,destination);
    let fare;

    if (distanceTravelled < 400) {
        fare = freeRide;
    }else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        fare = (distanceTravelled - 400) * farePerFeet;
    }else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        fare = flatRate;
    }else {
        return "cannot travel that far";
    }
    
    return fare;
}