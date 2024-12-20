"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euro',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cent',
                    singular: 'Cent',
                    symbol: '',
                },
            },
            texts: {
                and: 'Und',
                minus: 'Minus',
                only: 'Nur',
                point: 'Komma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Billionen' },
                { number: 1000000000, value: 'Milliarde' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Tausend' },
                { number: 100, value: 'Hundert' },
                { number: 90, value: 'Neunzig' },
                { number: 80, value: 'Achtzig' },
                { number: 70, value: 'Siebzig' },
                { number: 60, value: 'Sechzig' },
                { number: 50, value: 'Fünfzig' },
                { number: 40, value: 'Vierzig' },
                { number: 30, value: 'Dreißig' },
                { number: 20, value: 'Zwanzig' },
                { number: 19, value: 'Neunzehn' },
                { number: 18, value: 'Achtzehn' },
                { number: 17, value: 'Siebzehn' },
                { number: 16, value: 'Sechzehn' },
                { number: 15, value: 'Fünfzehn' },
                { number: 14, value: 'Vierzehn' },
                { number: 13, value: 'Dreizehn' },
                { number: 12, value: 'Zwölf' },
                { number: 11, value: 'Elf' },
                { number: 10, value: 'Zehn' },
                { number: 9, value: 'Neun' },
                { number: 8, value: 'Acht' },
                { number: 7, value: 'Sieben' },
                { number: 6, value: 'Sechs' },
                { number: 5, value: 'Fünf' },
                { number: 4, value: 'Vier' },
                { number: 3, value: 'Drei' },
                { number: 2, value: 'Zwei' },
                { number: 1, value: 'Eins' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'Ein Hundert' }],
        };
    }
}
exports.default = Locale;
