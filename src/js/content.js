var wrds = [];
var addableWords = [];

for(let i = 0; i < document.getElementsByClassName("replayWord").length; i++){
    wrds.push(document.getElementsByClassName("replayWord")[i].innerHTML);
}
console.log(wrds);
chrome.storage.sync.get(["words"], function(res){
    if(res.words){
        addableWords = res.words;
        for(let word in wrds){
            if(res.words.indexOf(wrds[word]) === -1) {
                    addableWords.push(wrds[word]);
                }
            }
        chrome.storage.sync.set({words: addableWords}, function(){
           console.log("Adding total " + addableWords);
        });
    }else {
        chrome.storage.sync.set({words: wrds}, function () {
            //this runs when the set is complete
            console.log("New Words :: " + wrds);

            chrome.storage.sync.get(["words"], function (result) {
                console.log(result.words);
            });
        });
    }
});