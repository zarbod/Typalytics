//alert('running');
chrome.storage.sync.get(["words"], function(result){
    var prnting = "";
    for(let word in result.words){
        prnting = prnting + "  " + result.words[word];
    }
    //alert(prnting);
    document.getElementById("WordsElement").innerHTML = "Words you have missed :: " + prnting;
});