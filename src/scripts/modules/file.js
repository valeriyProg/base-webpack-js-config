export class Test {
    constructor() {
        this._word = "AAAAAA";
    }
    say() {
        document.body.innerHTML = `<h1> ${this._word}</h1>`
        console.log("HELLO");
    }
}