var quote = "";
var wrds = [];
var q = [];
const quoteDisplay = document.getElementById("quote");
const quoteInput = document.getElementById("typeArea");

function refreshWords() {
    chrome.storage.sync.get(["words"], function (result) {
        for (word in result.words) {
            wrds.push(result.words[word]);
        }
        var i;
        while (wrds.length > 0) {
            i = Math.floor(Math.random() * wrds.length);
            if (wrds.length === 1) {
                quote = quote + wrds[i];
            } else {
                quote = quote + wrds[i] + " ";
            }
            wrds.splice(i, 1);
        }
        quoteDisplay.innerHTML = '';
        quote.split('').forEach(char => {
            q.push(char);
            const characterSpan = document.createElement("span");
            characterSpan.innerText = char;
            quoteDisplay.appendChild(characterSpan);
        });
    });
}

quoteInput.addEventListener('input', () => {
    const quoteChars = quoteDisplay.querySelectorAll("span");
    const valChars = quoteInput.value.split('');
    let checkSwitch = true;
    quoteChars.forEach((character, index) =>{
        const letter = valChars[index];
        if(letter === character.innerText){
            character.classList.add("correct");
            character.classList.remove("wrong");
            console.log(q);
            console.log(valChars);
            q.forEach((lett, i) =>{
                if(lett !== valChars[i]){
                    checkSwitch = false;
                }
            });
            if(checkSwitch){
                alert('Noice');
            }
        }else if(letter){
            character.classList.add("wrong");
            character.classList.remove("correct");
        }else{
            character.classList.remove("wrong");
            character.classList.remove("correct");
        }
    });
});



refreshWords();