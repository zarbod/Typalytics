var words = [];
for(let i = 0; i < document.getElementsByClassName("replayWord").length; i++){
    words.push(document.getElementsByClassName("replayWord")[i].innerHTML);
}
console.log(words);
