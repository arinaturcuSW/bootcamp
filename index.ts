import {Interface} from "readline";
import * as readline from "readline";

const modMap: {[key: number]: string} = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Bang',
    11: 'Bong',
    13: 'Fezz'
};

function range(upperBound: number): number[] {
    return Array.from({length: upperBound}, (x, i) => i + 1);
}

function insertElementAtIndex(array: string[], index: number, element: string): string[] {
    if (index <= -1) {
        return array;
    }

    const left: string[] = [...array].splice(0, index);
    const right: string[] = [...array].splice(index);

    return left.concat([element], right);
}

function fizzbuzz(maxBound: number, rules: number[]): void {
    const numbers: number[] = range(maxBound);

    numbers.forEach((num: number): void => {
        let output: string[] = [];

        Object.keys(modMap).forEach((key: string) => {
            if (!rules.includes(Number(key)) || num % Number(key) !== 0) {
                return;
            }

            if (Number(key) === 11) {
                output = [];
            }

            if (Number(key) === 13) {
                const firstBWord: string | undefined = output.find(s => s.startsWith("B"));
                const index: number = firstBWord ? output.indexOf(firstBWord) : -1;

                output = insertElementAtIndex(output, index, modMap[Number(key)]);
                return;
            }

            output.push(modMap[Number(key)]);
        });

        if (num % 17 === 0) {
            output.reverse();
        }

        if (output.length) {
            console.log(output.join(''));
            return;
        }

        console.log(num);
    });
}

const rl: Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the max value followed by the desired rules: \n", function (input: string): void {
    console.log("You entered " + input);

    const inputArray: number[] = input.split(' ').map((i: string) => Number(i));

    const maxBound = inputArray[0];
    const rules = inputArray.splice(1);

    fizzbuzz(maxBound, rules);

    rl.close();
});
