import {before} from "node:test";

function fizzbuzz(): void {
    const numbers: number[] = Array.from({length: 143}, (x, i) => i + 1);

    numbers.forEach((num: number): void => {
        let output: string[] = [];

        const modMap: {[key: number]: string} = {
            3: 'Fizz',
            5: 'Buzz',
            7: 'Bang',
            11: 'Bong',
            13: 'Fezz'
        }

        Object.keys(modMap).forEach((key: string) => {
            if (num % Number(key) === 0) {
                if (Number(key) === 11) {
                    output = [];
                }

                if (Number(key) === 13) {
                    const firstB = output.find(s => s.startsWith("B"));

                    const index = output.indexOf(firstB);

                    // output. TODO

                    return;
                }

                output.push(modMap[Number(key)]);
            }
        })



        if (num % 17 === 0) {
            output.reverse();
        }

        console.log(output.join(''));
    });
}

fizzbuzz();
