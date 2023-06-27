import {Interface} from "readline";
import {isNumberObject} from "util/types";
import {isNullOrUndefined} from "util";

const readline = require("readline");

const modMap: {[key: number]: string} = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Bang',
    11: 'Bong',
    13: 'Fezz'
};

function fizzbuzz(maxBound: number, rules: number[]): void {
    const numbers: number[] = Array.from({length: maxBound}, (x, i) => i + 1);

    numbers.forEach((num: number): void => {
        let output: string[] = [];

        Object.keys(modMap).forEach((key: string) => {
            if (!rules.includes(Number(key))) {
                return;
            }

            if (num % Number(key) === 0) {
                if (Number(key) === 11) {
                    output = [];
                }

                if (Number(key) === 13) {
                    const firstB: string | undefined = output.find(s => s.startsWith("B"));

                    const index: number = firstB ? output.indexOf(firstB) : -1;
                    const outputCopy: string[] = [...output];

                    if (index > -1) {
                        const left: string[] = output.splice(0, index);
                        const right: string[] = outputCopy.splice(index);

                        output = left.concat([modMap[Number(key)]], right)
                    }

                    return;
                }

                output.push(modMap[Number(key)]);
            }
        })

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

const rl: Interface =
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.question("Enter the max value and the desired rules: \n", function (input: string): void {
    console.log("You entered " + input);

    const inputArray: number[] = input.split(' ').map((i: string) => Number(i));

    const maxBound = inputArray[0];
    const rules = inputArray.splice(1);

    fizzbuzz(maxBound, rules);

    rl.close();
});
