export function roll(sides, dice, rolls){
    var results = [];

    for (let i = 0; i < rolls; i++){
        var sum = 0;
        for (let j = 0; j < dice; j++){
            sum += Math.floor(Math.random() * sides) + 1; //praying its between 0 and 1 exclusive
        }
        results.push(sum);
    }

    let output = {
        sides: sides,
        dice: dice,
        rolls: rolls,
        results: results
    }
    return output;
}