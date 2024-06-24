let str = "Purple";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}