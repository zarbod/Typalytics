var prnt = "";
chrome.tabs.executeScript({
    file: "src/js/content.js"
});
chrome.storage.sync.get(["words"], function(result){
    if(result.words.length) {
        document.getElementById("count").innerHTML = result.words.length;
    }
});
window.onclick = function (event) {
    let target = event.target;
    if (target.matches('.clickableBtn')) {
        let clickedEle = document.activeElement.id;
        let ele = document.getElementById(clickedEle);
        if(ele === document.getElementById("practiceButton")){
            //alert("Launching practice...");
            chrome.tabs.create({url: chrome.extension.getURL('src/html/Practice.html')});
        }
        if(ele === document.getElementById("refreshButton")){
            chrome.tabs.executeScript({
                file: "src/js/content.js"
            });
                    chrome.storage.sync.get(["words"], function(result){
                        if(result.words.length) {
                            document.getElementById("count").innerHTML = result.words.length;
                            for(let i = 0; i < result.words.length; i++) {
                                prnt = prnt + result.words[i] + " ";
                            }
                            //alert(prnt);
                        }
                    });
        }
    }
}
//printing in the console of the extension
